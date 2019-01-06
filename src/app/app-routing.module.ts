import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OktaCallbackComponent } from '@okta/okta-angular';
import { HomeComponent } from './home/home.component';
import { RecipesJsonComponent } from './recipes-json/recipes-json.component';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import { AddCategoryComponent } from './add-category/add-category.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'implicit/callback',
    component: OktaCallbackComponent
  },
  {
    path: 'recipes-json',
    component: RecipesJsonComponent
  },
  {
    path: 'recipe-edit/:id',
    component: RecipeEditComponent
  },
  {
    path: 'recipe-add',
    component: RecipeEditComponent
  },
  {
    path: 'add-category',
    component: AddCategoryComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
