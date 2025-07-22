import { CommonModule } from '@angular/common';
import { Component, effect, inject } from '@angular/core';
import { HelperService } from '../../shared/helper';
import { CartService } from '../../services/cart';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {

  isDrawerOpen = false;
  showFilter = false;

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
  private _helperSvc = inject(HelperService);
  private _cartSvc = inject(CartService);
  /**
   * Detecta si el drawer está abierto
   * @param producto 
   */
  toggleDrawer = effect(() => {
    this.isDrawerOpen = this._helperSvc.isDrawerOpen();
  })




  /**
   * Agrega un producto al carrito
   * @param producto 
   */
  agregarAlCarrito(producto: any) {
    this._cartSvc.agregar(producto);
  }

  /**
   * Muestra los detalles de un producto
   * @param producto 
   */
  verProducto(producto: any) {
    // Aquí podrías implementar la lógica para mostrar un modal o redirigir a una página de detalles del producto
    console.log('Ver producto:', producto);
  }
}
