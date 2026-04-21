// user.service.ts
import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';
import { Product, PRODUCTS } from '../inventory/mock-data';

@Injectable({
  providedIn: 'root',
})
export class MockDataService {
  private products = [...PRODUCTS]; // clone to avoid direct mutation

  getProducts(): Observable<Product[]> {
    return of(this.products).pipe(delay(100));
  }

  getProduct(id: number): Observable<Product | undefined> {
    return of(this.products.find((p) => p.id === id));
  }

  addProduct(product: Product): Observable<Product> {
    product.id = Date.now();
    this.products.push(product);
    return of(product);
  }

  updateProduct(updatedProduct: Product): Observable<Product | undefined> {
    const index = this.products.findIndex((p) => p.id === updatedProduct.id);
    if (index > -1) {
      this.products[index] = updatedProduct;
      return of(updatedProduct);
    }
    return of(undefined);
  }

  deleteProduct(id: number): Observable<boolean> {
    const index = this.products.findIndex((p) => p.id === id);
    if (index > -1) {
      this.products.splice(index, 1);
      return of(true);
    }
    return of(false);
  }

  searchProductByName(productName: string) {
    const searchValue: string = productName.toLowerCase();

    const filteredProducts: Product[] = this.products.filter((p) =>
      p.name.toLowerCase().includes(searchValue)
    );
    return of(filteredProducts);
  }
}