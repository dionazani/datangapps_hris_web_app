import { Component } from '@angular/core';
   import { FormsModule } from '@angular/forms';

   @Component({
     selector: 'app-create-invoice',
     standalone: true,
     imports: [FormsModule],
     templateUrl: './create-invoice.component.html',
     styleUrls: ['./create-invoice.component.css']
   })
   export class CreateInvoiceComponent {
     projectNumber: string = '';
     customer: string = '';
     mobilePhone: string = '';
     projectType: string = '';
     trainingTitle: string = '';
     startDate: string = '';
     endDate: string = '';
     invoiceDate: string = '';
     notes: string = '';

     onSubmit() {
       console.log('Project Number:', this.projectNumber);
       console.log('Customer:', this.customer);
       console.log('Mobile Phone:', this.mobilePhone);
       console.log('Project Type:', this.projectType);
       console.log('Training Title:', this.trainingTitle);
       console.log('Start Date:', this.startDate);
       console.log('End Date:', this.endDate);
       console.log('Invoice Date:', this.invoiceDate);
       console.log('Notes:', this.notes);
       // Add logic to handle form submission (e.g., send data to a service or API)
     }
   }