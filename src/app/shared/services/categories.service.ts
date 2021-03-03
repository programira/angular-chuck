import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, publishReplay, refCount } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Category } from 'src/app/shared/models/categories'

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  cachedCategories: Observable<Category[]> | undefined;

  constructor(
    private http: HttpClient
  ) { }

  getCategories() : Observable<Category[]> {

    // Cache it once if cachedCategories value is not defined
    if (!this.cachedCategories) {
      console.log("Get Categories");
      this.cachedCategories = this.http
        .get<Category[]>(`${environment.apiUrl}/categories`)
        .pipe(
          catchError(this.handleError<Category[]>('getCategories', [])),
          publishReplay(1), // tells Rx to cache the latest emitted
          refCount() // tells Rx to keep the Observable alive as long as there are any Subscribers
        );
    }
    return this.cachedCategories;
  }

  clearCache() {
    this.cachedCategories = undefined;
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }

}

