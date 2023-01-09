import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudenthttpComponent } from './studenthttp.component';

describe('StudenthttpComponent', () => {
  let component: StudenthttpComponent;
  let fixture: ComponentFixture<StudenthttpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudenthttpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudenthttpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
