import { Injectable, effect, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class CartService {
  // Signal principal
  private readonly _cartItems = signal<any[]>(this.cargarDesdeStorage());

  // Exponer readonly para consumo global
  readonly cartItems = this._cartItems.asReadonly();

  constructor() {
    // Persistir en localStorage cuando cambia el carrito
    effect(() => {
      const value = this._cartItems();
      localStorage.setItem('cart-items', JSON.stringify(value));
    });
  }

  agregar(producto: any) {
    const actual = this._cartItems();
    this._cartItems.set([...actual, producto]);
  }

  quitar(productoId: number) {
    const actualizados = this._cartItems().filter(p => p.id !== productoId);
    this._cartItems.set(actualizados);
  }

  limpiar() {
    this._cartItems.set([]);
  }

  getTotal(): number {
    return this._cartItems().length;
  }

  private cargarDesdeStorage(): any[] {
    const raw = localStorage.getItem('cart-items');
    return raw ? JSON.parse(raw) : [];
  }
}
