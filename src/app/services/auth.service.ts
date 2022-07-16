// import { HttpClient } from '@angular/common/http';
// import { Injectable } from '@angular/core';
// import { BehaviorSubject, Observable } from 'rxjs';
// import { map } from 'rxjs/operators';

// @Injectable({
//   providedIn: 'root',
// })
// export class AuthService {
//   url = 'localhost:8080/login';
//   currentUserSubject: BehaviorSubject<any>;

//   constructor(private http: HttpClient) {
//     console.log('Auth service is running');

//     // Behaviour Subjects has to be initializated, because always returns the last value
//     // Stores the state 
//     this.currentUserSubject = new BehaviorSubject<any>(
//       JSON.parse(sessionStorage.getItem('currentUser') || '{}')
//     );
//   }

//   initSession(credentials: any): Observable<any> {
//     // Pipes chain operators
//     return this.http.post(this.url, credentials).pipe(
//       map((data) => {

//         // Storage is an object, an space in local memory
//         // Stores data in the browser, there's no need to fetch data from the server every time

//         // Local Storage stores the data for unlimited time, until the user decide to clear
//         // Session Storage stores the data for the current session
//         sessionStorage.setItem('currentUser', JSON.stringify(data));
//         this.currentUserSubject.next(data);
//         return data;
//       })
//     );
//   }

//   get AuthenticatedUser() {
//     console.log('Auth service is been consumed ok');
//     return this.currentUserSubject.value;
//   }
// }
