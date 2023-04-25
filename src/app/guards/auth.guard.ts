import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private authService: UserService) { }
  canActivate() {
      if ( this.authService.isLoggedIn() ) {
          return true;
      }
      this.router.navigate(['']);
      return false;
  }
}
