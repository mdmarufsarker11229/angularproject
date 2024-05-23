import { Component, EventEmitter, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserserviceService } from '../services/userservice.service';

@Component({
  selector: 'app-userauth',
  templateUrl: './userauth.component.html',
  styleUrls: ['./userauth.component.css']
})

export class UserauthComponent implements OnInit{


signupmsg:string='';
showsignup= false;
errormsg:string='';
isloggedin=new EventEmitter(false);

  usersignupForm: FormGroup;
  userloginForm:FormGroup;
  constructor(private _fb: FormBuilder,private _userservice:UserserviceService,private _route:Router) {
    this.usersignupForm = this._fb.group({
      username: ['',Validators.required],
      email: ['',Validators.required],
      password:['',Validators.required],
    })
    this.userloginForm=this._fb.group({
      email: ['',Validators.required],
      password:['',Validators.required],
    })
  }

ngOnInit(): void {
    this.reloaduserauth();
}

//for sign up user 
  signupform(data: any) {
   this._userservice.usersignup(data).subscribe((result:any)=>{
     console.log(result);
     if(result){
       localStorage.setItem("user",JSON.stringify(result));
      
       this.signupmsg="SignUp Successfuly!";
     }
     setTimeout(() => {
      this.signupmsg="";
      this.usersignupForm.reset();
      this._route.navigate(['/home']);
     }, 1000);
   })
  }
//for user login 
loginform(data:any){
  this._userservice.userlogin(data).subscribe((result:any)=>{
    
    if(result && result.length){
      
      this.isloggedin.emit(false);
      localStorage.setItem("user",JSON.stringify(result));
      this._route.navigate(['/home']);
      window.location.reload();
    }else {
      
      this.isloggedin.emit(true);
      if(this.isloggedin){
        this.errormsg="Email or Password Invalid";
      }
      setTimeout(() => {
        this.errormsg="";
      }, 1000);
    }
      
    
  })
}

  //reload page userauth
  reloaduserauth(){
    if(localStorage.getItem("user")){
      this._route.navigate(['/home'])
    }
  }
  // sign up and login toggle link 
openlogin(){
  this.showsignup=true;
}
opensignup(){
  this.showsignup=false;
}



}

