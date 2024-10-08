import { Component, OnInit } from '@angular/core';
import { DataService } from '../../shared/services/data.service';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrl: './all-products.component.css'
})
export class AllProductsComponent implements OnInit {

  products: any[] = [];

  constructor(private _dataS: DataService) { }

  ngOnInit(): void {
    this._dataS.getProducts().subscribe(data => {
      this.products = data.products;
      console.log(data);
      console.log(data.products);
    })
  }

}
