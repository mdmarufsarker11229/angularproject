import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const userguardsGuard: CanActivateFn = (route, state) => {

const _route=inject(Router)
  let isloggedin=localStorage.getItem('user');
  if(isloggedin){
    return true;
  }else {
    _route.navigate(['/userauth']);
    return false;
  }
  return true;
};
