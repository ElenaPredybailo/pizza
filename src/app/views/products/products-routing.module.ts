import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProductsComponent} from "./products/products.component";
import {ProductComponent} from "./product/product.component";

// жадная загрузка
// const routes: Routes = [
//   {path: 'products', component: ProductsComponent},
//   {path: 'products/:id', component: ProductComponent},
// ];

// ленивая загрузка, передаем path: '', т.к. в app.routing уже указали path
const routes: Routes = [
  {path: '', component: ProductsComponent},
  {path: ':id', component: ProductComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
