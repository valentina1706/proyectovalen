import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// TODAS LAS VISTAS DEL MÓDULO PRODUCTO
import { RemerasComponent } from './remeras/remeras.component';
import { BuzosComponent } from './buzos/buzos.component';
import { CamperasComponent } from './camperas/camperas.component';
import { PantalonesComponent } from './pantalones/pantalones.component';

const routes: Routes = [
  {
    path:"remera",component:RemerasComponent
  },
  {
    path:"buzos",component:BuzosComponent
  },
  {
    path:"CamperasComponent",component:CamperasComponent
  },
  {
    path:"pantalones",component:PantalonesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductoRoutingModule { }
