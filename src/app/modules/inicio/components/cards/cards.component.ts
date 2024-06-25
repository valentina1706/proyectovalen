import { Component } from '@angular/core';

import { ropa } from 'src/app/models/ropa';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent {
// PROPIEDAD PÚBLICA (TIPO: ARRAY)
public info: ropa[];
  
constructor(){
  this.info = [
    {
      id: "",
    nombre: "remera Sol",
    talle: 2,
    color: "azul",
    imagen: "https://i0.wp.com/puppis.blog/wp-content/uploads/2022/02/abc-cuidado-de-los-gatos-min.jpg?resize=521%2C346&ssl=1",
    alt: "remera azul Sol",
    },
    {
      id: "",
    nombre: "pantalon Brllitos",
    talle: 36,
    color: "negro",
    imagen: "https://i0.wp.com/puppis.blog/wp-content/uploads/2022/02/abc-cuidado-de-los-gatos-min.jpg?resize=521%2C346&ssl=1",
    alt: "pantalon negro Brillitos",
    },
    {
      id: "",
    nombre: "Campera Vale",
    talle: 3,
    color: "azul",
    imagen: "https://i0.wp.com/puppis.blog/wp-content/uploads/2022/02/abc-cuidado-de-los-gatos-min.jpg?resize=521%2C346&ssl=1",
    alt: "Campera azul Vale",
    }
  ]
}
}
