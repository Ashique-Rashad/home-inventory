import { Component, input, OnInit, output } from '@angular/core';
import { Product } from '../../mock-data';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { MockDataService } from '../../../services/mock-data.service';

@Component({
  selector: 'app-add-edit-inventory-item',
  templateUrl: './add-edit-inventory-item.component.html',
  styleUrl: './add-edit-inventory-item.component.scss',
})
export class AddEditInventoryItemComponent implements OnInit {
  item = input<Product | undefined>();
  isForEdit = input<boolean>();
  locationsList = ['Mirpur', 'Farmgate', 'Dhanmondi'];
  labelsList = ['Power Tools', 'Electronics', 'Applications'];
  productForm!: FormGroup;
  visible: boolean = true;
  cancel = output({ alias: 'onCancel' });
  save = output({ alias: 'onSave' });
  isFormReadyToShow: boolean = false;

  constructor(
    private toastr: ToastrService,
    private fb: FormBuilder,
    private mockDataService: MockDataService,
  ) {}

  ngOnInit(): void {
    this.initializeProductForm();
  }
  initializeProductForm() {
    this.productForm = this.fb.group({
      name: [this.item()?.name, [Validators.required, Validators.min(6)]],
      brand: [this.item()?.brand, Validators.required],
      model: [this.item()?.model, Validators.required],
      color: [this.item()?.color, Validators.required],
      quantity: [
        this.item()?.quantity,
        [Validators.required, Validators.min(1)],
      ],
      warranty: [this.item()?.warranty, Validators.required],
      purchaseDate: [this.item()?.purchaseDate, Validators.required],
      purchasePrice: [this.item()?.purchasePrice, Validators.required],
      notes: [this.item()?.notes],
      locations: [
        this.item()?.locations ? this.item()?.locations : [],
        Validators.required,
      ],
      labels: [
        this.item()?.labels ? this.item()?.labels : [],
        Validators.required,
      ],
      serialNumber: [
        this.item()?.serialNumber ? this.item()?.serialNumber : 100,
      ],
      purchasedFrom: [
        this.item()?.purchasedFrom ? this.item()?.purchasedFrom : 'XYZ Company',
      ],
      lastUpdated: [
        this.item()?.lastUpdated ? this.item()?.lastUpdated : '1 month ago',
      ],
    });

    if (this.isForEdit()) {
      setTimeout(() => {
        this.isFormReadyToShow = true;
      }, 1000);
    } else {
      this.isFormReadyToShow = true;
    }
  }

  hideDialog() {
    this.visible = false;
    this.cancel.emit();
  }

  onSubmit() {
    if (this.isForEdit()) {
      this.editProduct();
    } else {
      this.addProduct();
    }
  }

  addProduct() {
    this.mockDataService.addProduct(this.productForm.value).subscribe({
      next: (response: Product) => {
        this.save.emit();
        this.toastr.success('Product Added Successfully');
        this.visible = false;
      },
      error: (err: any) => {
        this.toastr.error(err);
      },
    });
  }

  editProduct() {
    this.productForm.value.id = this.item()?.id;
    this.mockDataService.updateProduct(this.productForm.value).subscribe({
      next: (response: Product | undefined) => {
        this.save.emit();
        this.toastr.success('Product Updated Successfully');
      },
      error: (err: any) => {
        this.toastr.error(err);
      },
    });
  }
}
