import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from './auth.service';
import{Authorize}from'./Authorize'
@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  isLoginModel:boolean=false;
  constructor(private authoServ:AuthService) { }

  ngOnInit() {
  }
switchModelLogien(){
  this.isLoginModel=!this.isLoginModel;
}
onSubmite(f:NgForm){
  if(this.isLoginModel){
    console.log("error")
  }
  else{
    this.authoServ.createUser(f.value.email,f.value.password).subscribe(

      (response:Authorize)=>{
          console.log(response)
          f.reset();
        },(error:any)=>{
          console.log(error)
        }
      )
    }
  }

}
