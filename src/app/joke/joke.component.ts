import { Component, Input, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { JokesService } from '../shared/services/jokes.service';
import { Joke } from 'src/app/shared/models/joke'

@Component({
  selector: 'app-joke',
  templateUrl: './joke.component.html',
  styleUrls: ['./joke.component.scss']
})
export class JokeComponent implements OnInit {
  @Input() public name: string;
  joke: Joke | undefined;

  constructor(private jokeService: JokesService, public activeModal: NgbActiveModal  ) { 
    this.name = '';
  }

  ngOnInit(): void {
    this.getJoke(this.name);
  }

  getJoke(category: string): void {
    this.jokeService.getRandomJokeFromCategory(category)
      .subscribe((joke) => (this.joke = joke));
  }

}
