import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms'; 

import * as $ from 'jquery';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { SellerAuthComponent } from './seller-auth/seller-auth.component';
import { NotFoundpageComponent } from './not-foundpage/not-foundpage.component';
import { SellerserviceService } from './sellerservice.service';

import { SellerhomeComponent } from './sellerhome/sellerhome.component';
import { SelleraddproductComponent } from './selleraddproduct/selleraddproduct.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { UpdateproductComponent } from './updateproduct/updateproduct.component';
import { FilterproductpipePipe } from './pipes/filterproductpipe.pipe';

import { SearchpageComponent } from './searchpage/searchpage.component';
import { ShowproductdetailsComponent } from './showproductdetails/showproductdetails.component';
import { UserauthComponent } from './userauth/userauth.component';
import { CartcomponentComponent } from './cartcomponent/cartcomponent.component';
import { CheckoutpageComponent } from './checkoutpage/checkoutpage.component';
import { MyordersComponent } from './myorders/myorders.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    SellerAuthComponent,
    NotFoundpageComponent,

    SellerhomeComponent,
     SelleraddproductComponent,
     UpdateproductComponent,
     FilterproductpipePipe,
   
     SearchpageComponent,
         ShowproductdetailsComponent,
         UserauthComponent,
         CartcomponentComponent,
         CheckoutpageComponent,
         MyordersComponent,
        
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FontAwesomeModule,
    FormsModule,
  
  ],
  providers: [SellerserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
