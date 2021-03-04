import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { JokesService } from '../shared/services/jokes.service';
import { Joke } from 'src/app/shared/models/joke'
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-joke',
  templateUrl: './joke.component.html',
  styleUrls: ['./joke.component.scss']
})
export class JokeComponent implements OnInit, OnDestroy {
  @Input() public name: string;
  joke: Joke | undefined;
  subscription: Subscription;

  constructor(private jokeService: JokesService, public activeModal: NgbActiveModal  ) { 
    this.name = '';
    this.subscription = new Subscription;
  }
  
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  ngOnInit(): void {
    this.getJoke(this.name);
  }

  getJoke(category: string): void {
    this.subscription = this.jokeService.getRandomJokeFromCategory(category)
      .subscribe((joke) => (this.joke = joke));
  }

}
