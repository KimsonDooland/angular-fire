import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondCoolChartComponent } from './second-cool-chart.component';

describe('SecondCoolChartComponent', () => {
  let component: SecondCoolChartComponent;
  let fixture: ComponentFixture<SecondCoolChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecondCoolChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondCoolChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
