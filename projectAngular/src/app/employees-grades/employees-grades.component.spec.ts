import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeesGradesComponent } from './employees-grades.component';

describe('EmployeesGradesComponent', () => {
  let component: EmployeesGradesComponent;
  let fixture: ComponentFixture<EmployeesGradesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeesGradesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeesGradesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
