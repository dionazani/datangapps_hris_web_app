// src/app/app.component.ts

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { LoginFormComponent } from './login-form/login-form.component'; // <-- 1. IMPORT KOMPONEN LOGIN
import { CustomerRequestComponent } from './customer-request/customer-request.component';
import { CreateInvoiceComponent } from './create-invoice/create-invoice.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule, 
    RouterOutlet,
    LoginFormComponent,
    CustomerRequestComponent,
    CreateInvoiceComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'DatangApps';
}