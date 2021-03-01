import { Component, Input, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Category } from '../shared/models/categories';

@Component({
  selector: 'app-joke',
  templateUrl: './joke.component.html',
  styleUrls: ['./joke.component.scss']
})
export class JokeComponent implements OnInit {
  @Input() public name: string | undefined;

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
  }


}
