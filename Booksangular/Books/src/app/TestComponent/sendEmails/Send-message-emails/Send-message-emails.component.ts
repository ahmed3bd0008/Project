import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Massage } from '../Model/massage';

@Component({
  selector: 'app-Send-message-emails',
  templateUrl: './Send-message-emails.component.html',
  styleUrls: ['./Send-message-emails.component.css']
})
export class SendMessageEmailsComponent implements OnInit {
  sendEmail!:FormGroup;
  constructor(private activeRouter:ActivatedRoute) {
   }
message!:Massage;
emails:string[]=[];
  ngOnInit() {
     this.activeRouter.queryParams.subscribe(
      prame=>{
       this.message={massage:prame.message,subject:prame.subject}
      }

     )
     this.sendEmail=new FormGroup(
      {
          email:new FormControl(null,[Validators.required,Validators.email]),
          massage:new FormControl({value:this.message.massage,disabled:true}),
          subject:new FormControl({value:this.message.subject,disabled:true})
      })

  }
  addEmail(){
    const email:string=this.sendEmail.value.email
   const existItem=this.emails.find(d=>d==email);
  if(this.sendEmail.valid&&!existItem){
    this.emails.push(this.sendEmail.value.email);
    this.sendEmail.patchValue({email:null})
    }
  }

  deleteEmail(index :number){
    //const email:string=this.emails[index]
    this.emails.splice(index,1);
  }
  editEmail(index:number){
  let emailedit:string=this.emails[index];
  this.sendEmail.patchValue({email:emailedit})
  this.emails.splice(index,1)
  }
  onSubMite(){
    if(this.emails.length>0){
      console.log("sdfsd")
    }
  }
}
