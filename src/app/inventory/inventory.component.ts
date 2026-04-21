import { Component } from '@angular/core';
import { Product } from './mock-data';
import { MockDataService } from '../services/mock-data.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrl: './inventory.component.scss',
})
export class InventoryComponent {
  products: Product[] = [];
  showDeleteConfirmation: boolean = false;
  idToBeDeleted: number = 0;
  showEditDialog: boolean = false;
  productToBeEdited: Product | undefined;

  constructor(
    private toastr: ToastrService,
    private mockDataService: MockDataService,
    private router: Router,
  ) {}

  ngOnInit() {
    this.loadProducts();
  }

  loadProducts() {
    this.mockDataService.getProducts().subscribe({
      next: (data: Product[]) => {
        this.products = data;
      },
      error: (err: any) => {
        this.toastr.error(err);
      },
    });
  }

  showDeleteConfirmDialog(id: number) {
    this.showDeleteConfirmation = true;
    this.idToBeDeleted = id;
  }

  deleteProduct(id: number) {
    this.mockDataService.deleteProduct(id).subscribe({
      next: (response: boolean) => {
        this.loadProducts();
        this.toastr.warning('Product Deleted Successfully')
      },
      error: (err: any) => {
        this.toastr.error(err);
      },
    });
  }

  getProductDetails(id: number) {
    this.router.navigate(['/inventory', id]);
  }

  editProduct(product: Product) {
    this.showEditDialog = true;
    this.productToBeEdited = product;
    console.log(this.productToBeEdited);
  }

  onDeleteCancel() {
    this.showDeleteConfirmation = false;
  }

  onDeleteConfirmation() {
    this.deleteProduct(this.idToBeDeleted);
  }

  hideEditDialog() {
    this.showEditDialog = false;
  }

  onProductEdited() {
    this.showEditDialog = false;
    this.loadProducts();
  }

  handleProductSearch(searchValue: string) {
   this.mockDataService.searchProductByName(searchValue).subscribe({
      next: (data: Product[]) => {
        this.products = data;
      },
      error: (err: any) => {
        this.toastr.error(err);
      },
    });
  }
}
