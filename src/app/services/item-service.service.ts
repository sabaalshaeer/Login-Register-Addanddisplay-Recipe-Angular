import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, take } from 'rxjs';
import { Item } from '../Models/Item';
import { Pantry } from '../Models/Pantry';

@Injectable({
  providedIn: 'root',
})
export class ItemServiceService {
  public items: Item[] = [];
  constructor(private http: HttpClient) {}

  public getItemList(): Observable<Item[]> {
    return this.http.get<Item[]>(
      `https://localhost:3000/ItemDetails`
    );
  }

  public addItemToPantry(
    itemName: string,
    url: string,
    weight: number,
    calories: number,
    quantity: number,
    avaibility: boolean
  ) {
    this.http
      .post(
        `https://localhost:7004/api/Items/Items`,
        // `https://localhost:7004/api/PantryItems/PantryItem`,
        { itemName, url, weight, calories, quantity, avaibility }
      )
      .pipe(take(1))
      .subscribe({
        next: () => {
          this.getItemList();
          console.log('yyyyy');
        },
      });
  }

  public createNewItem(
    name: string,
    url: string,
    weight: number,
    calories: number,
    quantity: number,
    availibity: boolean
  ): void {
    this.http
      .post(`https://localhost:7004/api/Items`, {
        name,
        url,
        weight,
        calories,
        quantity,
        availibity,
      })
      .pipe(take(1))
      .subscribe({
        next: () => {
          this.getItemList();
        },
      });
  }
}
