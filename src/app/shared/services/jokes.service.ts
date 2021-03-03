import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Joke } from 'src/app/shared/models/joke'
import { catchError } from 'rxjs/operators';

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
      .pipe(
        catchError(this.handleError<Joke>('getRandomJokeFromCategory'))
      );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }

}
