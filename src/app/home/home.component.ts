import { Component, OnInit } from '@angular/core';

import { CategoriesService } from '../shared/services/categories.service';
import { Category } from 'src/app/shared/models/categories'
import { takeUntil } from 'rxjs/operators';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { JokeComponent } from '../joke/joke.component'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  categories: Category[] = [];
  closeResult = '';

  constructor(private categoriesService: CategoriesService, private modalService: NgbModal) { 
    this.categories = []; // proveri da li je ovo neophodno zbog toString u htmlu
  }

  ngOnInit(): void {
    this.getCategories();
  }

  getCategories(): void {
    this.categoriesService.getCategories()
      .subscribe((categories) => (this.categories = categories));
  }

  open(category: string) {
    const modalRef = this.modalService.open(JokeComponent);
    modalRef.componentInstance.name = category;

    // this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
    //   this.closeResult = `Closed with: ${result}`;
    // }, (reason) => {
    //   this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    // });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }


}
