import { Component, Input, OnInit } from '@angular/core';
import { Item } from 'src/app/Models/Item';
import { Pantry } from 'src/app/Models/Pantry';
import { AddItemToPantryService } from 'src/app/services/add-item-to-pantry.service';
import { ItemServiceService } from 'src/app/services/item-service.service';
import { LoginService } from 'src/app/services/loginService.service';

@Component({
  selector: 'app-pantry-item',
  templateUrl: './pantry-item.component.html',
  styleUrls: ['./pantry-item.component.css'],
})
export class PantryItemComponent  implements OnInit{
  // @Input() id :number
  public pantries: Pantry[] = [];
  //public listOfItem: Item[];
  public userId: number;

  constructor(
    public loginService: LoginService,
    public itemService: ItemServiceService,
    private addPantryItem: AddItemToPantryService
  ) {}

  public getTotalCaloriesinPantry(): number {
    let totalCalories = 0;
    this.pantries.map((a: Pantry) => {
      totalCalories += a.itemCalories;
    });
    return totalCalories;
  }

  public getTotalWeightinPantry(): number {
    let totalCalories = 0;
    this.pantries.map((a: Pantry) => {
      totalCalories += a.itemWeight;
    });
    return totalCalories;
  }

  ngOnInit(): void {
    this.getItemFromPantry();
  }

  public  getItemFromPantry() {
    this.addPantryItem.getItemFromPantry().subscribe({
      next: (pantries) => {
        this.pantries = pantries;
      },
      error(err) {
        console.log('Oops')
      }
    });
  }

  // getItemList() {
  //   this.itemService.getItemList().subscribe({
  //     next: (items) => {
  //       this.listOfItem = items;
  //     },
  //   });
  // }
}
