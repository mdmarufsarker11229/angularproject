import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { cart, product } from '../sellertype';

@Injectable({
  providedIn: 'root'
})
export class CartserviceService {

  carturl='http://localhost:3000/cartproducts';
  carturluser='http://localhost:3000/cartproductswithuser';

  constructor(private _http:HttpClient) { }

  addtocart(data:product):Observable<product>{
    return this._http.post<product>(this.carturl,data);
  }
   //get cart product 
   getcartpro(userid:product):Observable<product[]>{
    return this._http.get<product[]>(this.carturl+"?userid="+userid);
  }
  //get cart product by id  for delete 
  delcartprobyid(id:product):Observable<product>{
    return this._http.delete<product>(this.carturl+"/"+id);
  }
  






 
  
}
