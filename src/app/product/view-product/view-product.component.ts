import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})
export class ViewProductComponent implements OnInit {

  product: Product = new Product();
  showZoomedImage: boolean = false;

  constructor(private activeRoute: ActivatedRoute, private productService: ProductService) { }

  ngOnInit() {
    this.getProduct();
  }

  getProduct(): void {
    const id = this.activeRoute.snapshot.paramMap.get('id');
    this.product = this.productService.getProduct(parseInt(id));
  }

  mouseEnter(): void {
    this.showZoomedImage = true;
  }

  mouseLeave(): void {
    this.showZoomedImage = false;
  }
}
