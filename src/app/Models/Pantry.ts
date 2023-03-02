export class Pantry {
  constructor(
    public id: number,
    public itemName: string,
    public pantryUrl: string,
    public itemWeight: number,
    public itemCalories: number,
    public itemQuantity: number,
    public itemAvaibility: boolean,
    public userId?: number
  ) {}
}
