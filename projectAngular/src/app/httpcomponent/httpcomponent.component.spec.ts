import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpcomponentComponent } from './httpcomponent.component';

describe('HttpcomponentComponent', () => {
  let component: HttpcomponentComponent;
  let fixture: ComponentFixture<HttpcomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HttpcomponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HttpcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
