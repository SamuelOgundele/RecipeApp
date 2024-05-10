import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ApiResponse } from '../models/api-response.model'; // ensure you import the ApiResponse
import { Recipe } from '../models/recipe.model';

export class RecipesService {
  private baseUrl = 'https://www.themealdb.com/api/json/v1/1';

  constructor(private http: HttpClient) { }

  searchRecipes(searchTerm: string): Observable<Recipe[]> {
    return this.http.get<ApiResponse>(`${this.baseUrl}/search.php?s=${searchTerm}`).pipe(
      map(response => response.meals || [])
    );
  }

  getRecipeById(id: string): Observable<Recipe> {
    return this.http.get<ApiResponse>(`${this.baseUrl}/lookup.php?i=${id}`).pipe(
      map(response => response.meals[0])
    );
  }
}
