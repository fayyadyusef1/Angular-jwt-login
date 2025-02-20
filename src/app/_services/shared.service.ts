import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  public currentLanguage: Subject<string>;
  public currentDirection: Subject<string>;
  private sidenavClosedSubject: Subject<void> = new Subject<void>();
  public sidenavClosed$: Observable<void> = this.sidenavClosedSubject.asObservable();

  constructor(private translate: TranslateService) {
    this.currentLanguage = new Subject<string>();
    this.currentLanguage.next(translate.currentLang); // Initialize the current language

    this.currentDirection = new Subject<string>();
    this.currentDirection.next(this.getDirectionFromLanguage(translate.currentLang)); // Initialize the current direction
  }

  closeSidenav(): void {
    this.sidenavClosedSubject.next();
  }

  changeLanguage(lang: string) {
    this.translate.use(lang);
    this.currentLanguage.next(lang); // Update the current language
    this.currentDirection.next(this.getDirectionFromLanguage(lang)); // Update the current direction
  }

  private getDirectionFromLanguage(lang: string): string {
    // Determine the direction based on the language
    // You can customize this logic based on your language requirements
    return lang === 'ar' ? 'rtl' : 'ltr';
  }
  
}