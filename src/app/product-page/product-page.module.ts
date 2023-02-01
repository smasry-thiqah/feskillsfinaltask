import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductPageRoutingModule } from './product-page-routing.module';
import { ProductPageComponent } from './product-page/product-page.component';
import { RelatedProductsComponent } from './related-products/related-products.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductDescriptionComponent } from './product-description/product-description.component';


@NgModule({
  declarations: [
    ProductPageComponent,
    RelatedProductsComponent,
    ProductDetailsComponent,
    ProductDescriptionComponent
  ],
  imports: [
    CommonModule,
    ProductPageRoutingModule
  ]
})
export class ProductPageModule { }
