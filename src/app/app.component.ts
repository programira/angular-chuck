import { Component, HostBinding } from '@angular/core';
import { HeaderService } from './shared/services/header.service';
import { from, ReplaySubject } from 'rxjs';
import { debounceTime, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-chuck';
  @HostBinding('class')
  componentCssClass!: string;

  protected destroyed$ = new ReplaySubject<void>();
  takeUntilDestroyed = takeUntil(this.destroyed$);

  constructor(private headerService: HeaderService) {
  }

  ngOnInit() {const lsTheme = localStorage.getItem('theme');
    if (!!lsTheme) {
      this.headerService.setGreenTheme(lsTheme);
    }
    this.headerService
      .observeThemeChange()
      .pipe(debounceTime(100), takeUntil(this.destroyed$))
      .subscribe((theme: string) =>  {
        this.setTheme(theme);
        localStorage.setItem('theme', theme ? 'green-theme' : '');
      });
  }
  ngOnDestroy(): void {
    this.destroyed$.next();
    this.destroyed$.complete();
  }

  setTheme(theme: string) {
    const html = document.documentElement;
    if (html.classList.contains(this.componentCssClass)) {
      html.classList.remove(this.componentCssClass);
    } else if (theme) {
      html.classList.add(theme);
    }
    this.componentCssClass = theme;
  }
}
