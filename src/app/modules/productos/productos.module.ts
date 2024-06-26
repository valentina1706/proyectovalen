import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductoRoutingModule } from './productos-routing.module';

import { RemerasComponent } from './remeras/remeras.component';
import { PantalonesComponent } from './pantalones/pantalones.component';
import { BuzosComponent } from './buzos/buzos.component';
import { CamperasComponent } from './camperas/camperas.component';


@NgModule({
  declarations: [
    RemerasComponent,
    PantalonesComponent,
    BuzosComponent,
    CamperasComponent
  ],
  imports: [
    CommonModule,
    ProductoRoutingModule
  ]
})
export class ProductosModule { }
