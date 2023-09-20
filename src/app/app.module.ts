import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { RegistroComponent } from './registro/registro.component';
import { LoginComponent } from './login/login.component';
import { ComprarComponent } from './comprar/comprar.component';
import { Comprar2Component } from './comprar2/comprar2.component';
import { Comprar3Component } from './comprar3/comprar3.component';
import { ConfirmacionComponent } from './confirmacion/confirmacion.component';
import { PromocionComponent } from './promocion/promocion.component';
import { Promocion3Component } from './promocion3/promocion3.component';
import { DetalleComponent } from './detalle/detalle.component';
import { ReservaComponent } from './reserva/reserva.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    RegistroComponent,
    LoginComponent,
    ComprarComponent,
    Comprar2Component,
    Comprar3Component,
    ConfirmacionComponent,
    PromocionComponent,
    Promocion3Component,
    DetalleComponent,
    ReservaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
