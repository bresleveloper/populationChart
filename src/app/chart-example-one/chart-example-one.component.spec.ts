import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartExampleOneComponent } from './chart-example-one.component';

describe('ChartExampleOneComponent', () => {
  let component: ChartExampleOneComponent;
  let fixture: ComponentFixture<ChartExampleOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChartExampleOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartExampleOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
