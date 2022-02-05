import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoradApplyComponent } from './borad-apply.component';

describe('BoradApplyComponent', () => {
  let component: BoradApplyComponent;
  let fixture: ComponentFixture<BoradApplyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoradApplyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoradApplyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
