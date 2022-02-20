import { AfterViewInit, Component,OnInit,ViewChild } from '@angular/core';
//for bootstrap
import { NgbSlideEvent, NgbSlideEventSource } from '@ng-bootstrap/ng-bootstrap';
import { NgbCarousel } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-ngb-carousel',
  templateUrl: './ngb-carousel.component.html',
  styleUrls: ['./ngb-carousel.component.css']
})
// ngAfterViewInit() is called after the view is initially rendered. This is why @ViewChild() depends on it.
// You can't access view members before they are rendered.
export class NgbCarouselComponent implements AfterViewInit,OnInit {

  //@ViewChild('ngcarousel', {static : true})ngCarousel !: NgbCarousel ;
  @ViewChild('ngcarousel',{static: false}) ngCarousel!: NgbCarousel;
  ngAfterViewInit(): void {
    this.stopCarousel();

  }
  hasPriv:boolean=true;
  hasNext:boolean=false;

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
      this.ngCarousel.select('1');
     //if not exist it is ok
      this.ngCarousel.pause();
    }
  }
  // Move to specific slide
  navigateToSlide(item:string) {
    this.ngCarousel.select(item);
    console.log(item)
  }

  // Move to previous slide
  getToPrev() {

  if( this.ngCarousel.activeId=='2')
  {
    this.hasPriv=true;
 }else{
  this.hasPriv=false;
  this.hasNext=false;
 }

    this.ngCarousel.prev();
  }

  // Move to next slide
  geToNext() {

    if( this.ngCarousel.activeId=='2')
  {
    this.hasNext=true;
  }
  else{
    this.hasPriv=false;
  this.hasNext=false;
  }
    this.ngCarousel.next();
  }

  // Restart carousel
  restartCarousel() {
    this.ngCarousel.cycle();
  }
}
