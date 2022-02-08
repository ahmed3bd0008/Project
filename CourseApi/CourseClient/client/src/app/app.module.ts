import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { courselistcomponent } from './Courses/Course-list/course-list.component';
import { coursecomponent } from './Courses/course/course.component';
import { coursecatagorycomponent } from './Courses/coursecatagory/course-catagory.component';
import { courselevelcomponent } from './Courses/courseLevel/course-level.component';
import { courseratecomponent } from './Courses/courseRating/course-rate.component';
import { coursestatuscomponent } from './Courses/courseStatus/course-status.component';
import { coursetrackcomponent } from './Courses/courseTrack/course-track.component';
import { coursetypecomponent } from './Courses/courseType/course-type.component';
import { navcomponent } from './Nav/nav.component';

@NgModule({
  declarations: [
    AppComponent,
    navcomponent,
    courselistcomponent,
    courselevelcomponent,
    coursecatagorycomponent,
    courseratecomponent,
    coursestatuscomponent,
    coursetrackcomponent,
    coursetypecomponent,
    coursecomponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ ],
  exports:   [ AppComponent ],
  bootstrap: [AppComponent]
})
export class AppModule { }
