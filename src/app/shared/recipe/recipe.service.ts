import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Recipe } from './recipe.model';

const spaghetti = {
    "id": 1,
    "categoryId": 2,
    "title": "Spaghetti",
    "description": "This recipe has been handed down from my mother. It is a family favorite and will not be replaced!",
    "cookTime": "1h 10min",
    "prepareTime": "15min",
    "prepareDescription": null,
    "ingredients": [
        {
            "id": 1,
            "name": "Ground beef",
            "quantity": "1 pound",
            "recipe_id": 1
        },
        {
            "id": 2,
            "name": "chopped onion",
            "quantity": "1",
            "recipe_id": 1
        },
        {
            "id": 3,
            "name": "cloves garlic, minced",
            "quantity": "4",
            "recipe_id": 1
        },
        {
            "id": 4,
            "name": "small green bell pepper, diced",
            "quantity": "1",
            "recipe_id": 1
        },
        {
            "id": 5,
            "name": "can diced tomatoes",
            "quantity": "1 (28 ounce)",
            "recipe_id": 1
        },
        {
            "id": 6,
            "name": "can tomato paste",
            "quantity": "1 (6 ounce)",
            "recipe_id": 1
        },
        {
            "id": 7,
            "name": "can tomato sauce",
            "quantity": "1 (16 ounce)",
            "recipe_id": 1
        },
        {
            "id": 8,
            "name": "dried oregano",
            "quantity": "2 teaspoons",
            "recipe_id": 1
        },
        {
            "id": 9,
            "name": "dried basil",
            "quantity": "2 teaspoons",
            "recipe_id": 1
        },
        {
            "id": 10,
            "name": "salt",
            "quantity": "1 teaspoon",
            "recipe_id": 1
        },
        {
            "id": 11,
            "name": "black pepper",
            "quantity": "1/2 teaspoon",
            "recipe_id": 1
        }
    ],
    "images": [
        {
            "id": 1,
            "imagesUrl": "https://images.media-allrecipes.com/userphotos/720x405/667748.jpg",
            "recipe_id": 1
        }
    ],
    "recipeSteps": [
        {
            "id": 1,
            "stepNumber": 1,
            "name": "Combine ground beef, onion, garlic, and green pepper in a large saucepan. Cook and stir until meat is brown and vegetables are tender. Drain grease.",
            "recipe_id": 1
        },
        {
            "id": 2,
            "stepNumber": 2,
            "name": "Stir diced tomatoes, tomato sauce, and tomato paste into the pan. Season with oregano, basil, salt, and pepper. Simmer spaghetti sauce for 1 hour, stirring occasionally.",
            "recipe_id": 1
        }
    ]
};

@Injectable({
    providedIn: 'root'
})
export class RecipeService {
    public API = '//localhost:8080';
    public RECIPE_API = this.API + '/recipes';

    constructor(private http: HttpClient) {
    }

    getAll(): Observable<Recipe> {
        // return this.http.get(this.RECIPE_API + '/all');
        return of([spaghetti]);
    }

    get(id: string) {
        // return this.http.get(this.RECIPE_API + '/' + id);
        return of(spaghetti);
    }

    save(recipe: any): Observable<Recipe> {
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
