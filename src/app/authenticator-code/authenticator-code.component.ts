import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-authenticator-code',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './authenticator-code.component.html',
  styleUrls: ['./authenticator-code.component.css']
})
export class AuthenticatorCodeComponent {
  code: string[] = new Array(6).fill('');

  onSubmit() {
    const codeValue = this.code.join('');
    console.log('Authenticator Code:', codeValue);
    // Add logic to handle code submission (e.g., validate or send to API)
    if (codeValue.length === 6) {
      alert('Code submitted: ' + codeValue);
    } else {
      alert('Please enter a 6-digit code.');
    }
  }
}