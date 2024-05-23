import { Component, EventEmitter, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { cart, order, product } from '../sellertype';
import { CartserviceService } from '../services/cartservice.service';
import { OrderserviceService } from '../services/orderservice.service';

@Component({
  selector: 'app-checkoutpage',
  templateUrl: './checkoutpage.component.html',
  styleUrls: ['./checkoutpage.component.css']
})
export class CheckoutpageComponent implements OnInit{


  ordermsg:string='';
  discount=0;
  totalprice=0;
  cartitems:product[]|undefined;
  shippingForm:FormGroup;
  constructor(private _fb:FormBuilder,private _cartservice:CartserviceService,private _oderservice:OrderserviceService,private _route:Router){
    this.shippingForm=this._fb.group({
      email:['',Validators.required],
      address:['',Validators.required],
      contact:['',Validators.required],
    })
  }

  ngOnInit(): void {
    let userid=localStorage.getItem('user');
    let id=userid&&JSON.parse(userid)[0].id;
    this.gecartproductprice(id);
  }
  gecartproductprice(id:any){
    
      this._cartservice.getcartpro(id).subscribe((result:any)=>{
        this.cartitems=result;
     
        console.log(this.cartitems);
        this.cartitems && this.cartitems.forEach((item:any)=>{
          this.discount +=((10*item.price)/100)
          this.totalprice +=((item.productquatity*item.price)-this.discount);
        })
        console.log(this.totalprice);
      })
  }

  submitform(data:{email:string,address:string,contact:string}){

    let userid=localStorage.getItem('user');
    let id=userid&&JSON.parse(userid)[0].id;
    let orderdata:order={
      ...data,
      totalprice:this.totalprice,
      userid:id,
      id,

    }
   
   
   

    this._oderservice.ordernow(orderdata).subscribe((result:any)=>{
     
      if(result){
        this.ordermsg="Your order has been placed";
      }
      setTimeout(()=>{
        this.ordermsg="";
        this._route.navigate(['/myorder']);
        this.cartitems?.forEach((item:any)=> {
          this._cartservice.delcartprobyid(item.id).subscribe((result:any)=>{
            if(result){
              window.location.reload();
            }
          })
        });
       
       
      },1000)
      
    })
    
  }

  



}
