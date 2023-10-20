import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-for-user',
  templateUrl: './for-user.component.html',
  styleUrls: ['./for-user.component.css']
})
export class ForUserComponent implements OnInit{

  message:any;
  constructor(private userService:UserService){
    
  }
  ngOnInit(): void {
    this.forUser();
  }

  forUser(){
    this.userService.forUser().subscribe(
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
