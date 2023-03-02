import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/Models/Item';
import { ItemServiceService } from 'src/app/services/item-service.service';
import { LoginService } from 'src/app/services/loginService.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css'],
})
export class ItemsComponent implements OnInit {
  public items: Item[] = [];

  public item: Item = new Item(0, '', '', 0, 0,0, true);
  public name: string = '';
  public url: string = '';
  public weight: number = 0;
  public calories: number = 0;
  public quantity: number = 0;
  public availibility: boolean

  constructor(
    public loginService: LoginService,
    public itemService: ItemServiceService
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
  }
}
