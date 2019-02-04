import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountEmployeeComponent } from './count-employee.component';

describe('CountEmployeeComponent', () => {
  let component: CountEmployeeComponent;
  let fixture: ComponentFixture<CountEmployeeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountEmployeeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
