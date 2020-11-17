import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'decimalHexadecimal'
})
export class DecimalHexadecimalPipe implements PipeTransform {
  decimal= 0;
  residuo = 0;
  con = 1;
  hexadecimal = 0;
  transform(value: number): any {
    
  this.decimal
    
  
  this.decimal = value;

  while(this.decimal / 16 !== 0)

  {
  this.residuo = Math.trunc(this.decimal % 16);
  this.hexadecimal = this.hexadecimal + this.residuo + this.con;
  this.con = this.con * 10;
  this.decimal = Math.trunc(this.decimal / 16);
  }
  return this.hexadecimal.toString(16);

  }
}