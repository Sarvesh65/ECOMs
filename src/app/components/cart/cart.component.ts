import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  total=1;
  totalamt=0;
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
    // this.totalamt = this.products.price;
  }
  removeItem(item:any){
    this.cartService.removeOne(item);

  }
  emptycart(){
    this.cartService.removeAll();
  }
  tamt(event:any){
    this.totalamt =  this.cartService.onePrice(event.value);
  }
}
