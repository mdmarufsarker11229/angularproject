import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,  Router } from '@angular/router';
import { ProductserviceService } from '../services/productservice.service';
import { faEye,faCartShopping } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
eyeicon=faEye;
carticon=faCartShopping;

  productslider:any;
  popularproduct:any;

  constructor(private _productservice:ProductserviceService,private _route:Router){

  }

  ngOnInit(): void {
      this.showproductslider();
      this.showpopularpro();
  }

  showproductslider(){
    
    this._productservice.getproductslider().subscribe((data:any)=>{
      this.productslider=data;
     
      
    })
  }

  showpopularpro(){
    this._productservice.popularproduct().subscribe((data:any)=>{
      this.popularproduct=data;
    })
  }


  // goto showproductdetails page 
  getoprodetils(id:any){
    this._route.navigate(['/showproductdetails/',id]);
  }


}
