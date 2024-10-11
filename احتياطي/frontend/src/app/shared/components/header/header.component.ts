import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css' // Corrected to 'styleUrls'
})
export class HeaderComponent {
  authorData: any;

  constructor(public _auth: AuthService) { }
  ngOnInit() {
    this.authorData = this._auth.getAuthorData();
  }
  isLoggedIn(): boolean {
    return this._auth.isLoggedIn(); // Call the method to check login status
  }
}
