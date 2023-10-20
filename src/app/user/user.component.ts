import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {

  constructor(private router:Router,private userService:UserService){

  }

  // public forUser(){

  //   this.router.navigate(['/home']);

  // }
}
