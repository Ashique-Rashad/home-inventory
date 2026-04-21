import { Component, input } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { MockDataService } from '../../../services/mock-data.service';

@Component({
  selector: 'app-inventory-item-header',
  templateUrl: './inventory-item-header.component.html',
  styleUrl: './inventory-item-header.component.scss',
})
export class InventoryItemHeaderComponent {
  item = input<any>();
  showDeleteConfirmation: boolean = false;
  showEditDialog: boolean = false;

  constructor(
    private router: Router,
    private toastr: ToastrService,
    private mockDataService: MockDataService,
  ) {}

  goToInventory() {
    this.router.navigate(['inventory']);
  }

  showDeleteConfirmDialog() {
    this.showDeleteConfirmation = true;
  }

  onDeleteCancel() {
    this.showDeleteConfirmation = false;
  }

  onDeleteConfirmation() {
    this.deleteProduct(this.item()?.id);
  }

  deleteProduct(id: number) {
    this.mockDataService.deleteProduct(id).subscribe({
      next: (response: boolean) => {
        this.router.navigate(['inventory']);
        this.toastr.success('Product Deleted Successfully');
      },
      error: (err: any) => {
        this.toastr.error(err);
      },
    });
  }

  editProduct() {
    console.log(this.item());
    this.showEditDialog = true;
  }

  hideEditDialog() {
    this.showEditDialog = false;
  }

  onProductEdited() {
    this.showEditDialog = false;
    this.router.navigate(['inventory']);
  }
}
