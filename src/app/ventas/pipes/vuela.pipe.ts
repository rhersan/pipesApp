import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'vuela'
})
export class VuelaPipe implements PipeTransform {

  transform(value: boolean, status: boolean = true ) {
    if(status){
    return (value) ? 'vuela' : 'no vuela';
    }
    
    return value;

  }

}
