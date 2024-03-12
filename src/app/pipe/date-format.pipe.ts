import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateFormat'
})
export class DateFormatPipe implements PipeTransform {

  transform(inputDate: string): string {
    const date = new Date(inputDate);
    const options:
      Intl.DateTimeFormatOptions = {
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    };
    return date.toLocaleDateString(undefined, options);
  }

}
