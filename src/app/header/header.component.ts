import { Component } from '@angular/core';
import { UserAuthService } from '../_services/user-auth.service';
import { Router } from '@angular/router';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(private userAuth:UserAuthService,private router:Router,private userService:UserService){


  }

  isLogged():boolean{
    // console.log("isLogged return  "+this.userAuth.isLogged())
    return  this.userAuth.isLogged();
  }
  public logout() {
    this.userAuth.clear();
    this.router.navigate(['/']);
  }

  public isRole(roles:string[]):boolean{
      return this.userService.roleMatch(roles);
  }

  public isAdmin(){
    return this.userAuth.isAdmin();
  }




}
