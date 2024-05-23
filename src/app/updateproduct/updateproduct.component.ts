import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { product } from '../sellertype';
import { ProductserviceService } from '../services/productservice.service';

@Component({
  selector: 'app-updateproduct',
  templateUrl: './updateproduct.component.html',
  styleUrls: ['./updateproduct.component.css']
})
export class UpdateproductComponent implements OnInit {

  updateproductForm:FormGroup;
  updatepromsg:string="";
  productid:any;
  constructor(private _fb:FormBuilder,private _productservice:ProductserviceService,private _activeroute:ActivatedRoute,private _route:Router){
    this.updateproductForm=this._fb.group({
      
      name:['',Validators.required],
      price:['',Validators.required],
      color:['',Validators.required],
      category:['',Validators.required],
      description:['',Validators.required],
      image:['',Validators.required],
    })
  }
ngOnInit(): void {
    this.getproductid();
}
  updatepro(data:product){
    
   if(this.productid){
     data.id=this.productid;
   }
    this._productservice.updateproduct(data).subscribe((result:any)=>{
      if(result){
        this.updatepromsg="Product Updated succesfully"
      }
      setTimeout(() => {
        this.updatepromsg=" ";
        this.updateproductForm.reset();
        this._route.navigate(['/sellerhome'])
      }, 1000);
    })
  }
  getproductid(){
    this._productservice.getproductbyid(this._activeroute.snapshot.params['id']).subscribe((data:any)=>{
      console.log(data);
      this.productid=data.id;

      this.updateproductForm.patchValue({
       
       name:data.name,
       price:data.price,
       color:data.color,
       category:data.category,
       description:data.description,
       image:data.image,
      })
    })
  }
}
