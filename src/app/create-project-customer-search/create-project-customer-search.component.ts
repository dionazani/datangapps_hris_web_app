import { Component } from '@angular/core';
   import { FormsModule } from '@angular/forms';
   import { NgFor } from '@angular/common';

   @Component({
     selector: 'app-customer-searching',
     standalone: true,
     imports: [FormsModule, NgFor],
     templateUrl: './create-project-customer-search.component.html',
     styleUrls: ['./create-project-customer-search.component.css']
   })
   export class CreateProjectCustomerSearchComponent {
     searchQuery: string = '';
     rowsPerPage: number = 5;
     currentPage: number = 1;

     tableData = [
       { customerName: 'Budi Santoso', mobilePhone: '08198989890', email: 'budisantoso@gmail.com', requestDate: '25 Juni 2025', projectStep: 'No Project' },
       { customerName: 'Agus Mulia', mobilePhone: '08198981001', email: 'agus.mulia@gmail.com', requestDate: '04 Mei 2025', projectStep: 'RUN' },
       { customerName: '', mobilePhone: '', email: '', requestDate: '', projectStep: '' },
       { customerName: '', mobilePhone: '', email: '', requestDate: '', projectStep: '' },
       { customerName: '', mobilePhone: '', email: '', requestDate: '', projectStep: '' }
     ];

     get totalPages(): number {
       return Math.ceil(this.tableData.length / this.rowsPerPage);
     }

     get pageNumbers(): number[] {
       return Array(this.totalPages).fill(0).map((x, i) => i + 1);
     }

     get paginatedData() {
       const start = (this.currentPage - 1) * this.rowsPerPage;
       const end = start + this.rowsPerPage;
       return this.tableData.slice(start, end);
     }

     onFind() {
       console.log('Search for:', this.searchQuery);
       // Add logic to filter tableData based on searchQuery
     }

     onAddProject(index: number) {
       console.log('Add Project for row:', index, this.paginatedData[index]);
       // Add logic to handle Add Project action
     }

     onRowsPerPageChange() {
       this.currentPage = 1; // Reset to first page when rows per page changes
     }

     changePage(page: number) {
       if (page >= 1 && page <= this.totalPages) {
         this.currentPage = page;
       }
     }
   }