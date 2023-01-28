import { Component, Input, OnInit, OnChanges, OnDestroy, AfterViewInit, SimpleChanges } from '@angular/core';
import Product from 'src/app/models/product.model';

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
  @Input() onLoaded: (() => void) = (): void => {};

  constructor() {
    // before render
    // NO async -- one time
    // console.log('constructor');
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

  asd() {
    console.log('asdasdasd');

  }

  addToCart(product: Product): void {
    console.log('addToCart', product);
  }
}
