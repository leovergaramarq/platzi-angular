import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Product from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(private http: HttpClient) { }

  fetchProducts(limit: number): Promise<Product[]> {
    return new Promise<Product[]>((res, rej) => (
      this.http.get<FakeProduct[]>('https://fakestoreapi.com/products?limit=' + limit).subscribe((products: FakeProduct[]) => {
        if (!products) return rej('No products found');

        res(products.map(({ description, id, image, price, title }: FakeProduct) => ({
          id, price, description,
          name: title,
          img: image,
          quantity: Math.floor(Math.random() * 100),
        })));
      })
    ));
  }
}

type FakeProduct = {
  id: number,
  title: string,
  price: number,
  description: string,
  category: string,
  image: string,
  rating: {
    rate: number,
    count: number
  }
};
