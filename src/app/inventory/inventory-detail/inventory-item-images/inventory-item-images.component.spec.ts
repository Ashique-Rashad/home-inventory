import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InventoryItemImagesComponent } from './inventory-item-images.component';

describe('InventoryItemImagesComponent', () => {
  let component: InventoryItemImagesComponent;
  let fixture: ComponentFixture<InventoryItemImagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InventoryItemImagesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InventoryItemImagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
