import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InicioRoutingModule } from './inicio-routing.module';

// VISTAS - PÁGINAS
import { InicioComponent } from './pages/inicio/inicio.component';

// COMPONENTES LOCALES
import { CardsComponent} from './components/cards/cards.component';

// COMPONENTES DE MATERIAL
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { CarruselComponent } from './components/carrusel/carrusel.component';


@NgModule({
  declarations: [
    InicioComponent,
    CardsComponent,
    CarruselComponent
  ],
  imports: [
    CommonModule,
    InicioRoutingModule,
    MatButtonModule,
    MatCardModule
  ],
  exports: [
    InicioComponent,
    CardsComponent,
    MatButtonModule,
    MatCardModule,
    CardsComponent,
    CarruselComponent
    
  ]
})
export class InicioModule { }
