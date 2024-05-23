import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { product } from '../sellertype';

@Injectable({
  providedIn: 'root'
})
export class ProductserviceService {

  prourl:any|null='http://localhost:3000/product'
  constructor(private _http:HttpClient) { }
//for add the product 
  addproduct(data:product):Observable<product>{
    return this._http.post<product>(this.prourl,data)
  }
  //get the product 
  productshow():Observable<product[]>{
    return this._http.get<product[]>(this.prourl)
  }
  //delete the product by id 
  prodelete(id:number):Observable<product>{
    return this._http.delete<product>(this.prourl+"/"+id);
  }
//ge the product by id 
  getproductbyid(id:number):Observable<product>{
    return this._http.get<product>(this.prourl+"/"+id );
  }
  //update the product by id 
  updateproduct(data:product):Observable<product>{
    return  this._http.put<product>(this.prourl+"/"+data.id,data)
  }
  //get product for carousel home page 
  getproductslider():Observable<product>{
    return  this._http.get<product>(this.prourl+"?_limit=4")
  }
  //for popular products show in home page
  popularproduct():Observable<product>{
    return  this._http.get<product>(this.prourl)
  }
  // for search element  also 
searchproduct():Observable<product[]>{
    return  this._http.get<product[]>(this.prourl)
  }
  // user for searchpage show product 
  showproinsearchpage(data:product):Observable<product>{
    return  this._http.get<product>(this.prourl+"?category="+data )
    
  }
  //show product details 
  showprodetail(id:product):Observable<product>{
    return  this._http.get<product>(this.prourl+"/"+id)
    
  }

  //add to cart 
 
  

}
