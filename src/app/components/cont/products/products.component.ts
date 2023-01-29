import { Component, OnInit } from '@angular/core';
import Product from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.sass']
})
export class ProductsComponent implements OnInit {
  // products: Product[] = this.genProducts(10);
  products: Product[] = [];
  title: string = 'Loading products...';
  productsLoadedCount: number = 0;
  onProductLoaded: () => void = (): void => {
    this.productsLoadedCount++;
    if (this.productsLoadedCount === this.products.length) {
      this.title = 'Products';
    }
  }

  constructor(private productService: ProductService) {
  }

  ngOnInit(): void {
    this.productService.fetchProducts(10).then((products: Product[]) => {
      this.products = products;
    }).catch((err: string) => {
      this.title = err;
    });
  }

  // genProducts(n: number): Product[] {
  //   return Array.from({ length: n }, (_, i) => ({
  //     id: i + 1,
  //     name: 'Product ' + (i + 1),
  //     price: Math.floor(Math.random() * 1000),
  //     img: 'https://picsum.photos/200?t=' + i, // cache
  //     description: 'Description ' + (i + 1),
  //     quantity: Math.floor(Math.random() * 10)
  //   }));
  // };
}
