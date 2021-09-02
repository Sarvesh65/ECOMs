import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

public products :any=[];
  public gTotal !: number;
  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.cartService.getProducts()
    .subscribe(res=>{
      this.products = res;
      this.gTotal = this.cartService.totalPrice();
    })
    console.log(this.products)
  }
  removeItem(item:any){
    this.cartService.removeOne(item);

  }
  emptycart(){
    this.cartService.removeAll();
  }
}
