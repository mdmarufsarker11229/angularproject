import { Component, OnInit } from '@angular/core';
import { CartserviceService } from '../services/cartservice.service';
import { cart, product } from '../sellertype';
import { Router } from '@angular/router';
@Component({
  selector: 'app-cartcomponent',
  templateUrl: './cartcomponent.component.html',
  styleUrls: ['./cartcomponent.component.css']
})
export class CartcomponentComponent implements OnInit {

  removemsg:string='';
  total=0;
  discount=0;
  cartitems:any;
  constructor(private _cartservice:CartserviceService,private _route:Router){

  }
ngOnInit(): void {
   
    let userid=localStorage.getItem('user');
    let id=userid&&JSON.parse(userid)[0].id;
    this.getcartproduct(id);
}


  getcartproduct(id:any){
    this._cartservice.getcartpro(id).subscribe((result:any)=>{
      
      this.cartitems=result;
      
      console.log(result);
      this.cartitems?.forEach((item:any) => {
        this.discount +=((10*item.price)/100);
        this.total +=((item.productquatity*item.price)-this.discount);
        
      });
      
    })
  }

  deletecartpro(id:any){
    this._cartservice.delcartprobyid(id).subscribe((result:any)=>{
    
      window.location.reload();
      if(result){
        this.removemsg="Product succesfully remove from Cart"
        console.log(result);
      }
      
      setTimeout(()=>{
        this.removemsg="";
        
    },1000);
    })
  }

  //go to checkout page 
  gocheckoutpage(){
    this._route.navigate(['/checkout']);
  }



}

