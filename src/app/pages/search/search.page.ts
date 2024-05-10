import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiResponse } from '../../models/api-response.model'; // Ensure this import is correct
import { Recipe } from '../../models/recipe.model';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {
  recipes: Recipe[] = [];
  event :any;

  constructor(private http: HttpClient) {}

  ngOnInit() {}

  searchChanged(event: any) {
    const searchTerm = event.detail.value;
    if (searchTerm && searchTerm.trim() !== '') {
      this.http.get<ApiResponse>(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`).subscribe({
        next: (response) => {
          this.recipes = response.meals || [];
        },
        error: (error) => console.error('Error searching recipes:', error)
      });
    }
  }
}
