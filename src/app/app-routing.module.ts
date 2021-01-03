import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AddEditProductComponent } from './product/add-edit-product/add-edit-product.component';
import { ViewProductComponent } from './product/view-product/view-product.component';
import { TrashComponent } from './trash/trash.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'trash', component: TrashComponent },
  { path: 'product/:id', component: ViewProductComponent },
  { path: 'product/add/0', component: AddEditProductComponent, data: { context: 'add' } },
  { path: 'product/edit/:id', component: AddEditProductComponent, data: { context: 'edit' } },
  { path: '**', redirectTo: '/home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
