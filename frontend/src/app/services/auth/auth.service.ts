import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }

signup(data:any) :Observable<any>{


  return this.http.post('http://localost:3000/auth/signup', data)

}

sigin(data:any):Observable<any>{

  return  this.http.post('http://localost:3000/auth/login',
  data );
}

getProfile():Observable<any>{
  let headers ={
    'Authorization': "Bearer" + localStorage.getItem('token')
   }
   return this.http.get('http://localost:3000/auth/profile', {headers:headers})

}




}
