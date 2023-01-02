import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}
  
   url='http://localhost:3000/posts';
// CALLING GET METHOD

  getdata( ):Observable<any> {
    return this.http.get(this.url).pipe(
      map((res: any) => {
        return res;
      })
    );
  }
  // CALLING POST METHOD
  postdata(data: any):Observable<any> {
    return this.http.post('http://localhost:3000/posts', data).pipe(
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


