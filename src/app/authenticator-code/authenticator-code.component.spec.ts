import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthenticatorCodeComponent } from './authenticator-code.component';

describe('AuthenticatorCodeComponent', () => {
  let component: AuthenticatorCodeComponent;
  let fixture: ComponentFixture<AuthenticatorCodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AuthenticatorCodeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuthenticatorCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
