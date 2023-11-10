import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {

  constructor() { }

  public setRoles(roles:[]){
      localStorage.setItem('roles',JSON.stringify(roles));
  }

  public getRoles():any{
    const roles= localStorage.getItem('roles');
    console.log(roles);
    return roles==null?'false':JSON.parse(roles);

  }

  public setJwtToken(jwtToken:string)
  {
      // console.log("auth"+jwtToken)
      localStorage.setItem('jwt',jwtToken);
  }
  public getJwtToken():string{
    const token=localStorage.getItem('jwt');
    return token==null?'false':String(token);
  }

  public isLogged():boolean{
    if(this.getJwtToken()==='false')
      return false;
    return true;

  }

  public clear(){
    localStorage.clear();
  }

  public isAdmin(){
    const roles=this.getRoles();
    console.log(roles);
    if(roles==false)
      return roles;
    return roles[0].roleName==='admin';
  }

  public isUser(){
    const roles=this.getRoles();
    if(roles==false)
      return roles;
    return roles[0].roleName==='user';
  }

}
