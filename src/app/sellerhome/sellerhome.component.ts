import { isNgTemplate } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons';
import { SellerserviceService } from '../sellerservice.service';
import { product } from '../sellertype';
import { ProductserviceService } from '../services/productservice.service';

@Component({
  selector: 'app-sellerhome',
  templateUrl: './sellerhome.component.html',
  styleUrls: ['./sellerhome.component.css']
})
export class SellerhomeComponent implements OnInit{
  products:undefined | product[];
  deletemsg:string="";
  deleteicon=faTrash;
  editicon=faPenToSquare;
  constructor(private _peroductservice:ProductserviceService,private _route:Router){

  }

  ngOnInit(): void {
      this.productshow();
  }
  //for show product 
  productshow(){
    this._peroductservice.productshow().subscribe((data:any)=>{
      this.products=data;
    })
  }
  // for product delete 
  deletepro(id:number){
    this._peroductservice.prodelete(id).subscribe((data:any)=>{
      this.productshow();
      if(data){
        this.deletemsg="Product deleted succesfully";
      }
      setTimeout(() => {
        this.deletemsg=" ";
      }, 1000);
    })
  }
  //for view product edit  

  gotoupdatepro(id:any){
    this._route.navigate(['/updateproduct/',id]);
    
  }
}
