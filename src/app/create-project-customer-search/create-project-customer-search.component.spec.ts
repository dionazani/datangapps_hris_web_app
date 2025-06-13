import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CreateProjectCustomerSearchComponent } from './create-project-customer-search.component';

describe('CreateProjectCustomerSearchComponent', () => {
  let component: CreateProjectCustomerSearchComponent;
  let fixture: ComponentFixture<CreateProjectCustomerSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateProjectCustomerSearchComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateProjectCustomerSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
