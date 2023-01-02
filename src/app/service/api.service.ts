import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { async, map, Observable } from 'rxjs';
import { identifierName } from '@angular/compiler';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  deleteEmp(id: any) {
    throw new Error('Method not implemented.');
  }
  constructor(private http: HttpClient) { }

  url = 'http://localhost:3000/posts';
  // CALLING GET METHOD

  getdata() {
    return this.http.get(this.url).pipe(
      map((res: any) => {
        return res;
      }));
  }

  // CALLING POST METHOD
  postdata(data: any): Observable<any> {
    return this.http.post(this.url, data).pipe(
      map((res: any) => {
        return res;
      }));

     // Delete Employee

      // deleteEmployee(data:any,id: number){

      // return this.http.delete('http://localhost:3000/posts/'+id)
      // .pipe(map((res: any) => {
      //   return res;
      // }))
      // }

    // Update Employee

    // updateData(data: any, id: number){
    //   return this.http.put<any>('http://localhost:3000/posts/', +id, data)
    //     .pipe(map((res: any) => {
    //       return res;
    //     }))
    //   }

 

     
    

  }
}


