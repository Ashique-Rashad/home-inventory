import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InventoryItemHeaderComponent } from './inventory-item-header.component';

describe('InventoryItemHeaderComponent', () => {
  let component: InventoryItemHeaderComponent;
  let fixture: ComponentFixture<InventoryItemHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InventoryItemHeaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InventoryItemHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
