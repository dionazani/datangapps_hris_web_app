import { Routes } from '@angular/router';
import { LoginFormComponent } from './login-form/login-form.component';
import { CustomerRequestComponent } from './customer-request/customer-request.component';
import { CreateInvoiceComponent } from './create-invoice/create-invoice.component';
import { ProjectReportComponent } from './project-report/project-report.component';
import { AuthenticatorCodeComponent } from './authenticator-code/authenticator-code.component';
import { CreateProjectCustomerSearchComponent } from './create-project-customer-search/create-project-customer-search.component';
import { LandingPageMainComponent } from './landing-page-main/landing-page-main.component';

export const routes: Routes = [
  { path: '', component: LoginFormComponent },
  { path: 'authenticator-code', component: AuthenticatorCodeComponent },
  { path: 'landing-page-main', component: LandingPageMainComponent },
  { path: 'customer-request', component: CustomerRequestComponent },
  { path: 'create-project-customer-search', component: CreateProjectCustomerSearchComponent },
  { path: 'create-invoice', component: CreateInvoiceComponent },
  { path: 'project-report', component: ProjectReportComponent }
];