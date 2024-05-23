import { Component, EventEmitter, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { SellerserviceService } from '../sellerservice.service';
import { login, seller } from '../sellertype';

declare var $:any;

@Component({
  selector: 'app-seller-auth',
  templateUrl: './seller-auth.component.html',
  styleUrls: ['./seller-auth.component.css']
})
export class SellerAuthComponent implements OnInit {
  isloggedin=new BehaviorSubject<boolean>(false);
  signupForm: FormGroup;
  loginForm:FormGroup;
  showlogin=false;
  isloginerror=new EventEmitter<boolean>(false);
  errormsg:string="";
  constructor(private _fb: FormBuilder, private _sellerservice: SellerserviceService, private _route: Router) {
    this.signupForm = this._fb.group({
      username: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required]

    });
    //for seller login part 
    this.loginForm=this._fb.group({
      email:['',Validators.required],
      password:['',Validators.required]
      
    })
  }

  ngOnInit(): void {
    this.reloadseller();
  }
  signupsubmit(data: seller) {
    console.log(data);
    this._sellerservice.signup(data).subscribe((result: any) => {
      if (result) {
        
        localStorage.setItem("seller",JSON.stringify(result));
        this.isloggedin.next(true);
        
        this._route.navigate(['/sellerhome']);
      } else {
        this.isloggedin.next(false);
      }
    })
  }
  //for login part 
  loginsubmit(data:login){
    console.log(data);
    this._sellerservice.sellerlogin(data).subscribe((result:any)=>{
      console.log(result);
      if(result && result.length){
        
        localStorage.setItem("seller", JSON.stringify(result));
        this.isloggedin.next(true);
        
        this._route.navigate(['/sellerhome']);
        
      }else {
        this.isloggedin.next(false);
        this.isloginerror.emit(true);
        if(this.isloginerror){
          this.errormsg="Email or Password not Valid ";
         setTimeout(() => {
          this.errormsg="";
         }, 1000);
        }
      }
      
    })
  }
  //for reload seller page 
 
  reloadseller(){
    if(localStorage.getItem("seller")){
      this.isloggedin.next(true);
      this._route.navigate(['/sellerhome']);
     
    }
  }

  //toggle link for show signup 
  openlogin(){
    this.showlogin=true;
  }
  opensignup(){
    this.showlogin=false;
  }




}
