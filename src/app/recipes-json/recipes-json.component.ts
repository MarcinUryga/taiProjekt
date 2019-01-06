import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../shared/recipe/recipe.service';

@Component({
  selector: 'app-recipes-json',
  templateUrl: './recipes-json.component.html',
  styleUrls: ['./recipes-json.component.css']
})
export class RecipesJsonComponent implements OnInit {
  recipes: Array<any>;

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    this.recipeService.getAll().subscribe(data => {
      this.recipes = data;
    });
  }
}
