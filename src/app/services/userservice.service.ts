import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { userlogin, usersignup } from '../sellertype';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  userurl="http://localhost:3000/userauth";
  constructor(private _http:HttpClient) {

   }

   //user signup 
   usersignup(data:usersignup):Observable<usersignup>{
     return this._http.post<usersignup>(this.userurl,data);
   } 
   //user login service
   userlogin(data:userlogin):Observable<userlogin>{
     return this._http.get<userlogin>(this.userurl+"?email="+data.email +"&password="+data.password);
   }
}
