import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shippingaddress',
  templateUrl: './shippingaddress.component.html',
  styleUrls: ['./shippingaddress.component.css']
})
export class ShippingaddressComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  orderconfirm(){
    alert("Thank You...!")
  }
}
