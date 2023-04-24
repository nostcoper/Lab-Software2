import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { setupTestingRouter } from '@angular/router/testing';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PermissionDashboardGuard implements CanActivate {
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.hasUser()){
      return true
    };
    
    return confirm('hola')
  }
  
  hasUser(){
    return false
  }
}
