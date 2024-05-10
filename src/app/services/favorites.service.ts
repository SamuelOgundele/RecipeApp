import { Injectable } from '@angular/core';
import { RecipesService } from './recipes.service';
import { Recipe } from '../models/recipe.model';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {
  isFavorite(arg0: Recipe) {
    throw new Error('Method not implemented.');
  }
  private favorites: any[] = [];

  constructor() { }

  getFavorites() {
    return this.favorites;
  }

  addFavorite(recipe: any) {
    if (!this.favorites.find(fav => fav.idMeal === recipe.idMeal)) {
      this.favorites.push(recipe);
    }
  }

  removeFavorite(recipe: any) {
    const index = this.favorites.findIndex(fav => fav.idMeal === recipe.idMeal);
    if (index > -1) {
      this.favorites.splice(index, 1);
    }
  }

  toggleFavorite(recipe: any) {
    const found = this.favorites.some(fav => fav.idMeal === recipe.idMeal);
    if (found) {
      this.removeFavorite(recipe);
    } else {
      this.addFavorite(recipe);
    }
  }

}

