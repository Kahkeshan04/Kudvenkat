import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}
  
// CALLING GET METHOD
  getdata(data: any) {
    return this.http.get<any>('http://localhost:3000/posts').pipe(
      map((res: any) => {
        return res;
      })
    );
  }
  // CALLING POST METHOD
  postdata(data: any) {
    return this.http.post<any>('http://localhost:3000/posts', data).pipe(
      map((res: any) => {
        return res;
      })
    );

    // editdata(data : any,id: number){
    //   return this.http.put<any>('http://localhost:3000/posts/'+id,data).pipe(
    //     map(res:any)=>{
    //     return res;
    //   })
    // );

    // deleteEmploye(data:any,id: number){
    //   return this.http.delete<any>('http://localhost:3000/posts/' +id)
    //   .pipe(map((res:any)=>{
    //     return res;
    //   }))
  }

}


