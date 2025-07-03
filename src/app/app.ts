import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import * as AOS from 'aos';
@Component({
  selector: 'app-root',
  imports: [CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements AfterViewInit, OnInit {

  protected title = 'front';
  isDarkMode = false;
  isDrawerOpen = false;
  carritoTotal = 0;
  carritoAnimando = false;
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


  ngOnInit(): void {
    this.configDarkMode();
    this.updateDarkModeClass();
  }


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


  /**
   * Configura el modo oscuro según la preferencia del usuario o del sistema
   * y actualiza la clase del HTML.
   */
  configDarkMode() {
    // Detecta si el sistema está en modo oscuro
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    // Si el usuario ya eligió un modo antes, respetalo
    const savedTheme = localStorage.getItem('theme');

    if (savedTheme) {
      this.isDarkMode = savedTheme === 'dark';
    } else {
      this.isDarkMode = prefersDark;
    }
  }

  /**
   * Toggle dark mode
   */
  updateDarkModeClass(): void {
    const html = document.documentElement;
    if (this.isDarkMode) {
      html.classList.add('dark');
    } else {
      html.classList.remove('dark');
    }
  }

  toggleDarkMode() {
    this.isDarkMode = !this.isDarkMode;
    const htmlElement = document.documentElement;
    localStorage.setItem('theme', this.isDarkMode ? 'dark' : 'light');

    if (this.isDarkMode) {
      htmlElement.classList.add('dark');
    } else {
      htmlElement.classList.remove('dark');
    }
  }

  agregarAlCarrito(producto: any) {
    this.carritoTotal++;
    this.carritoAnimando = true;
  }

  verProducto(producto: any) {
    // Aquí podrías implementar la lógica para mostrar un modal o redirigir a una página de detalles del producto
    console.log('Ver producto:', producto);
  }
}
