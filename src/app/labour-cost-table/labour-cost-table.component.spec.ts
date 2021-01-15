import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LabourCostTableComponent } from './labour-cost-table.component';

describe('LabourCostTableComponent', () => {
  let component: LabourCostTableComponent;
  let fixture: ComponentFixture<LabourCostTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LabourCostTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LabourCostTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
