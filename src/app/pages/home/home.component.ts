import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  perros = [
    { nombre: 'Firulais', imagen: 'https://placedog.net/400/300?id=1' },
    { nombre: 'Manchas', imagen: 'https://placedog.net/400/300?id=2' },
    { nombre: 'Chispa', imagen: 'https://placedog.net/400/300?id=3' },
    { nombre: 'Toby', imagen: 'https://placedog.net/400/300?id=4' },
    { nombre: 'Negra', imagen: 'https://placedog.net/400/300?id=5' },
    { nombre: 'Luna', imagen: 'https://placedog.net/400/300?id=6' },
    { nombre: 'Canelo', imagen: 'https://placedog.net/400/300?id=7' },
    { nombre: 'Chiquis', imagen: 'https://placedog.net/400/300?id=8' },
    { nombre: 'Solovino', imagen: 'https://placedog.net/400/300?id=9' },
    { nombre: 'Maya', imagen: 'https://placedog.net/400/300?id=10' },
    { nombre: 'Chata', imagen: 'https://placedog.net/400/300?id=11' },
    { nombre: 'Duque', imagen: 'https://placedog.net/400/300?id=12' }
  ];
  

  like(nombre: string) {
    console.log(`El usuario le ha dado like al perro: ${nombre}`);
  }

  share(nombre: string) {
    console.log(`El usuario está interesado en adoptar a este perro: ${nombre}`);
  }
}
