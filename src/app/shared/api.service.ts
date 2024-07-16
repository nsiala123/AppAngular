import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { map } from 'rxjs/operators';
import { connectionModel } from '../add-connection/add-dash board.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

public host:string="http://localhost:3000";

  constructor(private http:HttpClient) { }

postEmploye(data:any){
  return this.http.post<any>(this.host+"/posts",data)
  .pipe(map((res:any)=>{
    return res;
  }))
}
getEmployee(){
  return this.http.get<connectionModel[]>("http://localhost:3000/posts")
  .pipe(map((res:any)=>{
    return res;
  }))
}
updateEmployee(data:any,id:number){
  return this.http.get<any>("http://localhost:3000/posts"+id,data)
  .pipe(map((res:any)=>{
    return res;
  }))
}
deleteEmployee(id:number){
  return this.http.delete<any>("http://localhost:3000/posts/"+id)
  .pipe(map((res:any)=>{
    return res;
  }))
}




}
