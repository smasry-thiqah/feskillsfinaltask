import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsListPageRoutingModule } from './products-list-page-routing.module';
import { ProductsListPageComponent } from './products-list-page/products-list-page.component';


@NgModule({
  declarations: [
    ProductsListPageComponent
  ],
  imports: [
    CommonModule,
    ProductsListPageRoutingModule
  ]
})
export class ProductsListPageModule { }
