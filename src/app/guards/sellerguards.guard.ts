import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const sellerguardsGuard: CanActivateFn = (route, state) => {
  const _route=inject(Router)
  let isloggedin=localStorage.getItem('seller');
  if(isloggedin){
    return true;
  }else {
    _route.navigate(['/seller_auth']);
    return false;
  }
  return true;
};


