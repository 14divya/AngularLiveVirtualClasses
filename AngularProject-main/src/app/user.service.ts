// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { map } from 'rxjs/operators';
// import { Observable } from 'rxjs';

// @Injectable({
//   providedIn: 'root'
// })
// export class UserService {

//   constructor(private http: HttpClient) { }
// // protected url = 'http://localhost:000';

// getUsers(): Observable<any> {
//   return this
//           .http
//             .get("https://jsonplaceholder.typicode.com/users")
//           .pipe(
//             map(res => res)
//         );
//     }
// }

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const baseUrl = 'http://localhost:8080/api/customers';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<any>{
    return this.http.get(baseUrl);
  }

  create(data: any) {
    return this.http.post(baseUrl, data);
  }

  update(id: any, data: any) {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  delete(id: any) {
    return this.http.delete(`${baseUrl}/${id}`);
  }

}