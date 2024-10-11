import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service'; // Import your AuthService

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  token: any;
  loginForm: FormGroup;
  errorMessage: string | null = null;

  constructor(private fb: FormBuilder, private router: Router, private authService: AuthService) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  submitLoginForm() {
    const { email, password } = this.loginForm.value;

    if (this.loginForm.valid) {
      this.authService.login(email, password).subscribe((res) => {
        if (res) {
          this.token = res; // Assign response to token
          localStorage.setItem('token', btoa(JSON.stringify(this.token))); // Encode before storing
          this.router.navigate(['/dashboard']); // Navigate to the dashboard on login
        }
      }, () => {
        this.errorMessage = 'Invalid email or password'; // Update error message on error
      });
    }
  }
}
