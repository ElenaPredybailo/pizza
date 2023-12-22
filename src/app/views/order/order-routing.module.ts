import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {OrderComponent} from "./order.component";
import {AuthGuard} from "../../core/auth/auth.guard";

// жадная загрузка
// const routes: Routes = [
//   {path: 'order', component: OrderComponent, canActivate: [AuthGuard]},
// ];


// ленивая загрузка, передаем path: '', т.к. в app.routing уже указали path: 'order'
const routes: Routes = [
  {path: '', component: OrderComponent, canActivate: [AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrderRoutingModule { }
