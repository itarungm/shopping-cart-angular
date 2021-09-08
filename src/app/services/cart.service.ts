import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CartModule } from '../includes/cart/cart.module';
import { Cart } from '../models/cart.model';

@Injectable({
  providedIn: "root"
})
export class CartService {

  URL="http://54.186.217.203:5001/cart.php"
  constructor(private http:HttpClient) { }

  getAllCartProducts(cartId:string){
    let params = new HttpParams().set("cart-id",cartId) //Create new HttpParams
    return this.http.get<Cart>(this.URL,{params})
  }
}
