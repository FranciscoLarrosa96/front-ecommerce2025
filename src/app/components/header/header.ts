import { CommonModule } from '@angular/common';
import { Component, effect, inject } from '@angular/core';
import { Product } from '../../services/product';

@Component({
  selector: 'app-header',
  imports: [CommonModule],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header {
  carritoTotal = 0;
  carritoAnimando = false;
  private cartSvc = inject(Product);
  /**
   * Cart Effect
   */
  cartEffect = effect(() => {
    this.carritoTotal = this.cartSvc.cartSignal();
  });
}
