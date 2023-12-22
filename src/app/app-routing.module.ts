import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LayoutComponent} from "./views/layout.component";

// жадная загрузка
// const routes: Routes = [
//   {path: '**', redirectTo: ''}
// ];

// ленивая загрузка
// + использование component: LayoutComponent,
const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {path: '', loadChildren: () => import('./views/home/home.module').then(m => m.HomeModule)},
      {path: 'order', loadChildren: () => import('./views/order/order.module').then(m => m.OrderModule)},
      {path: 'products', loadChildren: () => import('./views/products/products.module').then(m => m.ProductsModule)},
    ]
  },
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {anchorScrolling: 'enabled', useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
