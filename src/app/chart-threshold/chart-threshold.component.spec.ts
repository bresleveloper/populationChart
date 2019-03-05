import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartThresholdComponent } from './chart-threshold.component';

describe('ChartThresholdComponent', () => {
  let component: ChartThresholdComponent;
  let fixture: ComponentFixture<ChartThresholdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChartThresholdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartThresholdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
