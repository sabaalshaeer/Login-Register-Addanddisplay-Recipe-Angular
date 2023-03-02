export class Item {
  constructor(
    public id: number,
    public name: string,
    public url: string,
    public weight: number,
    public calories: number,
    public quantity: number,
    public availibity: boolean
  ) {}
}