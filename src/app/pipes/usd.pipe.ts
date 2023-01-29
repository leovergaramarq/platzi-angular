import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'usd'
})
export class UsdPipe implements PipeTransform {

  transform(value: number): string {
    return '$' + value.toFixed(2);
  }

}
