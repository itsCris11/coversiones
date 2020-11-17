import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'letras'
})
export class LetrasPipe implements PipeTransform {
  millones = 0;
  miles = 0;
  resto = 0;
  unidad = 0;
  decena = 0;
  centena = 0;
  cantidad = '';
  transform(value: number): any {
//123456789       cociente 123    residuo   456789       
    this.millones = Math.trunc(value / 1000000);   //123
    this.miles = value % 1000000;                  //456789
    this.miles =  Math.trunc(this.miles / 1000);   //456
    this.resto = Math.trunc(value % 1000);         //789
    
    if (this.millones != null)
    {                                   //123
         this.centena = Math.trunc(this.millones / 100);     //1
         value = this.millones % 100;
         this.decena = Math.trunc(value / 10);               //2
         this.unidad =  value % 10;                          //3
         
         switch (this.centena)   {
          case 1: this.cantidad = this.cantidad + 'ciento '; break;
           case 2: this.cantidad = this.cantidad + 'doscientos '; break;
           case 3: this.cantidad = this.cantidad + 'trescientos '; break;
           case 4: this.cantidad = this.cantidad + 'cuatrocientos '; break;
           case 5: this.cantidad = this.cantidad + 'quinientos '; break;
           case 6: this.cantidad = this.cantidad + 'seiscientos '; break;
           case 7: this.cantidad = this.cantidad + 'setecientos '; break;
           case 8: this.cantidad = this.cantidad + 'ochocientos '; break;
           case 9: this.cantidad = this.cantidad + 'novecientos '; break;
        }
         switch (this.decena)   {
          case 1: this.cantidad = this.cantidad + 'dieci '; break;
           case 2: this.cantidad = this.cantidad + 'veinti '; break;
           case 3: this.cantidad = this.cantidad + 'treinta '; break;
           case 4: this.cantidad = this.cantidad + 'cuarenta '; break;
           case 5: this.cantidad = this.cantidad + 'cincuenta '; break;
           case 6: this.cantidad = this.cantidad + 'sesenta '; break;
           case 7: this.cantidad = this.cantidad + 'setenta '; break;
           case 8: this.cantidad = this.cantidad + 'ochenta '; break;
           case 9: this.cantidad = this.cantidad + 'noventa '; break;
        }
         switch (this.unidad)   {
           case 1: this.cantidad = this.cantidad + 'uno'; break;
           case 2: this.cantidad = this.cantidad + 'dos'; break;
           case 3: this.cantidad = this.cantidad + 'tres'; break;
           case 4: this.cantidad = this.cantidad + 'cuatro'; break;
           case 5: this.cantidad = this.cantidad + 'cinco'; break;
           case 6: this.cantidad = this.cantidad + 'seis'; break;
           case 7: this.cantidad = this.cantidad + 'siete'; break;
           case 8: this.cantidad = this.cantidad + 'ocho'; break;
           case 9: this.cantidad = this.cantidad + 'nueve'; break;
         }
         this.cantidad = this.cantidad + ' millones ';
    }

    if (this.miles != null)
    {                          //456
         this.centena = Math.trunc(this.miles / 100);    //4
         value = this.miles % 100; 
         this.decena = Math.trunc(value / 10);           //5
         this.unidad =  value % 10;                      //6
         
         switch (this.centena)   {
          case 1: this.cantidad = this.cantidad + 'ciento '; break;
           case 2: this.cantidad = this.cantidad + 'doscientos '; break;
           case 3: this.cantidad = this.cantidad + 'trescientos '; break;
           case 4: this.cantidad = this.cantidad + 'cuatrocientos '; break;
           case 5: this.cantidad = this.cantidad + 'quinientos '; break;
           case 6: this.cantidad = this.cantidad + 'seiscientos '; break;
           case 7: this.cantidad = this.cantidad + 'setecientos '; break;
           case 8: this.cantidad = this.cantidad + 'ochocientos '; break;
           case 9: this.cantidad = this.cantidad + 'novecientos '; break;
        }
         switch (this.decena)   {
          case 1: this.cantidad = this.cantidad + 'dieci'; break;
           case 2: this.cantidad = this.cantidad + 'veinti'; break;
           case 3: this.cantidad = this.cantidad + 'treinta'; break;
           case 4: this.cantidad = this.cantidad + 'cuarenta'; break;
           case 5: this.cantidad = this.cantidad + 'cincuenta'; break;
           case 6: this.cantidad = this.cantidad + 'sesenta'; break;
           case 7: this.cantidad = this.cantidad + 'setenta'; break;
           case 8: this.cantidad = this.cantidad + 'ochenta'; break;
           case 9: this.cantidad = this.cantidad + 'noventa'; break;
        }
         switch (this.unidad)   {
           case 1: this.cantidad = this.cantidad + 'uno'; break;
           case 2: this.cantidad = this.cantidad + 'dos'; break;
           case 3: this.cantidad = this.cantidad + 'tres'; break;
           case 4: this.cantidad = this.cantidad + 'cuatro'; break;
           case 5: this.cantidad = this.cantidad + 'cinco'; break;
           case 6: this.cantidad = this.cantidad + 'seis'; break;
           case 7: this.cantidad = this.cantidad + 'siete'; break;
           case 8: this.cantidad = this.cantidad + 'ocho'; break;
           case 9: this.cantidad = this.cantidad + 'nueve'; break;
         }
         this.cantidad = this.cantidad + ' millones ';
    }

    if (this.resto != null)
    {                                                        //789
         this.centena = Math.trunc(this.resto / 100);        //7
         value = this.resto % 100;   
         this.decena = Math.trunc(value / 10);               //8
         this.unidad =  value % 10;                          //9
         
         switch (this.centena)   {
          case 1: this.cantidad = this.cantidad + 'ciento '; break;
           case 2: this.cantidad = this.cantidad + 'doscientos '; break;
           case 3: this.cantidad = this.cantidad + 'trescientos '; break;
           case 4: this.cantidad = this.cantidad + 'cuatrocientos '; break;
           case 5: this.cantidad = this.cantidad + 'quinientos '; break;
           case 6: this.cantidad = this.cantidad + 'seiscientos '; break;
           case 7: this.cantidad = this.cantidad + 'setecientos '; break;
           case 8: this.cantidad = this.cantidad + 'ochocientos '; break;
           case 9: this.cantidad = this.cantidad + 'novecientos '; break;
        }
         switch (this.decena)   {
          case 1: this.cantidad = this.cantidad + 'dieci'; break;
           case 2: this.cantidad = this.cantidad + 'veinti'; break;
           case 3: this.cantidad = this.cantidad + 'treinta'; break;
           case 4: this.cantidad = this.cantidad + 'cuarenta'; break;
           case 5: this.cantidad = this.cantidad + 'cincuenta'; break;
           case 6: this.cantidad = this.cantidad + 'sesenta'; break;
           case 7: this.cantidad = this.cantidad + 'setenta'; break;
           case 8: this.cantidad = this.cantidad + 'ochenta'; break;
           case 9: this.cantidad = this.cantidad + 'noventa'; break;
        }
         switch (this.unidad)   {
           case 1: this.cantidad = this.cantidad + 'uno'; break;
           case 2: this.cantidad = this.cantidad + 'dos'; break;
           case 3: this.cantidad = this.cantidad + 'tres'; break;
           case 4: this.cantidad = this.cantidad + 'cuatro'; break;
           case 5: this.cantidad = this.cantidad + 'cinco'; break;
           case 6: this.cantidad = this.cantidad + 'seis'; break;
           case 7: this.cantidad = this.cantidad + 'siete'; break;
           case 8: this.cantidad = this.cantidad + 'ocho'; break;
           case 9: this.cantidad = this.cantidad + 'nueve'; break;
         }
         this.cantidad = this.cantidad + ' pesos ';
    }


    return this.cantidad;
  }

}


