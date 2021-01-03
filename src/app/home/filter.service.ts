import { Injectable } from '@angular/core';
import { Product } from '../product/product';
import { ProductFilters } from './filter';

@Injectable({
  providedIn: 'root'
})
export class FilterService {

  constructor() { }

  filterProducts(products: Product[], searchTerm: string, productFilters: ProductFilters): Product[] {
    products = products
      .filter((product) => searchTerm ? this.checkSearchTerm(product, searchTerm) : true)
      .filter((product) => this.checkAvailability(product, productFilters))
      .filter((product) => this.checkPrice(product, productFilters))
      .filter((product) => this.checkLocation(product, productFilters));
    return products;
  }

  checkSearchTerm(product: Product, searchTerm: string): boolean { // Both product name and product description
    if (product.name.toLowerCase().includes(searchTerm) || product.description.toLocaleLowerCase().includes(searchTerm))
      return true;
    else
      return false;
  }

  checkAvailability(product: Product, productFilters: ProductFilters): boolean {
    if (productFilters.availability == product.availability)
      return true;
    else
      return false;
  }

  checkPrice(product: Product, productFilters: ProductFilters): boolean {
    if (
      !productFilters.price.lessThan1000 &&
      !productFilters.price.between1001And2000 &&
      !productFilters.price.between2001And3000 &&
      !productFilters.price.between3001And4000 &&
      !productFilters.price.between4001And5000 &&
      !productFilters.price.moreThan5000
    )
      return true;
    else if (
      (productFilters.price.lessThan1000 && product.price < 1001) ||
      (productFilters.price.between1001And2000 && product.price > 1000 && product.price < 2001) ||
      (productFilters.price.between2001And3000 && product.price > 2000 && product.price < 3001) ||
      (productFilters.price.between3001And4000 && product.price > 3000 && product.price < 4001) ||
      (productFilters.price.between4001And5000 && product.price > 4000 && product.price < 5001) ||
      (productFilters.price.moreThan5000 && product.price > 5000)
    )
      return true;
    else
      return false;
  }

  checkLocation(product: Product, productFilters: ProductFilters): boolean {
    if (
      !productFilters.location.ahmedabad &&
      !productFilters.location.chennai &&
      !productFilters.location.delhi &&
      !productFilters.location.mumbai
    )
      return true;
    else if (
      (productFilters.location.ahmedabad && product.location == 'Ahmedabad') ||
      (productFilters.location.chennai && product.location == 'Chennai') ||
      (productFilters.location.delhi && product.location == 'Delhi') ||
      (productFilters.location.mumbai && product.location == 'Mumbai')
    )
      return true;
    else
      return false;
  }
}
