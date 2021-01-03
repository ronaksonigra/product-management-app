import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  searchTerm = new Subject<string>();

  constructor() { }

  getProduct(id: number): Product {
    return JSON.parse(localStorage.getItem("products")).filter(
      (product) => product.id == id
    )[0];
  }

  getProducts(): Product[] {
    return JSON.parse(localStorage.getItem('products'));
  }

  addUpdateProduct(product: Product): void {
    if (product.id == 0) {  //Add
      let products: Product[] = JSON.parse(localStorage.getItem('products'));
      if (products.length > 0) {
        product.id = products[products.length - 1].id + 1;
        products.push(product);
        console.log(products)
        localStorage.setItem('products', JSON.stringify(products));
      }
      else {
        product.id = 1;
        products.push(product);
        localStorage.setItem('products', JSON.stringify(products));
      }
    }
    else { //Update
      let products: Product[] = JSON.parse(localStorage.getItem('products'));
      products.forEach((item, i) => {
        if (product.id == item.id)
          products[i] = product;
      });
      localStorage.setItem('products', JSON.stringify(products));
    }
  }

  disableProduct(id: number): void {
    let products: Product[] = JSON.parse(localStorage.getItem('products'));
    products.forEach((product, i) => {
      if (product.id == id)
        products[i].disabled = true;
    });
    localStorage.setItem('products', JSON.stringify(products));
  }

  toggleLikeValue(id: number): void {
    let products: Product[] = JSON.parse(localStorage.getItem('products'));
    products.forEach((product, i) => {
      if (product.id == id)
        products[i].liked = !products[i].liked;
    });
    localStorage.setItem('products', JSON.stringify(products));
  }

  deleteProduct(id: number): void {
    let products: Product[] = JSON.parse(localStorage.getItem('products'));
    products = products.filter(product => product.id != id);
    localStorage.setItem('products', JSON.stringify(products));
  }

  restoreProduct(id: number): void {
    let products: Product[] = JSON.parse(localStorage.getItem('products'));
    products.forEach((product, i) => {
      if (product.id == id)
        products[i].disabled = false;
    });
    localStorage.setItem('products', JSON.stringify(products));
  }

  searchProducts(searchTerm: string): void {
    this.searchTerm.next(searchTerm);
  }
}
