import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProgressService {

  private loadingSubject = new BehaviorSubject<boolean>(false);
  loadingStateChanged = this.loadingSubject.asObservable();

  constructor() { }

  setLoading(loading: boolean) {
    this.loadingSubject.next(loading); // Emit the new loading state
  }


  getLoading(): boolean {
    return this.loadingSubject.value; // Return current loading state
  }
}