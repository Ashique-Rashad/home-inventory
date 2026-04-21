import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../mock-data';

@Component({
  selector: 'app-inventory-detail',
  templateUrl: './inventory-detail.component.html',
  styleUrl: './inventory-detail.component.scss',
})
export class InventoryDetailComponent implements OnInit {
  item: Product | undefined;
  
  constructor(private route: ActivatedRoute) {
  }
  ngOnInit(): void {
    this.item = this.route.snapshot.data['item'];
  }
}
