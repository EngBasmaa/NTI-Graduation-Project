import { Component, Inject, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  // export class ProductsComponent implements OnInit {

  // products: any[] = [];

  // constructor(private _dataS: DataService) { }

  // ngOnInit(): void {
  //   this._dataS.getProducts().subscribe((data: any) => {
  //     this.products = data.products;
  //     console.log(data);
  //     console.log(data.products);
  //   })
  // }

}
