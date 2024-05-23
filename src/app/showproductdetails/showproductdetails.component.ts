import { JsonPipe } from '@angular/common';
import { Component, EventEmitter, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { data, map } from 'jquery';

import { cart, product } from '../sellertype';
import { CartserviceService } from '../services/cartservice.service';
import { ProductserviceService } from '../services/productservice.service';
@Component({
  selector: 'app-showproductdetails',
  templateUrl: './showproductdetails.component.html',
  styleUrls: ['./showproductdetails.component.css']
})
export class ShowproductdetailsComponent implements OnInit {
  productid:undefined|cart;
  getuserid:undefined |cart;
  productquatity = 1;
  carticon = faCartShopping;
  prodetails:any;
  cartitems:any;

  cartProwithoutUser:any;
  constructor(private _productservice: ProductserviceService, private _activateroute: ActivatedRoute,private _route:Router,private _cartservice:CartserviceService) {


  }

  ngOnInit(): void {
    this.showproductdet();
    
  }

  showproductdet() {
    this._productservice.showprodetail(this._activateroute.snapshot.params['id']).subscribe((data: any) => {

      this.prodetails = data;

    })
  }


  // increament value 

  increament() {

    if (this.productquatity < 10) {
      this.productquatity += 1;
    }
  }
  decreament() {
    if (this.productquatity > 1) {
      this.productquatity -= 1;
    }


  }
  //add to cart 

  addtoCart(data:any) {

    if(localStorage.getItem('user')){
      this.prodetails.productquatity = this.productquatity;
     
      let user=localStorage.getItem('user');
      let userid=user&&JSON.parse(user)[0];
      this.getuserid=userid.id;
     this.prodetails.userid=this.getuserid;
      this._cartservice.addtocart(data).subscribe((result:any)=>{
      
        window.location.reload();
         
        
      })
    }    
    
  }

//




}
