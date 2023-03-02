export class Recipe {
  constructor(
    public name: string,
    public url: string,
    public userId: number,
    public ingredient: Ingredient[],
    public step: Step[],
    public id?: number
  ) {}
}

export class Ingredient {
  constructor(
    public ingredientName: string,
    public weight: number,
    public calories: number,
    public id?: number
  ) {}
}

export class Step {
  constructor(public comment: string, public id?: number) {}
}
