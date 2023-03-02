import { Component, OnInit } from '@angular/core';
import { SafeResourceUrl } from '@angular/platform-browser';
import { Item } from 'src/app/Models/Item';
import { Pantry } from 'src/app/Models/Pantry';
import { AddItemToPantryService } from 'src/app/services/add-item-to-pantry.service';
import { ItemServiceService } from 'src/app/services/item-service.service';
import { LoginService } from 'src/app/services/loginService.service';

@Component({
  selector: 'app-display-items',
  templateUrl: './display-items.component.html',
  styleUrls: ['./display-items.component.css'],
})
export class DisplayItemsComponent implements OnInit {
  public items: Item[] = [];
  // public listOfItems: Item[];

  public pantry: Pantry = new Pantry(0, '', '', 0, 0, 0, true);
  public itemName: string = '';
  public url: string = '';
  public weight: number = 0;
  public calories: number = 0;
  public quantity: number = 0;
  public avaibility: boolean;

  public selectedItems: any[];

  constructor(
    public loginService: LoginService,
    public itemService: ItemServiceService,
    public addPantry: AddItemToPantryService
  ) {}

  ngOnInit(): void {
    this.getItemList();
  }

  getItemList() {
    this.itemService.getItemList().subscribe({
      next: (items) => {
        this.items = items;
      },
    });
    this.selectedItems = new Array<any>();
  }

  public getItemById(e: any, id: number) {
    if (e.target.checked) {
      //when checked item
      // console.log(id + "checked");
      this.selectedItems.push(id);
    } else {
      //when unchecked that
      // console.log(id + 'unchecked');
      this.selectedItems = this.selectedItems.filter((i) => i != id);
      //creates a new array with all elements that pass the test implemented by the provided function
      //filter remain all the items , which are unchecked
    }
    console.log(this.selectedItems);
  }

  public getTotalCaloriesItems(): number {
    let totalCalories = 0;
    this.items.map((a: Item) => {
      totalCalories += a.calories;
    });
    return totalCalories;
  }
  //creates a new array with the results of calling
  // The new array will have the same number of elements as the original

  public getTotalWeightItems(): number {
    let totalCalories = 0;
    this.items.map((a: Item) => {
      totalCalories += a.weight;
    });
    return totalCalories;
  }
}
