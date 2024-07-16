import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { AppUser } from './model/user.modele';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {
users :AppUser[]=[];
authentificatedUser: AppUser | undefined;
  constructor() {
    this.users.push({username:"user",password:"1234",roles:["USER"]})
    this.users.push({username:"Admin",password:"1234",roles:["USER","ADMIN"]})
  }

public login(username:string,password:string):Observable<AppUser>{
  let appUser= this.users.find(u=>u.username==username);
  if(!appUser) return throwError(()=>new Error("Incorrect  name"));
  if(appUser.password!=password){
    return throwError(()=>new Error("Incorrect password"));
  }
  return of(appUser);
}

public authentificateUser(appUser:AppUser):Observable<boolean>{
this.authentificatedUser= appUser;
localStorage.setItem("authUser", JSON.stringify({username: appUser.username,  roles:appUser.roles, jwt:"JWT_TOKEN"}));
return of(true);
}

public hasRole(roles:string): boolean{
  return this.authentificatedUser!.roles.includes(roles)
}

public isAuthentificated(){
  return this.authentificatedUser!=undefined;
}

public logout():Observable<boolean>{
  this.authentificatedUser=undefined;
  localStorage.removeItem("authUser");
  return of(true);
}

}


