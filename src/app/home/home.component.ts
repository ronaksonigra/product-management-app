import { Component, OnDestroy, OnInit } from "@angular/core";
import { MatDialog, MatSnackBar } from "@angular/material";
import { Subject } from "rxjs";
import { takeUntil } from 'rxjs/operators';
import { Product } from "../product/product";
import { ProductService } from "../product/product.service";
import { ConfirmDialogComponent } from "../shared/confirm-dialog/confirm-dialog.component";
import { ProductFilters } from "./filter";
import { FilterService } from "./filter.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent implements OnInit, OnDestroy {
  products: Product[] = [];
  originalProducts: Product[] = [];
  searchTerm: string;
  productFilters: ProductFilters = new ProductFilters();

  private destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(private productService: ProductService, private filterService: FilterService, public dialog: MatDialog, private _snackBar: MatSnackBar) {
    this.productService.searchTerm
      .pipe(takeUntil(this.destroy$))
      .subscribe((term) => {
        this.searchTerm = term;
        this.refreshProducts();
      });
  }

  ngOnInit() {
    this.refreshProducts();
  }

  refreshProducts(): void {
    this.originalProducts = this.productService
      .getProducts()
      .filter((product) => product.disabled == false);
    this.products = this.filterService.filterProducts(this.originalProducts, this.searchTerm, this.productFilters);
  }

  async toggleLikeButton(id: number) {
    await this.productService.toggleLikeValue(id);
    this.refreshProducts();
  }

  availabilityToggle(availability: boolean): void {
    this.productFilters.availability = availability;
    this.refreshProducts();
  }

  disableProduct(id: number): void {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: 'auto',
      data: { message: "Are you sure you want to delete the product?" }
    });

    dialogRef.afterClosed().subscribe(async result => {
      if (result) {
        await this.productService.disableProduct(id);
        this._snackBar.open('Product deleted successfully!', 'Dismiss', {
          duration: 5000,
          horizontalPosition: 'center',
          verticalPosition: 'top',
        });
        this.refreshProducts();
      }
    });
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
}