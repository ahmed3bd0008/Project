//interceptor order by order in providers in app-module
import {  HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { tap } from "rxjs/operators";

//second Interceptor
export class LogEnterceptorService implements HttpInterceptor{
  intercept(req: HttpRequest<any>, next: HttpHandler) {
   console.log("second intercepto")
   console.log(req)
   return next.handle(req).pipe(
     tap(
            event=>{
        console.log("second")

              console.log(event)
            }
         )
   )
  }

}
