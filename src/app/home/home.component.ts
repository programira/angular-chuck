import { Component, OnInit } from '@angular/core';

import { CategoriesService } from '../shared/services/categories.service';
import { Category } from 'src/app/shared/models/categories'


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  categories: Category[] = [];

  constructor(private categoriesService: CategoriesService) { }

  ngOnInit(): void {
    this.getCategories();
  }

  getCategories(): void {
    this.categoriesService.getCategories()
    .subscribe(categories => console.log(categories))
  }


}
