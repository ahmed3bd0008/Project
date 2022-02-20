import { PipeTransform ,Pipe} from "@angular/core";
@Pipe({
  name:'shotline'
})
export class ShortStringpipeService implements PipeTransform {
  transform(value: string, ...args: any[]) {
    if(value.length>5){
    return  value.substring(0,5)+'..'
    }
    return value;
  }



}
