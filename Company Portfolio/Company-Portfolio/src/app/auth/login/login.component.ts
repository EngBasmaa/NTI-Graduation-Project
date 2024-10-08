import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  constructor(private router: Router) { }


  loginForm: FormGroup = new FormGroup({

    username: new FormControl(),
    password: new FormControl(),

  })


  // to link my form with html file
  submitLoginForm() {

    const { username, password } = this.loginForm.value

    if (username === 'admin' && password === 'admin') {
      this.router.navigate(['/dashboard']);
    }

    // for client rendering when error:
    const errorMsg = document.createElement('p');
    const errorContainer = document.createElement('div')

    errorMsg.innerText = 'Invalid username or password';

    errorMsg.style.color = 'red';
    errorMsg.style.width = '50%';
    errorMsg.style.textAlign = 'center';
    errorMsg.style.margin = 'auto';
    errorMsg.style.padding = '5px 10px';
    errorMsg.style.borderRadius = '4px';
    errorMsg.style.backgroundColor = '#f8d7da';

    document.body.appendChild(errorContainer);
    errorContainer.appendChild(errorMsg)

    // Show/hide error message after 5 seconds
    setTimeout(() => {
      errorContainer.style.display = 'none';
    }, 3000);
  }


}
