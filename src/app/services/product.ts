import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Product {
  cartSignal = signal(0);
  

  constructor() { }
}
