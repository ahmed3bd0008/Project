import { Component, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Massage } from '../Model/massage';
import { SendMessageService } from '../sendMessage.service';

@Component({
  selector: 'app-List-Message',
  templateUrl: './List-Message.component.html',
  styleUrls: ['./List-Message.component.css']
})
export class ListMessageComponent implements OnInit,OnDestroy {
  messagelist:Massage[]=[];

 messageSubgection=new Subscription();
  constructor(private sendmessageServ:SendMessageService,private router:Router,private activeRout:ActivatedRoute) { }
  ngOnDestroy(): void {
    this.messageSubgection.unsubscribe();
  }
  ngOnInit() {
    this.messageSubgection=  this.sendmessageServ.messagesEvent.subscribe((mes:Massage[])=>{
      console.log(mes)
      this.messagelist=mes
    }
    )
}
openSendMessage(index:number){
 const message:Massage=  this.sendmessageServ.getmessage(index)
 if(message)
 {
    this.router.navigate(['../SendMessage'],{relativeTo:this.activeRout,
                                              queryParams:{message:message.massage,subject:message.subject},
                                              queryParamsHandling:"merge"
                                            })
 }
}
}
