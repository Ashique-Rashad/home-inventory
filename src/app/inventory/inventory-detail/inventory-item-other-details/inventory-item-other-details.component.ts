import { Component, input } from '@angular/core';
import { Product } from '../../mock-data';

@Component({
  selector: 'app-inventory-item-other-details',
  templateUrl: './inventory-item-other-details.component.html',
  styleUrl: './inventory-item-other-details.component.scss'
})
export class InventoryItemOtherDetailsComponent {
  item = input<Product>();
  activeTab: number = 0;
  
  constructor() {}

  tabChange(event: any) {
    this.activeTab = event;
  }
}
