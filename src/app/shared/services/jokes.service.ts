import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Joke } from 'src/app/shared/models/joke'

@Injectable({
  providedIn: 'root'
})
export class JokesService {

  constructor(
    private http: HttpClient
  ) { }

  getRandomJokeFromCategory(category: string) : Observable<Joke> {
    console.log("Get Joke");
    return this.http
      .get<Joke>(`${environment.apiUrl}/random?category=${category}`)
  }
}
