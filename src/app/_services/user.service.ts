import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserAuthService } from './user-auth.service';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient : HttpClient,private userAuthService:UserAuthService ) { }

  base_url="http://localhost:9999";

  requestHeader=new HttpHeaders(
    {
      "No-Auth":"True"
    }
  );

  public loginService(loginData:any){
    // console.log("loginData"+loginData);

    return this.httpClient.post(this.base_url+"/authenticate",loginData,{headers:this.requestHeader});

  }

  public forUser(){
    return this.httpClient.get(this.base_url+"/api/user/foruser",{responseType:'text'});
  }

  public forAdmin(){
    return this.httpClient.get(this.base_url+"/api/user/foradmin",{responseType:'text'});
  }

  public roleMatch(roles:string[]):boolean{
    const userRoles:any=this.userAuthService.getRoles();
    // console.log('userRoles'+userRoles);
    let isMatch=false;
    if(userRoles!=null && userRoles){
    for(let i=0;i<userRoles.length;i++){
      for(let j=0;j<roles.length;j++){
        if(userRoles[i].roleName===roles[j]){
          isMatch=true;
          // console.log("hiiiiiiiiiiiiiiiiiiiiiiiiiii");
          break;
        }
      }
    }
  }
    // console.log('isMatch'+isMatch);
    return isMatch;

  }
}
