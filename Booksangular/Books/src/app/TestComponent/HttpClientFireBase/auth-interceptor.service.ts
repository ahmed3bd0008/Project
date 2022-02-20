//interceptor not only for request you can use it with response
import {  HttpEventType, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { tap } from "rxjs/operators";
export class AuthInterceptorService implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    console.log("url in his way first")
    //you cant make modify in req
   // req="new req";

   //to  make cmodify in Req
   const modifyReq=req.clone({
     headers:req.headers.append('Auth-Interceptor','1234')
   });
    console.log(modifyReq)
    return next.handle(modifyReq);
  }


}
