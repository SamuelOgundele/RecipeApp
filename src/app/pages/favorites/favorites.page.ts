import { Component, OnInit } from '@angular/core';
import { FavoritesService } from '../../services/favorites.service';
import { Recipe } from '../../models/recipe.model';
import { RecipesService } from 'src/app/services/recipes.service';


@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.page.html',
  styleUrls: ['./favorites.page.scss'],
})
export class FavoritesPage implements OnInit {
  favorites: any[] = [];

  constructor(private favService: FavoritesService) { }

  ngOnInit() {
    this.favorites = this.favService.getFavorites();
  }

  removeFromFavorites(recipe: any) {
    this.favService.removeFavorite(recipe);
    this.favorites = this.favService.getFavorites();
  }
}
