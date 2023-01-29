import { Component, OnInit } from '@angular/core';
import { StoreService } from '../../../services/store.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {

  counter: number = 0;

  constructor(private storeService: StoreService) { }

  ngOnInit(): void {
    this.storeService.cartSubject$.subscribe(cart => {
      console.log('cartSubject$', cart);
      this.counter = cart.length;
    });
  }

  getCartTotal(): number {
    return this.storeService.getCartTotal();
  }
}
