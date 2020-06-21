import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddItemComponent } from './add-item/add-item.component';
import { ItemsComponent } from './items/items.component';


const routes: Routes = [
  {path:'add',component:AddItemComponent},
  {path: 'edit/:index',component:AddItemComponent},
  {path: 'viewItems',component:ItemsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
