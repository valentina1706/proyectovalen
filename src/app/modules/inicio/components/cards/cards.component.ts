import { Component } from '@angular/core';

import { joyas } from 'src/app/models/joyas';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent {
// PROPIEDAD PÚBLICA (TIPO: ARRAY)
public info: joyas[];
  
constructor(){
  this.info = [
    {
      id: "",
    nombre: "remera Sol",
    tipo: "tocado",
    color: "azul",
    imagen: "https://fidora.com.mx/wp-content/uploads/2023/09/IMG_0631-scaled.jpg",
    alt: "remera azul Sol",
    },
    {
      id: "",
    nombre: "pantalon Brllitos",
    tipo: "collar",
    color: "negro",
    imagen: "https://fidora.com.mx/wp-content/uploads/2023/09/IMG_0650-scaled.jpg",
    alt: "pantalon negro Brillitos",
    },
    {
      id: "",
    nombre: "Campera Vale",
    tipo: "corona",
    color: "negro",
    imagen: "https://fidora.com.mx/wp-content/uploads/2023/09/IMG_0656-scaled.jpg",
    alt: "Campera azul Vale",
    }
  ]
}
}
