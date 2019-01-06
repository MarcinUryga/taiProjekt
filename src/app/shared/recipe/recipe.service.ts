import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  public API = '//localhost:8080';
  public RECIPE_API = this.API + '/recipes';

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<any> {
    return this.http.get(this.RECIPE_API + '/all');
  }

  get(id: string) {
    return this.http.get(this.RECIPE_API + '/' + id);
  }

  save(recipe: any): Observable<any> {
    let result: Observable<Object>;
    if (recipe['href']) {
      result = this.http.put(recipe.href, recipe);
    } else {
      result = this.http.post(this.RECIPE_API + '/add', recipe);
    }
    return result;
  }

  remove(href: string) {
    return this.http.delete(href);
  }
}
