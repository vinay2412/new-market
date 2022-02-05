import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellingProductComponent } from './selling-product.component';

describe('SellingProductComponent', () => {
  let component: SellingProductComponent;
  let fixture: ComponentFixture<SellingProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SellingProductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SellingProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
