import { Component,OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { UserService } from '../_services/user.service';
import { UserAuthService } from '../_services/user-auth.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private userService:UserService,private userAuth:UserAuthService
    ,private route:Router){

  }
  ngOnInit(): void {
  }

  login(loginForm:NgForm){
    console.log("Form is Submitted");
    // console.log(loginForm.value);
    this.userService.loginService(loginForm.value).subscribe(
      (response:any)=>{
        // console.log(response.jwtToken)
        // console.log(response.user.roles);
        this.userAuth.setJwtToken(response.jwtToken);
        this.userAuth.setRoles(response.user.roles);
        // console.log(response);
        const role=response.user.roles[0].roleName;
        if(role==='admin'){
          console.log("**************************************************")
          this.route.navigate(['/admin']);
        }
        else{
          this.route.navigate(['/user']);
        }


      },
      (error)=>{
        console.log(error);
      }

    );
    }

}
