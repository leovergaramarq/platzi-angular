import { Component, Input, OnInit, OnChanges, OnDestroy, AfterViewInit, SimpleChanges } from '@angular/core';
import Product from 'src/app/models/product.model';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.sass']
})
export class ProductComponent implements OnInit, OnChanges, OnDestroy, AfterViewInit {
  @Input() product: Product = {
    id: 0,
    name: 'Product',
    price: 0,
    img: 'https://picsum.photos/200',
    description: 'Description',
    quantity: 0
  };
  @Input() onLoaded: (() => void) = (): void => { };
  imgLoaded: boolean = false;
  cart: Product[] = [];

  constructor(private storeService: StoreService) {
    // before render
    // NO async -- one time
    // console.log('constructor');
    this.cart = this.storeService.getCart();
  }

  ngOnChanges(changes: SimpleChanges): void {
    // before - during render
    // changes inputs -- multiples times
    // console.log('ngOnChanges');
    // console.log('changes', changes);
  }

  ngOnInit(): void {
    // before render
    // async - fetch -- one time
    // console.log('ngOnInit');
  }

  ngAfterViewInit(): void {
    // after render
    // handler children -- one time
    // console.log('ngAfterViewInit');
  }

  ngOnDestroy(): void {
    // delete -- one time
    // console.log('ngOnDestroy');
  }

  imgLoad() {
    this.imgLoaded = true;
    this.onLoaded();
  }

  addToCart(product: Product): void {
    this.storeService.addToCart(product);
    this.cart = this.storeService.getCart();
  }

  removeFromCart(product: Product): void {
    this.storeService.removeFromCart(product);
    this.cart = this.storeService.getCart();
  }

  clearCart(): void {
    this.storeService.clearCart();
    this.cart = this.storeService.getCart();
  }

  getCartTotal(): number {
    return this.storeService.getCartTotal();
  }
}
