import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgotemployeeComponent } from './forgotemployee.component';

describe('ForgotemployeeComponent', () => {
  let component: ForgotemployeeComponent;
  let fixture: ComponentFixture<ForgotemployeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForgotemployeeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForgotemployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
