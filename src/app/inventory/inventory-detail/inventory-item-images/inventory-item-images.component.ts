import { Component } from '@angular/core';

@Component({
  selector: 'app-inventory-item-images',
  templateUrl: './inventory-item-images.component.html',
  styleUrl: './inventory-item-images.component.scss',
})
export class InventoryItemImagesComponent {
  images: string[] = [
    '../../../../assets/images/laptop_1.jpg',
    '../../../../assets/images/laptop_2.jpg',
    '../../../../assets/images/laptop_3.jpg',
  ];

  selectedImage: string = this.images[0];
  constructor() {}

  changeImage(img: string) {
    this.selectedImage = img;
  }
}
