import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-customer-request',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './customer-request.component.html',
  styleUrls: ['./customer-request.component.css']
})

export class CustomerRequestComponent {
  customerName: string = '';
  mobilePhone: string = '';
  email: string = '';

  onSubmit() {
    console.log('Customer Name:', this.customerName);
    console.log('Mobile Phone:', this.mobilePhone);
    console.log('Email:', this.email);
    // Add logic to handle form submission (e.g., send data to a service or API)
  }
}