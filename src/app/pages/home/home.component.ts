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
    { nombre: 'Max', imagen: 'https://placedog.net/400/300?id=1' },
    { nombre: 'Luna', imagen: 'https://placedog.net/400/300?id=2' },
    { nombre: 'Rocky', imagen: 'https://placedog.net/400/300?id=3' },
    { nombre: 'Bella', imagen: 'https://placedog.net/400/300?id=4' },
    { nombre: 'Simba', imagen: 'https://placedog.net/400/300?id=5' },
    { nombre: 'Toby', imagen: 'https://placedog.net/400/300?id=6' },
    { nombre: 'Nina', imagen: 'https://placedog.net/400/300?id=7' },
    { nombre: 'Coco', imagen: 'https://placedog.net/400/300?id=8' },
    { nombre: 'Daisy', imagen: 'https://placedog.net/400/300?id=9' },
    { nombre: 'Milo', imagen: 'https://placedog.net/400/300?id=10' },
    { nombre: 'Sasha', imagen: 'https://placedog.net/400/300?id=11' },
    { nombre: 'Buddy', imagen: 'https://placedog.net/400/300?id=12' }
  ];

  like(nombre: string) {
    console.log(`El usuario le ha dado like al perro: ${nombre}`);
  }

  share(nombre: string) {
    console.log(`El usuario está interesado en adoptar a este perro: ${nombre}`);
  }
}
