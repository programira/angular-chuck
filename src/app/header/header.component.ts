import { Component, OnInit } from '@angular/core';
import { HeaderService } from '../shared/services/header.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isGreenTheme = false;
  theme =  localStorage.getItem('theme');

  constructor(private headerService: HeaderService) { }

  ngOnInit(): void {
    this.headerService
      .observeThemeChange()
      .subscribe((theme) => {
        this.isGreenTheme = theme === 'green-theme';
      });
  }

  changeTheme(): void {
    this.theme = localStorage.getItem('theme');
    // console.log(localStorage.getItem('theme'));
    if (this.isGreenTheme == false) {
      this.headerService.setGreenTheme('green-theme');
    } else {
      this.headerService.setGreenTheme('');
    }
  }

}
