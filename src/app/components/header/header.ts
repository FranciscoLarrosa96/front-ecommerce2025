import { CommonModule } from '@angular/common';
import { Component, effect, inject, signal } from '@angular/core';
import { CartService } from '../../services/cart';
import { HelperService } from '../../shared/helper';


@Component({
  selector: 'app-header',
  imports: [CommonModule],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header {
  carritoTotal = 0;
  carritoAnimando = false;
  private _helperSvc = inject(HelperService);
  private cartSvc = inject(CartService);
  /**
   * Cart Effect
   */
  cartEffect = effect(() => {
    this.carritoTotal = this.cartSvc.getTotal();
    this.carritoAnimando = true;
  });

  /**
   * Detecta si el drawer está abierto
   */
  openDrawer() {
    this._helperSvc.openDrawer();
  }
}
