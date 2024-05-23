import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SellerserviceService } from '../sellerservice.service';
import { ProductserviceService } from '../services/productservice.service';

@Component({
  selector: 'app-selleraddproduct',
  templateUrl: './selleraddproduct.component.html',
  styleUrls: ['./selleraddproduct.component.css']
})
export class SelleraddproductComponent {

  addproductForm:FormGroup;
  addpromsg:string='';
  constructor(private _fb:FormBuilder,private _peroductservice:ProductserviceService,){
    this.addproductForm=this._fb.group({
      name:['',Validators.required],
      price:['',Validators.required],
      color:['',Validators.required],
      category:['',Validators.required],
      description:['',Validators.required],
      image:['',Validators.required]
    })
  }
//for add product 
  addproduct(data:any){
    console.log(data);
    this._peroductservice.addproduct(data).subscribe((result:any)=>{
      if(result){
        this.addpromsg="Product Seccesfuly Added "
      }
      setTimeout(() => {
        this.addpromsg=" ";
        this.addproductForm.reset();
      }, 1000);
    })
  }
  
}
