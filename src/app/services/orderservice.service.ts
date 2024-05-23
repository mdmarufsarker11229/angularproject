import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { order } from '../sellertype';

@Injectable({
  providedIn: 'root'
})
export class OrderserviceService {

  orderurl='http://localhost:3000/orders'
  constructor(private _http:HttpClient) {

   }

   // for  product order placed 
   ordernow(data:order):Observable<order>{
  return  this._http.post<order>(this.orderurl,data);
   }

   // get ordered product 
   getorderedpro(userid:order):Observable<order>{
    return  this._http.get<order>(this.orderurl+"?userid="+userid);
     }

     // cancel ordered product 
   cancelorderedpro(id:order):Observable<order>{
    return  this._http.delete<order>(this.orderurl+"/"+id);
     }
}
