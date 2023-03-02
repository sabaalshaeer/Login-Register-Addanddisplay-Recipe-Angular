import { HttpClient } from '@angular/common/http';
import { Injectable, Input } from '@angular/core';
import { Observable, take, tap } from 'rxjs';
import { Item } from '../Models/Item';
import { Pantry } from '../Models/Pantry';

@Injectable({
  providedIn: 'root',
})
export class AddItemToPantryService {
  @Input() id: number;
  public pantries: Pantry[];

  constructor(private http: HttpClient) {}

  public getItemFromPantry(): Observable<Pantry[]> {
    return this.http.get<Pantry[]>(
      `https://localhost:7004/api/PantryItems?userId=1`
    );
  }

  // public getItemFromPantry(id: number): void {
  //   this.http
  //     .get<Pantry[]>(`https://localhost:7004/api/PantryItems/${id}`)
  //     .pipe(take(1))
  //     .subscribe({
  //       next: (pantries) => {
  //         this.pantries = pantries;
  //       },
  //       error: (error) => {
  //         console.log('Ooops, somthing went wrong');
  //       },
  //     });
  // }
}
