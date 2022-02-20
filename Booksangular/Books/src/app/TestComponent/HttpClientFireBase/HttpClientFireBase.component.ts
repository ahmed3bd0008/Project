import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import{map}from'rxjs/operators'
import { Post } from './post';
import { PostService } from './post.service';
@Component({
  selector: 'app-HttpClientFireBase',
  templateUrl: './HttpClientFireBase.component.html',
  styleUrls: ['./HttpClientFireBase.component.css']
})
export class HttpClientFireBaseComponent implements OnInit,OnDestroy {
  posts:Post[]=[];
  isFetched:boolean=false;
  eventSubs!:Subscription;
  constructor(private http:HttpClient,private postService:PostService) { }
  ngOnDestroy(): void {
    this.eventSubs.unsubscribe();
  }
 // https://angulardatabase-75e49-default-rtdb.firebaseio.com/
  ngOnInit() {
    this.fetchData()
  }
  onSubmite(f:NgForm){
    let post!:Post;
    let key !:string
    this.postService.createPost(f.value.title,f.value.content).subscribe(((respnse:string)=>{
      //console.log(respnse)
      post={title:f.value.title,content:f.value.content,id:respnse}
      this.posts.push(post);
      // this.eventSubs= this.postService.postEvent.subscribe((r:string)=>{
      //   key=r;
      //   console.log(key)
      //   post={title:f.value.title,content:f.value.content,id:key}
      //   console.log(post)
      //   this.posts.push(post);
      //   this.eventSubs.unsubscribe();
      // });
    }))



  }
  fetchData(){
   this.postService.getPosts().subscribe((Response:Post[])=>{
     this.posts=Response;
   },error=>{
    console.log(error.error+"vxcvx")
  })

  }
  private fetchAllData(){
    this.isFetched=true;
    this.http.get<{[key:string]:Post}>('https://angulardatabase-75e49-default-rtdb.firebaseio.com/posts.json').
    pipe(map((responseData)=>{
      let arrayData:Post[]=[];
      for (const key in responseData) {
        if (responseData.hasOwnProperty(key)) {
          arrayData.push({...responseData[key],id:key});
        }
      }
      return arrayData
    })).
    subscribe((response=>{
     this.posts=response;
     this.isFetched=false;
      console.log(response)
    }),error=>{
      console.log(error)
    })
  }
  clearPost(){
    this.postService.deletePosts().subscribe((response:Post[])=>{
        this.posts=response;
    },error=>{
      console.log(error)
    })
  }
  deletePost(key:string){
    this.postService.deletePost(key).subscribe((response:Post[])=>{
      console.log(response)
        this.posts.splice(0,this.posts.length);
    })
  }
  UnsubscribeFun(){
    this.eventSubs.unsubscribe();
  }
}
