import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InventoryItemOtherDetailsComponent } from './inventory-item-other-details.component';

describe('InventoryItemOtherDetailsComponent', () => {
  let component: InventoryItemOtherDetailsComponent;
  let fixture: ComponentFixture<InventoryItemOtherDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InventoryItemOtherDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InventoryItemOtherDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
