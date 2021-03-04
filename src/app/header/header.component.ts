import { Component, OnInit } from '@angular/core';
import { HeaderService } from '../shared/services/header.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isGreenTheme = false;
  theme: string | null;

  constructor(private headerService: HeaderService) {
    this.theme =  localStorage.getItem('theme');
  }

  ngOnInit(): void {
    this.headerService
      .observeThemeChange()
      .subscribe((theme) => {
        this.isGreenTheme = theme === 'green-theme';
      });
  }

  changeTheme(): void {
    // console.log(localStorage.getItem('theme'));
    if (this.isGreenTheme == false) {
      this.headerService.setTheme('green-theme');
    } else {
      this.headerService.setTheme('');
    }
  }

}
