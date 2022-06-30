import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnitThirtyTwoComponent } from './unit-thirty-two.component';

describe('UnitThirtyTwoComponent', () => {
  let component: UnitThirtyTwoComponent;
  let fixture: ComponentFixture<UnitThirtyTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnitThirtyTwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UnitThirtyTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
