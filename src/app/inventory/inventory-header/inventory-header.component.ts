import { Component, ElementRef, OnInit, output, ViewChild } from '@angular/core';
import { debounceTime, distinctUntilChanged, Subject } from 'rxjs';

@Component({
  selector: 'app-inventory-header',
  templateUrl: './inventory-header.component.html',
  styleUrl: './inventory-header.component.scss',
})
export class InventoryHeaderComponent implements OnInit {
  addProductDialogVisible: boolean = false;
  productAdded = output({ alias: 'onProductAdded' });
  state = {
    search: '',
    searchChanged: new Subject<string>(),
  };
  productSearch = output<string>({ alias: 'onProductSearch' });

  constructor() {}

  ngOnInit(): void {
    this.state.searchChanged
      .pipe(debounceTime(2000), distinctUntilChanged())
      .subscribe((search) => this.applySearch(search));
  }

  openAddDialog(): void {
    this.addProductDialogVisible = true;
  }

  hideDialog() {
    this.addProductDialogVisible = false;
  }

  onProductAdd() {
    this.productAdded.emit();
    setTimeout(() => {
      window.scrollTo(0, document.body.scrollHeight);
    }, 1000);
    this.addProductDialogVisible = false;
  }

  searchChanged(search: string) {
    this.state.searchChanged.next(search);
  }

  applySearch(value: string) {
    this.productSearch.emit(value);
  }
}
