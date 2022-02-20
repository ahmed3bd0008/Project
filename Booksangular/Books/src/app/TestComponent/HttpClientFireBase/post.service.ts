import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject, throwError } from 'rxjs';
import { catchError, map,tap } from 'rxjs/operators';

import { Post } from './post';
@Injectable({
  providedIn: 'root'
})
export class PostService {
postEvent=new Subject<string>();

constructor(private http:HttpClient) { }

createPost(title:string,content:string){
 return this.http.post('https://angulardatabase-75e49-default-rtdb.firebaseio.com/posts.json',{title:title,content:content}).
 pipe(map((res:any)=>{
   //console.log(res.name)
  //  this.postEvent.next(res.name as string);
  //  console.log(2)
   return res.name as string;
 }),
 catchError(errorres=>{
    return throwError(errorres)
  })
 )

}
getPosts(){
 let  searchPrameter=new HttpParams();
 //send Multi prames
 searchPrameter= searchPrameter.append('isdffd2','3fsdfs');
 searchPrameter=searchPrameter.append('isffsdfsafsfd3','4fsfdfs')
 return this.http.get<{[key:string]:Post}>('https://angulardatabase-75e49-default-rtdb.firebaseio.com/posts.json',
 {
   headers:new HttpHeaders({"headerkey":"headervalue"}),
   //send MultiPrames
   params:searchPrameter
   //if single Prameter
  //params:new HttpParams().set('id','dsdasd')

 }).
  pipe(map((responseData)=>{
    let arrayData:Post[]=[];
    for (const key in responseData) {
      if (responseData.hasOwnProperty(key)) {
        arrayData.push({...responseData[key],id:key});
      }
    }
   return arrayData
  }),catchError(errorres=>{
    return throwError(errorres)
  }),
  catchError(errorres=>{
    return throwError(errorres)
  })
  )
}
deletePosts(){
  return this.http.delete<Post[]>('https://angulardatabase-75e49-default-rtdb.firebaseio.com/posts.json').pipe(
// <<<<<<< HEAD
//    tap(eventresp=>{
//      console.log(eventresp);
//    })
// =======
    map((response)=>{
      const res:Post[]=[]
      return response;
    }),catchError(errorres=>{
      return throwError(errorres)
    })

  )
}
deletePost(deleteKey:string){
  return this.http.delete<Post[]>('https://angulardatabase-75e49-default-rtdb.firebaseio.com/posts.json'+deleteKey).pipe(
    map((response)=>{
      const res:Post[]=[]
      return res;
    }),catchError(errorres=>{
      return throwError(errorres)
    })
  )
}
}
