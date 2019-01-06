import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../shared/recipe/recipe.service';
import { Recipe } from '../shared/recipe/recipe.model';
import { Category } from '../shared/food-category/food.category.model'
import { FoodCategoryService } from '../shared/food-category/food.category.service';

@Component({
  selector: 'app-recipes-json',
  templateUrl: './recipes-json.component.html',
  styleUrls: ['./recipes-json.component.css']
})
export class RecipesJsonComponent implements OnInit {
  recipes: Recipe[];
  allRecipes: Recipe[];
  categories: Category[];
  selectedCategory: number = null;

  constructor(private recipeService: RecipeService, private categoryService: FoodCategoryService) { }

  ngOnInit() {
    this.recipeService.getAll().subscribe(data => {
      this.recipes = data;
      this.allRecipes = data;
    });

    this.categoryService.getCategories().subscribe(data => {
      this.categories = data;
    });
  }

  selectCategory(categoryId: number) {
    if (categoryId === null) {
      this.selectedCategory = null;
      this.recipes = this.allRecipes;
    } else if (this.selectedCategory !== categoryId) {
      this.selectedCategory = categoryId;
      this.recipes = this.allRecipes.filter(el => (
        el.categoryId === categoryId
      ));
    }
  }
}
