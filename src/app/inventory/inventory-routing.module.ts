import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InventoryComponent } from './inventory.component';
import { InventoryDetailComponent } from './inventory-detail/inventory-detail.component';
import { InventoryItemResolver } from './services/inventory-item.resolver';

const routes: Routes = [
  {
    path: '',
    component: InventoryComponent,
  },
  {
    path: ':id',
    component: InventoryDetailComponent,
    resolve: { item: InventoryItemResolver }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InventoryRoutingModule { }