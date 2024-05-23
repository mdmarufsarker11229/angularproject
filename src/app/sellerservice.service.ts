import { EventEmitter, Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import {login, product, seller} from './sellertype'
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class SellerserviceService {

url:any='http://localhost:3000/seller';


  constructor(private _http:HttpClient,private _route:Router) { 

  }
  //for seller signup 
  signup(data:seller):Observable<seller>{
    return this._http.post<seller>(this.url,data)
  }
  //for seller login part 
  sellerlogin(data:login):Observable<login>{
   
    return this._http.get<login>(this.url+"?email="+data.email+"&password="+data.password);
    
  }
 


}
