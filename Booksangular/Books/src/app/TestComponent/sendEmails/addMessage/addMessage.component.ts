import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Massage } from '../Model/massage';
import { SendMessageService } from '../sendMessage.service';
@Component({
  selector: 'app-addMessage',
  templateUrl: './addMessage.component.html',
  styleUrls: ['./addMessage.component.css']
})
export class AddMessageComponent implements OnInit {
  addMessage!:FormGroup;
  constructor(private sendmessageserv:SendMessageService,private router:Router,private activeRouter:ActivatedRoute) { }
  ngOnInit() {
    this.addMessage=new FormGroup({
       subject:new FormControl(null,[Validators.required]),
       message:new FormControl(null,[Validators.required])
    })
  }
  onSubmite(){
  if(this.addMessage.valid){
    const message:Massage={massage:this.addMessage.value.message,subject:this.addMessage.value.subject}
    this.sendmessageserv.addMassage(message)
    //rolod page
   //this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    //this.router.onSameUrlNavigation = 'reload';
    this.router.navigate(['/sendemail']);
  }
  }
}
