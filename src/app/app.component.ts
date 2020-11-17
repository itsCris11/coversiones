import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pipes';
  nombre = 'Cristian Omar';
  apellidos = 'Puentes Diaz';
  valor = 123456789;
  numDecimal = 12;  
  decimalOctal = 15;
  numeroR= 2567;
  decimalHexa= 35684;
  diaDeHoy = new Date ();
  millones = 0;
  miles = 0;
  resto = 0;
}
