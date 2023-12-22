import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProductComponent} from "./product/product.component";
import {ProductsComponent} from "./products/products.component";
import { ProductsRoutingModule } from './products-routing.module';
import {SharedModule} from "../../shared/shared.module";
import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [
    ProductComponent,
    ProductsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    ProductsRoutingModule
  ],
  exports: [
    ProductsRoutingModule
  ]
})
export class ProductsModule { }
