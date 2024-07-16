import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewproductsComponent } from './viewproducts/viewproducts.component';
import { AddproductsComponent } from './addproducts/addproducts.component';
import { UpdateproductsComponent } from './updateproducts/updateproducts.component';

const routes: Routes = [
  {
  path: '',
  component: ViewproductsComponent
},
{
  path: 'viewproducts',
  component: ViewproductsComponent
},
{
  path: 'addproducts',
  component: AddproductsComponent
},
{
  path:'updateproducts/:productId',
  component: UpdateproductsComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
