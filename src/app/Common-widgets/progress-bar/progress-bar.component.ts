import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { ProgressService } from 'src/app/_services/progress.service';
import { RfqService } from 'src/app/_services/rfq.service';
import { ApiResponse } from 'src/Models/apiResponse';

@Component({
  selector: 'app-progress-bar',
  template: `
    <div
      class="cssload-overlay"
      [ngClass]="{ show: progressService.getLoading() }"
    ></div>
    <div *ngIf="progressService.getLoading()" class="cssload-container">
      <div class="spinner"></div>
      <!-- Spinner added -->
      <div class="progress-info">
        <div class="progress-bar" [style.width.%]="progress"></div>
        <div class="progress-text">
          Scanning files, please wait.... {{ progress | number : '1.0-0' }}%
          Completed
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./progress-bar.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class ProgressBarComponent implements OnInit, OnDestroy {
  progress: number = 0; // Progress percentage
  private intervalId: any;

  constructor(
    public progressService: ProgressService,
    private rfqService: RfqService
  ) {}

  ngOnInit() {
    // console.log("ngOnInit ProgressBarComponent");
    // Subscribe to loading state changes
    this.progressService.loadingStateChanged.subscribe(isLoading => {
      if (isLoading) {
        this.getDurationAndStartProgress();
        document.body.style.overflow = 'hidden'; // Disable scrolling
      } else {
        this.stopProgress();
        document.body.style.overflow = ''; // Re-enable scrolling
      }
    });
  }

  startProgress(duration: number) {
    this.progress = 0; // Reset progress to 0%
    const interval = 100; // Update interval in milliseconds
    const increment = (interval / (duration * 1000)) * 100; // Calculate increment percentage
    this.intervalId = setInterval(() => {
      this.progress += increment;
      if (this.progress >= 100) {
        this.stopProgress();
      }
    }, interval);
  }

  stopProgress() {
    clearInterval(this.intervalId);
    this.progress = 100; // Ensure progress is 100% when finished
  }

  ngOnDestroy() {
    // Clear the interval when the component is destroyed to prevent memory leaks
    this.stopProgress();
  }
  getDurationAndStartProgress() {
    this.rfqService.getProgBarDuration().subscribe((response: ApiResponse) => {
      if (response.code == "1") { // Assuming code "1" indicates success
        const duration = response.data['duration']; // Access the duration from the response object
        // console.log("duration : ",duration)
        this.startProgress(duration); // Pass the duration to startProgress
      } else {
        console.error('Error fetching duration:', response.message);
      }
    }, (error) => {
      console.error('API Error:', error);
    });
  }
}