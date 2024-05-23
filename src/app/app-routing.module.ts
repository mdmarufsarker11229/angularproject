import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartcomponentComponent } from './cartcomponent/cartcomponent.component';
import { CheckoutpageComponent } from './checkoutpage/checkoutpage.component';
import { HomeComponent } from './home/home.component';
import { MyordersComponent } from './myorders/myorders.component';
import { NotFoundpageComponent } from './not-foundpage/not-foundpage.component';
import { SearchpageComponent } from './searchpage/searchpage.component';
import { SellerAuthComponent } from './seller-auth/seller-auth.component';
import { SelleraddproductComponent } from './selleraddproduct/selleraddproduct.component';

import { SellerhomeComponent } from './sellerhome/sellerhome.component';
import { ShowproductdetailsComponent } from './showproductdetails/showproductdetails.component';
import { UpdateproductComponent } from './updateproduct/updateproduct.component';
import { UserauthComponent } from './userauth/userauth.component';
import { userguardsGuard } from './guards/userguards.guard';
import { sellerguardsGuard } from './guards/sellerguards.guard';

const routes: Routes = [
  {
    path:'',redirectTo:'/home',pathMatch:'full'
  },
  {
    path:'home',component:HomeComponent
  },
  {
    path:'seller_auth',component:SellerAuthComponent
  },
  {
    path:'sellerhome',component:SellerhomeComponent,canActivate:[sellerguardsGuard] 
  }, 
  {
    path:'selleraddproduct',component:SelleraddproductComponent,canActivate:[sellerguardsGuard] 
  }, 
  {
    path:'updateproduct/:id',component:UpdateproductComponent,canActivate: [sellerguardsGuard] 
  },
  {
    path:'searchpage/:query',component:SearchpageComponent
  },
  {
    path:'showproductdetails/:id',component:ShowproductdetailsComponent
  },
  {
    path:'userauth',component:UserauthComponent
  },
  {
    path:'cart',component:CartcomponentComponent,canActivate:[userguardsGuard]
  },
  {
    path:'checkout',component:CheckoutpageComponent,canActivate:[userguardsGuard]
  },
  {
    path:'myorder',component:MyordersComponent,canActivate:[userguardsGuard]
  },
  {
    path:'**',component:NotFoundpageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
