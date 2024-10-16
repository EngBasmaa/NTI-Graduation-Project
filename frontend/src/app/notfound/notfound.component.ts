import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-notfound',
  templateUrl: './notfound.component.html',
  styleUrls: ['./notfound.component.css']
})
export class NotfoundComponent {
  constructor(private router: Router) { }

  goHome(): void {
    this.router.navigate(['/home']); // Change the route as needed
  }
}
