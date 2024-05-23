import { Component, OnInit } from '@angular/core';
import { OrderserviceService } from '../services/orderservice.service';

@Component({
  selector: 'app-myorders',
  templateUrl: './myorders.component.html',
  styleUrls: ['./myorders.component.css']
})
export class MyordersComponent implements OnInit{


  cancelmsg:string='';
  ordereditems:any;
  constructor(private _orderservice:OrderserviceService){

  }

  ngOnInit(): void {
    let userid=localStorage.getItem('user');
    let id=userid&&JSON.parse(userid)[0].id;
      this.getorderedproduct(id);
  }
  getorderedproduct(userid:any){
    this._orderservice.getorderedpro(userid).subscribe((result:any)=>{
      if(result){
        this.ordereditems=result;
        console.log(this.ordereditems);
        
      }
      
    })
  }

  //cancel order 
  cancelorder(id:any){
    this._orderservice.cancelorderedpro(id).subscribe((result:any)=>{
      window.location.reload();
      if(result){
        this.cancelmsg="order Cancelled successfuly";
      }
      setTimeout(() => {
        this.cancelmsg="";
        
      }, 1000);
    })

  }
}
