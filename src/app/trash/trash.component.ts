import { Component, OnInit } from '@angular/core';
import { MatDialog, MatSnackBar } from '@angular/material';
import { Product } from '../product/product';
import { ProductService } from '../product/product.service';
import { ConfirmDialogComponent } from '../shared/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-trash',
  templateUrl: './trash.component.html',
  styleUrls: ['./trash.component.css']
})
export class TrashComponent implements OnInit {

  products: Product[] = [];

  constructor(private productService: ProductService, public dialog: MatDialog, private _snackBar: MatSnackBar) { }

  ngOnInit() {
    this.refreshProducts();
  }

  refreshProducts(): void {
    this.products = this.productService.getProducts().filter(product => product.disabled == true);
  }

  deleteProduct(id: number): void {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: 'auto',
      data: { message: "Are you sure you want to permanently delete the product?" }
    });

    dialogRef.afterClosed().subscribe(async result => {
      if (result) {
        await this.productService.deleteProduct(id);
        this._snackBar.open('Product deleted permanently!', 'Dismiss', {
          duration: 5000,
          horizontalPosition: 'center',
          verticalPosition: 'top',
        });
        this.refreshProducts();
      }
    });
  }
  async restoreProduct(id: number) {
    await this.productService.restoreProduct(id);
    this._snackBar.open('Product restored successfully!', 'Dismiss', {
      duration: 5000,
      horizontalPosition: 'center',
      verticalPosition: 'top',
    });
    this.refreshProducts();
  }
}
