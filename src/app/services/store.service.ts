import { Injectable } from '@angular/core';
import {  BehaviorSubject} from 'rxjs';
import Product from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  private cart: Product[] = [];
  private cartSubject = new BehaviorSubject<Product[]>([]);
  cartSubject$ = this.cartSubject.asObservable();

  constructor() { }

  addToCart(product: Product): void {
    console.log('addToCart', product);
    this.cart.push(product);
    this.cartSubject.next(this.cart);
  }

  removeFromCart(product: Product): void {
    console.log('removeFromCart', product);

    const index: number = this.cart.findIndex(p => p.id === product.id);
    if (index !== -1) this.cart.splice(index, 1);
    else console.error('Product not found in cart');

    this.cartSubject.next(this.cart);
  }

  clearCart(): void {
    console.log('clearCart');
    this.cart = [];
    this.cartSubject.next(this.cart);
  }

  getCart(): Product[] {
    return this.cart;
  }

  getCartTotal(): number {
    return this.cart.reduce((total, product) => total + product.price, 0);
  }
}
