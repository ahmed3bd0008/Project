import { Component, Input, OnInit } from '@angular/core';
import { Massage } from '../../Model/massage';

@Component({
  selector: 'app-Message',
  templateUrl: './Message.component.html',
  styleUrls: ['./Message.component.css']
})
export class MessageComponent implements OnInit {
@Input() message!:Massage;
  constructor() { }
  ngOnInit(): void {
    console.log(this.message)
  }
}
