import { NgModule } from "@angular/core";
import { InventoryHeaderComponent } from "./inventory-header/inventory-header.component";
import { InventoryRoutingModule } from "./inventory-routing.module";
import { InventoryComponent } from "./inventory.component";
import { InventoryFilterComponent } from "./inventory-filter/inventory-filter.component";
import { CommonModule } from "@angular/common";
import { InventoryDetailComponent } from "./inventory-detail/inventory-detail.component";
import { InventoryItemHeaderComponent } from "./inventory-detail/inventory-item-header/inventory-item-header.component";
import { InventoryItemKeyDetailsComponent } from "./inventory-detail/inventory-item-key-details/inventory-item-key-details.component";
import { InventoryItemImagesComponent } from "./inventory-detail/inventory-item-images/inventory-item-images.component";
import { TabsModule } from 'primeng/tabs';
import { InventoryItemOtherDetailsComponent } from "./inventory-detail/inventory-item-other-details/inventory-item-other-details.component";
import { PopoverModule } from 'primeng/popover';
import { DialogModule } from 'primeng/dialog';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MultiSelectModule } from 'primeng/multiselect';
import { RandomColorPipe } from "./pipes/random-color.pipe";
import { ConfirmationDialogComponent } from "./dialogs/confirmation-dialog/confirmation-dialog.component";
import { AddEditInventoryItemComponent } from "./dialogs/add-edit-inventory-item/add-edit-inventory-item.component";

@NgModule({
  declarations: [
    InventoryComponent,
    InventoryHeaderComponent,
    InventoryFilterComponent,
    InventoryDetailComponent,
    InventoryItemHeaderComponent,
    InventoryItemImagesComponent,
    InventoryItemKeyDetailsComponent,
    InventoryItemOtherDetailsComponent,
    ConfirmationDialogComponent,
    AddEditInventoryItemComponent
  ],
  imports: [
    CommonModule,
    InventoryRoutingModule,
    TabsModule,
    PopoverModule,
    DialogModule,
    FormsModule,
    ReactiveFormsModule,
    MultiSelectModule,
    RandomColorPipe
]
})

export class InventoryModule {}