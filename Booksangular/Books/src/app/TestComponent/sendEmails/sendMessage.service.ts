import { Massage } from './Model/massage'
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SendMessageService {
messages:Massage[]=[];
messagesEvent=new Subject<Massage[]>();
constructor() { }
addMassage(message:Massage){
  this.messages.push(message)
 this.messagesEvent.next(this.messages);
}
getmessage(index:number){
return this.messages[index];
}
}
