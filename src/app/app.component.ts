// src/app/app.component.ts

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { LoginFormComponent } from './login-form/login-form.component'; // <-- 1. IMPORT KOMPONEN LOGIN

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule, 
    RouterOutlet,
    LoginFormComponent // <-- 2. TAMBAHKAN DI SINI
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-login-app';
}