import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgotpComponent } from './forgotp.component';

describe('ForgotpComponent', () => {
  let component: ForgotpComponent;
  let fixture: ComponentFixture<ForgotpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForgotpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForgotpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
