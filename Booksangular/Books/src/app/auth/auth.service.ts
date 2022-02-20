import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Authorize } from './Authorize';

interface AuthorizeModel{

}
@Injectable({
  providedIn: 'root'
})

export class AuthService {

constructor(private http:HttpClient) { }

createUser(email:string,password:string){
  return this.http.post<Authorize>
  ('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDX4Xucd0rgaXL350RLOBn-FWLHc3t_DoU',
  {
    email:email,
    password:password,
    returnSecureToken:true
  })
}
}
