import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common'
import { Router } from '@angular/router';
import { DefaultProducts } from './product/product';
import { ProductService } from './product/product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  searchTerm: string;
  isNavBarVisible: boolean = true;

  constructor(public router: Router, private location: Location, private productService: ProductService) { }

  ngOnInit() {
    if (!localStorage.getItem('products')) {
      let defaultProducts: DefaultProducts = new DefaultProducts();
      localStorage.setItem('products', JSON.stringify(defaultProducts.products));
    }
  }

  showNavBar(): boolean {
    return this.router.url == '/home' || this.router.url == '/trash';
  }


  closedStart(): void {
    setTimeout(() => this.isNavBarVisible = false, 100);
  }

  openedStart(): void {
    this.isNavBarVisible = true;
  }

  goBack(): void {
    this.location.back();
  }

  searchProducts(searchTerm: string): void {
    this.productService.searchProducts(searchTerm);
  }
}
