
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { product } from '../sellertype';
import { ProductserviceService } from '../services/productservice.service';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { CartserviceService } from '../services/cartservice.service';
import { data } from 'jquery';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  cartitems=0;
  usericon=faUser;
  menutype: string = 'default';
  sellername: string = '';
  username:string='';
  searchproduct: undefined|product[];
  filterpro: string = '';

  constructor(private _route: Router, private _productservice: ProductserviceService, private _fb: FormBuilder, private _activateroute: ActivatedRoute,private _cartservice:CartserviceService) {

  }

  ngOnInit(): void {
    this.searchpro();
    let userid=localStorage.getItem('user');
    let id=userid&&JSON.parse(userid)[0].id;
    
    this._route.events.subscribe((val: any) => {
      console.log(val.url);
      if (val.url) {
        if (localStorage.getItem('seller') && val.url.includes('seller')) {
          console.log("we are in seller area");
          this.menutype = "seller";
          if (localStorage.getItem('seller')) {
            let sellerdata = localStorage.getItem('seller');
            let sellerinfo = sellerdata && JSON.parse(sellerdata)[0];
            this.sellername = sellerinfo.username;
          }

        }else if(localStorage.getItem('user')){
          console.log("we are in user area ");
          let userdata=localStorage.getItem('user');
          let userinfo=userdata&&JSON.parse(userdata)[0];
          this.username=userinfo.username;
          this.menutype="user"

        }else {
          console.log("outside of seller area");
          this.menutype = 'default';
        }
        
      }
    })

   
    if(id){
      this._cartservice.getcartpro(id).subscribe((result:any)=>{
        this.cartitems=result.length;
       
        
      })
    }

   
    
  }

  //get userid for cart length 



  //for seller logout function 
  sellerlogout() {
    localStorage.removeItem("seller");
    this._route.navigate(['/home'])
  }
//user logout 
userlogout(){
  localStorage.removeItem("user");
  this._route.navigate(['/sellerhome']);
  window.location.reload();
}

  // for search the product auto sugestion
  searchpro() {
    this._productservice.searchproduct().subscribe((result: any) => {
      if (result) {

        this.searchproduct = result;
      }
    })
  }



  //for product search in search tab 
  gotosearchpage(data: any) {


    console.log(data);
    this._route.navigate(['/searchpage/', data]);
    this.filterpro = '';


  }
  //reload
  cantopencartpage(){
    alert("Can't Open without User Login");
    this._route.navigate(['/userauth']);
  }


}
