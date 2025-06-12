import { Routes } from '@angular/router';
import { LoginFormComponent } from './login-form/login-form.component';
import { CustomerRequestComponent } from './customer-request/customer-request.component';
import { CreateInvoiceComponent } from './create-invoice/create-invoice.component';

export const routes: Routes = [
  { path: '', component: LoginFormComponent },
  { path: 'customer-request', component: CustomerRequestComponent },
  { path: 'create-invoice', component: CreateInvoiceComponent }
];