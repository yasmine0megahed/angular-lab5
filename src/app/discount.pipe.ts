import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'discount',
  standalone: true
})
export class DiscountPipe implements PipeTransform {

  transform(value: number,arg1:number): string {
   const arg=arg1/100;
    return `price: $${value} after-discount: $${(value -value *arg ).toFixed(2)}`;
  }

}
