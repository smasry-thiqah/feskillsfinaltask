import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./home-page/home-page.module').then((m) => m.HomePageModule),
  },
  {
    path: 'products',
    loadChildren: () =>
      import('./products-list-page/products-list-page.module').then(
        (m) => m.ProductsListPageModule
      ),
  },
  {
    path: 'products/:slug',
    loadChildren: () =>
      import('./product-page/product-page.module').then(
        (m) => m.ProductPageModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
