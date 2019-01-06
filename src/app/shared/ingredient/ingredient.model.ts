export class Ingredient {
  constructor (
    public id: number,
    public name: string,
    public quantity: string,
    public recipe_id: number,
  ) { }
}
