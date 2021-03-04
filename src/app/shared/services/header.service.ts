import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {
  private greenThemeEventEmitter$;

  constructor() { 
    this.greenThemeEventEmitter$ =  new BehaviorSubject<string>('');
  }

  setTheme(theme: string) {
    this.greenThemeEventEmitter$.next(theme);
  }

  observeThemeChange(): Observable<string> {
    return this.greenThemeEventEmitter$.asObservable();
  }
}
