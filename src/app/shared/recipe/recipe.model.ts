import { Ingredient } from '../ingredient/ingredient.model';

export class Recipe {
  constructor (
    public title: string,
    public description: string,
    public categoryId: number,
    public cookTime: string,
    public prepareTime: string,
    public prepareDescription: string,
    public ingredients: Ingredient[]
  ) { }
}

export class Category {
  constructor (
    public id: number,
    public name: string,
  ) { }
}
