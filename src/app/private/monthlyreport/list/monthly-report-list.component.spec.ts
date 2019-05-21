import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthlyreportListComponent } from './monthly-report-list.component';

describe('ListComponent', () => {
  let component: MonthlyreportListComponent;
  let fixture: ComponentFixture<MonthlyreportListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonthlyreportListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonthlyreportListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
