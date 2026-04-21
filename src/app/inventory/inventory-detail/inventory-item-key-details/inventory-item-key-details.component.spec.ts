import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InventoryItemKeyDetailsComponent } from './inventory-item-key-details.component';

describe('InventoryItemKeyDetailsComponent', () => {
  let component: InventoryItemKeyDetailsComponent;
  let fixture: ComponentFixture<InventoryItemKeyDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InventoryItemKeyDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InventoryItemKeyDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
