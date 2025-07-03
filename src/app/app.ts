import { CommonModule } from '@angular/common';
import { AfterViewInit, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import * as AOS from 'aos';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements AfterViewInit {
  protected title = 'front';
  isDrawerOpen = false;
  productos = [
    {
      nombre: 'MSI RTX 4060 Ti Ventus 8GB',
      precio: 772000,
      precioOriginal: 837900,
      thumb: 'assets/img/rtx4060ti-thumb.avif',
      imagen: 'assets/img/rtx4060ti.avif',
      stock: true
    },
    {
      nombre: 'Gigabyte RTX 4070 12GB',
      precio: 1015000,
      precioOriginal: null,
      thumb: 'assets/img/rtx4070-thumb.avif',
      imagen: 'assets/img/rtx4070.avif',
      stock: false
    },
    {
      nombre: 'ASUS ROG Strix RTX 4080 16GB',
      precio: 1500000,
      precioOriginal: 1600000,
      thumb: 'assets/img/rtx4080-thumb.avif',
      imagen: 'assets/img/rtx4080.avif',
      stock: true
    },
    {
      nombre: 'Gigabyte RTX 4090 24GB',
      precio: 2500000,
      precioOriginal: 2700000,
      thumb: 'assets/img/rtx4090-thumb.avif',
      imagen: 'assets/img/rtx4090.avif',
      stock: false
    }
  ];
  ngAfterViewInit() {
    // Le damos un pequeño delay para evitar conflictos
    setTimeout(() => {
      AOS.init({
        duration: 800,
        once: false,
        easing: 'ease-in-out',
      });
    }, 0);
  }
}
