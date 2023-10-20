import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-for-admin',
  templateUrl: './for-admin.component.html',
  styleUrls: ['./for-admin.component.css']
})
export class ForAdminComponent implements OnInit {

  message:any;
  constructor(private userService:UserService){
    
  }
  ngOnInit(): void {
    this.forAdmin();
  }

  forAdmin(){
    this.userService.forAdmin().subscribe(
      (response)=>{
        console.log(response);
        this.message=response
      },
      (error)=>{
        console.log(error);
      }
      )
    
  }


}
