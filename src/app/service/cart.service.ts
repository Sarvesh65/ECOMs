import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  public cartItemList: any = [];
  public productList = new BehaviorSubject<any>([]);
  public search = new BehaviorSubject<string>('');
  constructor() {}
  getProducts() {
    return this.productList.asObservable();
  }

  setProduct(product: any) {
    this.cartItemList.push(...product);
    this.productList.next(product);
  }
  addtoCart(product: any) {
    this.cartItemList.push(product);
    this.productList.next(this.cartItemList);
    this.totalPrice();
    console.log(this.cartItemList);
  }
  totalPrice(): number {
    let gtotal = 0;
    this.cartItemList.map((a: any) => {
      gtotal += a.total;
    });
    return gtotal;
  }
  onePrice(num: number): number {
    let tota = 0;
    this.cartItemList.map((a: any) => {
      tota += a.total * num;
    });
    return tota;
  }
  removeOne(product: any) {
    this.cartItemList.map((a: any, index: any) => {
      if (product.id === a.id) {
        this.cartItemList.splice(index, 1);
      }
      this.productList.next(this.cartItemList);
    });
  }
  removeAll() {
    this.cartItemList = [];
    this.productList.next(this.cartItemList);
  }

  calOne(product: any) {
    this.cartItemList.map((a: any, index: any) => {
      if (product.id === a.id) {
        this.cartItemList.splice(index, 1);
      }
      this.productList.next(this.cartItemList);
    });
  }
}
