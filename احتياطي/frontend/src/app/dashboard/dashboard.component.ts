import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  articles = [
    { title: 'Angular Best Practices', author: 'John Doe', date: '2024-10-10' },
    { title: 'Introduction to TypeScript', author: 'Jane Smith', date: '2024-09-15' },
    { title: 'Building Responsive Layouts', author: 'Alex Johnson', date: '2024-08-22' }
  ];

  users = [
    { name: 'John Doe', role: 'Admin' },
    { name: 'Jane Smith', role: 'Editor' },
    { name: 'Alex Johnson', role: 'Author' }
  ];

  onAddArticle() {
    console.log('Add New Article clicked');
  }

  onManageUsers() {
    console.log('Manage Users clicked');
  }
}
