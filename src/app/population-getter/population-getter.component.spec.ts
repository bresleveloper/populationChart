import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopulationGetterComponent } from './population-getter.component';

describe('PopulationGetterComponent', () => {
  let component: PopulationGetterComponent;
  let fixture: ComponentFixture<PopulationGetterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopulationGetterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopulationGetterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
