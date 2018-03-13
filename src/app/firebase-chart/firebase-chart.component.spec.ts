import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirebaseChartComponent } from './firebase-chart.component';

describe('FirebaseChartComponent', () => {
  let component: FirebaseChartComponent;
  let fixture: ComponentFixture<FirebaseChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirebaseChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirebaseChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
