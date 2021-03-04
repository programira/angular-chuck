import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {
  greenThemeEventEmitter$ = new BehaviorSubject<string>('');

  constructor() { }

  setTheme(theme: string) {
    this.greenThemeEventEmitter$.next(theme);
  }

  observeThemeChange(): Observable<string> {
    return this.greenThemeEventEmitter$.asObservable();
  }
}
