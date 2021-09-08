import { Component, OnInit } from '@angular/core';
import { Cart } from '../../models/cart.model';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  constructor(private _cartService: CartService) { }

  cartId = "CAR-204-1627042084"
  cartContainer:Cart
  totalPrice: number=0;
  symbol: string;
  
  dummyContent = true;
  ngOnInit(): void {
    this.getAllCartProducts()
  }

  getAllCartProducts(){
    this._cartService.getAllCartProducts(this.cartId).subscribe((res:Cart)=>{
      if(res.success){
        this.dummyContent = false;
        this.cartContainer=res;
        this.calculatePrices()
        console.log(this.cartContainer);
      }
    })
  }

  calculatePrices(){
    this.symbol = this.cartContainer.data.products[0]?.symbol
    this.cartContainer.data.products.map((item)=>{
      this.totalPrice = +this.totalPrice+item.base_currency_final_sale_price
      if(item?.add_ons){
        item.add_ons.map((addOn)=>{
      this.totalPrice = +this.totalPrice+addOn.base_cost;
        })
      }
    })
  }



}
