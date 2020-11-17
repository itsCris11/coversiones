import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'decimalBinario'
})
export class DecimalBinarioPipe implements PipeTransform {
  decimal= 0;
  residuo = 0;
  con = 1;
  binario = 0;
  transform(value: number): any {
    
  this.decimal
    
  
  this.decimal = value;

  while(this.decimal / 2 !== 0)

  {
  this.residuo = Math.trunc(this.decimal % 2);
  this.binario = this.binario + this.residuo + this.con;
  this.con = this.con * 10;
  this.decimal = Math.trunc(this.decimal / 2);
  }
  return this.binario.toString();

  }
}
