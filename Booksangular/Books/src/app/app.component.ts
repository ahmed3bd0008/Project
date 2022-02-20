import { AfterViewInit, Component,OnInit,ViewChild } from '@angular/core';
//for bootstrap
import { NgbSlideEvent, NgbSlideEventSource } from '@ng-bootstrap/ng-bootstrap';
import { NgbCarousel } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
// ngAfterViewInit() is called after the view is initially rendered. This is why @ViewChild() depends on it.
// You can't access view members before they are rendered.
export class AppComponent implements AfterViewInit,OnInit {

  //@ViewChild('ngcarousel', {static : true})ngCarousel !: NgbCarousel ;
  @ViewChild('ngcarousel',{static: false}) ngCarousel!: NgbCarousel;
  ngAfterViewInit(): void {
    this.stopCarousel();
  }
  ngOnInit(): void {

  }

  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
  //@ViewChild('carousel', {static : true}) carousel: NgbCarousel;
  title = 'Books';
  slideActivate(ngbSlideEvent: NgbSlideEvent) {
    ngbSlideEvent.paused=true;
    console.log(ngbSlideEvent.source);
    console.log(ngbSlideEvent.paused);
    console.log(NgbSlideEventSource.INDICATOR);
    console.log(NgbSlideEventSource.ARROW_LEFT);
    console.log(NgbSlideEventSource.ARROW_RIGHT);
  }
  stopCarousel() {

    if(this.ngCarousel)
    {
      this.ngCarousel.pause();
    }

  }
}
