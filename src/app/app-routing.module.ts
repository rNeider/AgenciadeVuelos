import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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

const routes: Routes = [
  {path:'',component:InicioComponent},
  {path:'incio',component:InicioComponent},
  {path:'registro',component:RegistroComponent},
  {path:'login',component:LoginComponent},
  {path:'comprar',component:ComprarComponent},
  {path:'comprar2',component:Comprar2Component},
  {path:'comprar3',component:Comprar3Component},
  {path:'confirmacion',component:ConfirmacionComponent},
  {path:'promocion',component:PromocionComponent},
  {path:'promocion3',component:Promocion3Component},
  {path:'detalle',component:DetalleComponent},
  {path:'reserva',component:ReservaComponent}
  
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
