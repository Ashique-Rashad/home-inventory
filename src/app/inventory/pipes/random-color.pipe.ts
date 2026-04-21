import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'randomColor',
  standalone: true
})
export class RandomColorPipe implements PipeTransform {

  private colors = [
    '#DBEAFE',
    '#DCFCE7',
    '#F3E8FF',
    '#FFEDD5',
    '#CCFBF1',
    '#FEF9C3',
    '#FEE2E2'
  ];

  transform(emptyValue: string): string {
    const index = Math.floor(Math.random() * this.colors.length);
    return this.colors[index];
  }

}
