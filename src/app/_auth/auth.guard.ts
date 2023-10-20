import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateFn, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserAuthService } from '../_services/user-auth.service';
import { UserService } from '../_services/user.service';

@Injectable(
  {
    providedIn:`root`
  }
)
export class authGuard implements CanActivate{
  constructor(private userAuth:UserAuthService,private userService:UserService,private router:Router){

  }
  canActivate(route: ActivatedRouteSnapshot,
     state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {

      if(this.userAuth.getJwtToken()!==null){
        const roles=route.data["roles"] as Array<string>;

        if(roles){
          const match=this.userService.roleMatch(roles);
          if(match){
            return true;
          }
          else{
            this.router.navigate(['/forbidden']);
            return false;
          }
        }


      }
      this.router.navigate(['/login']);
      return false;
 
    }
  
}


