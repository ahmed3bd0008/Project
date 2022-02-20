import { Component, OnInit } from '@angular/core';
import { Serviemodel } from './Serviemodel';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.css']
})
export class PipeComponent implements OnInit {
 pipeArray:Serviemodel[]=[]
  constructor() { }
  gender: string = 'male';
  inviteMap: any = {'male': 'Invite him.', 'female': 'Invite her.', 'other': 'Invite them.'};
  ngOnInit() {
    this.pipeArray=[
      {name:"sql",type:"medime",date:new Date(1,11,2021)},
      {name:"dataBase",type:"medime",date:new Date(1,11,2021)},
      {name:"asp Core",type:"medime",date:new Date(1,11,2021)},
      {name:"angular",type:"medime",date:new Date(1,11,2021)},
      {name:"asmaa",type:"medime",date:new Date(1,11,2021)},
      {name:"ahmed",type:"medime",date:new Date(1,11,2021)},
    ];
  }

}
