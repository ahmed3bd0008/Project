import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
//isolation
@Component({
  selector: 'app-ViewChild',
  templateUrl: './ViewChild.component.html',
  styleUrls: ['./ViewChild.component.css']
})
export class ViewChildComponent implements AfterViewInit ,OnInit{
 @ViewChild('elemnt',{static:true}) element!:ElementRef
 @ViewChild('elemntInpur',{static:true}) elementInput!:ElementRef
 @ViewChild('BUTTONELEMENT',{static:true}) elementbUTTON!:ElementRef
//false in case ngAfterViewInit
//true in case ngOnInit
  constructor() { }
  ngOnInit(): void {
    console.log(this.element.nativeElement.innerHTML);
    console.log(this.elementInput.nativeElement.value);
    this.elementbUTTON.nativeElement.click();

  }
  ngAfterViewInit(): void {
    // console.log(this.element.nativeElement.innerHTML);
    // console.log(this.elementInput.nativeElement.value);
    // this.elementbUTTON.nativeElement.click();

  }
  OnClickButton(){
    alert("clicj")
  }
  // ngOnInit() {
  //   alert(this.element.nativeElement.value)
  // }

}
