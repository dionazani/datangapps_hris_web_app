import { Component } from '@angular/core';
   import { Router } from '@angular/router';
   import { RouterOutlet } from '@angular/router';

   @Component({
     selector: 'app-landing-page-main',
     standalone: true,
     imports: [RouterOutlet],
     templateUrl: './landing-page-main.component.html',
     styleUrls: ['./landing-page-main.component.css']
   })
   export class LandingPageMainComponent {
     constructor(private router: Router) {}

     navigate(route: string) {
       this.router.navigate([route]);
     }

     onLogout() {
       console.log('Logout clicked');
       // Add logout logic here (e.g., clear session, redirect to login)
       this.router.navigate(['/login']); // Example redirect
     }
   }