import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Category, CategoriesPayload } from 'src/app/shared/models/categories'

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(
    private http: HttpClient
  ) { }

  getCategories() : Observable<Category[]> {
    console.log("Get Categories");
    return this.http
      .get<Category[]>(`${environment.apiUrl}/categories`)
  }

}

