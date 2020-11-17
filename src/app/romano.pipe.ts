import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'romano'
})
export class RomanoPipe implements PipeTransform {
  unidades = 0;
  decenas = 0;
  centenas = 0;
  miles = 0;
  resto = 0;
  romano = '';
  //2 7 4 3    MM  DCC  XL   III
  transform(value: number): string {
     
    this.miles = Math.trunc(value / 1000);    //2
    this.resto =  Math.trunc(value % 1000);   //743   
 
    switch (this.miles)
    {
      case 1: this.romano = this.romano + 'M'; break;
      case 2: this.romano = this.romano + 'MM'; break;
      case 3: this.romano = this.romano + 'MMM'; break;
    }       
 
    this.centenas = Math.trunc(this.resto / 100);   //7
    this.resto = Math.trunc(this.resto % 100);      //43

    switch (this.centenas)
    {
      case 1: this.romano = this.romano + 'C'; break;       case 2: this.romano = this.romano + 'CC'; break;
      case 3: this.romano = this.romano + 'CCC'; break;       case 4: this.romano = this.romano + 'CD'; break;
      case 5: this.romano = this.romano + 'D'; break;       case 6: this.romano = this.romano + 'DC'; break;
      case 7: this.romano = this.romano + 'DCC'; break;       case 8: this.romano = this.romano + 'DCCC'; break;
      case 9: this.romano = this.romano + 'CM'; break;
    }
 
    this.decenas = Math.trunc(this.resto / 10);   //4
    this.resto = Math.trunc(this.resto % 10);     //3
    
    switch (this.decenas)
    {
      case 1: this.romano = this.romano + 'X'; break;
      case 2: this.romano = this.romano + 'XX'; break;
      case 3: this.romano = this.romano + 'XXX'; break;
      case 4: this.romano = this.romano + 'XL'; break;
      case 5: this.romano = this.romano + 'L'; break;
      case 6: this.romano = this.romano + 'LX'; break;
      case 7: this.romano = this.romano + 'LXX'; break;
      case 8: this.romano = this.romano + 'LXXX'; break;
      case 9: this.romano = this.romano + 'XC'; break;
    }
    switch (this.resto)   //3
    {
      case 1: this.romano = this.romano + 'I'; break;
      case 2: this.romano = this.romano + 'II'; break;
      case 3: this.romano = this.romano + 'III'; break;
      case 4: this.romano = this.romano + 'IV'; break;
      case 5: this.romano = this.romano + 'V'; break;
      case 6: this.romano = this.romano + 'VI'; break;
      case 7: this.romano = this.romano + 'VII'; break;
      case 8: this.romano = this.romano + 'VIII'; break;
      case 9: this.romano = this.romano + 'IX'; break;
    }
    return this.romano;
  }
}

