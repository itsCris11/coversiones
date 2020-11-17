import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RomanoPipe } from './romano.pipe';
import { DecimalOctalPipe } from './decimal-octal.pipe';
import { DecimalBinarioPipe } from './decimal-binario.pipe';
import { DecimalHexadecimalPipe } from './decimal-hexadecimal.pipe';
import { LetrasPipe } from './letras.pipe';

@NgModule({
  declarations: [
    AppComponent,
    RomanoPipe,
    DecimalOctalPipe,
    DecimalBinarioPipe,
    DecimalHexadecimalPipe,
    LetrasPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
