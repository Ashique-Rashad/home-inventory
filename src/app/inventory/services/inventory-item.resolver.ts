import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, Router } from '@angular/router';
import { catchError, EMPTY, map, Observable, of } from 'rxjs';
import { MockDataService } from '../../services/mock-data.service';
import { Product } from '../mock-data';

@Injectable({ providedIn: 'root' })
export class InventoryItemResolver implements Resolve<any> {
  constructor(
    private mockDataService: MockDataService,
    private router: Router,
  ) {}

  resolve(route: ActivatedRouteSnapshot): Observable<any> {
    const id = route.paramMap.get('id');
    if (id) {
      return this.mockDataService.getProduct(parseInt(id)).pipe(
        map((product) => {
          if (!product) {
            this.router.navigate(['/inventory']);
            return null;
          }
          return product;
        }),

        catchError((error) => {
          this.router.navigate(['/inventory']);
          return of(null); 
        }),
      );
    } else {
      this.router.navigate(['/inventory']);
      return EMPTY;
    }
  }
}
