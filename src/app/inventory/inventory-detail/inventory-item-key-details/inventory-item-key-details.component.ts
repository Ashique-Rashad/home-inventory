import { Component, input } from '@angular/core';
import { Product } from '../../mock-data';

@Component({
  selector: 'app-inventory-item-key-details',
  templateUrl: './inventory-item-key-details.component.html',
  styleUrl: './inventory-item-key-details.component.scss'
})
export class InventoryItemKeyDetailsComponent {
  item = input<Product>();
}
