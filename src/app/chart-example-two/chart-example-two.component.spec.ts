import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartExampleTwoComponent } from './chart-example-two.component';

describe('ChartExampleTwoComponent', () => {
  let component: ChartExampleTwoComponent;
  let fixture: ComponentFixture<ChartExampleTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChartExampleTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartExampleTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
