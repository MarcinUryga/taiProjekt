import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, Observable } from 'rxjs';
import { ActivatedRoute, Router, Params, ParamMap } from '@angular/router';
import { CarService } from '../shared/car/car.service';
import { GiphyService } from '../shared/giphy/giphy.service';
import { NgForm, FormGroup, FormBuilder, FormArray } from '@angular/forms';
import { switchMap } from 'rxjs/operators';
import { RecipeService } from '../shared/recipe/recipe.service';
import { Recipe } from '../shared/recipe/recipe.model';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  recipe: Recipe;
  isEdit = false;
  recipeForm: FormGroup;

  sub: Subscription;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private recipeService: RecipeService,
              private giphyService: GiphyService,
              private fb: FormBuilder) {
    this.recipeForm = this.fb.group({
      title: '',
      description: '',
      cookTime: '',
      prepareTime: '',
      prepareDescription: '',
      ingredients: this.fb.array([this.fb.group({
        name: '',
        quantity: ''
      })])
    });
  }

  get ingredients() {
    return this.recipeForm.get('ingredients') as FormArray;
  }

  addIngredient() {
    this.ingredients.push(this.fb.group({ingredient: ''}));
  }

  deleteIngredient(index) {
    this.ingredients.removeAt(index);
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe((params: Params) => {
      const id = params['id'];

      if (id) {
        this.isEdit = true;

        this.recipeService.get(id).subscribe(data => {
          this.recipe = data;
          const ingredients = this.recipe.ingredients;

          this.recipeForm = this.fb.group({
            ...this.recipe,
            ingredients: this.fb.array(
              ingredients.map((ingredient) => (
                  this.fb.group({
                    ...ingredient
                  })
                )
              )
            )
          });
        });
      }
    });
  }

  onSubmit(formGroup) {
    console.log(formGroup);
    // TUTAJ
  }
}
