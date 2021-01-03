import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-add-edit-product',
  templateUrl: './add-edit-product.component.html',
  styleUrls: ['./add-edit-product.component.css']
})
export class AddEditProductComponent implements OnInit {

  product: Product = new Product();
  cities: string[] = ['Ahmedabad', 'Delhi', 'Mumbai', 'Chennai'];

  constructor(private productService: ProductService, private location: Location, private activeRoute: ActivatedRoute, private _snackBar: MatSnackBar) { }

  ngOnInit() {
    switch (this.activeRoute.snapshot.data.context) {
      case 'edit':
        const id = this.activeRoute.snapshot.paramMap.get('id');
        this.product = this.productService.getProduct(parseInt(id));
        break;
    }
  }

  async onSubmit(action: string) {
    await this.productService.addUpdateProduct(this.product);
    this._snackBar.open('Product saved successfully!', 'Dismiss', {
      duration: 5000,
      horizontalPosition: 'center',
      verticalPosition: 'top',
    });
    this.cancel();
  }

  cancel(): void {
    this.location.back();
  }

  setAvailability(isAvailable: boolean): void {
    this.product.availability = isAvailable;
  }

  checkURL(url: string): boolean {
    let regexURL = /^((https?|ftp|smtp):\/\/)?(www.)?[a-z0-9]+\.[a-z]+(\/[a-zA-Z0-9#]+\/?)*$/;
    return regexURL.test(url);
  }
}
