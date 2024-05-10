import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ApiResponse } from '../../models/api-response.model';
import { Recipe } from '../../models/recipe.model';
import { FavoritesService } from '../../services/favorites.service'; // Import the FavoritesService

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {
  recipe: Recipe = {} as Recipe;


  constructor(
    private activatedRoute: ActivatedRoute,
    private http: HttpClient,
    private favoritesService: FavoritesService  // Ensure FavoritesService is injected
  ) {}

  ngOnInit() {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    this.http.get<ApiResponse>(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`).subscribe({
      next: (response) => {
        this.recipe = response.meals[0];
      },
      error: (error) => console.error('Error fetching details:', error)
    });
  }

  toggleFavorite(recipe: Recipe) {  // Ensure this method is defined
    this.favoritesService.toggleFavorite(recipe);
  }
}