import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GastosComponent } from './componentes/gastos/gastos.component';
import { IngresosComponent } from './componentes/ingresos/ingresos.component';
import { IngresarPresupuestoComponent } from './componentes/ingresar-presupuesto/ingresar-presupuesto.component';
import { IngresarGastoComponent } from './componentes/gastos/ingresar-gasto/ingresar-gasto.component';
import { ListarGastoComponent } from './componentes/gastos/listar-gasto/listar-gasto.component';
import { IngresarIngresoComponent } from './componentes/ingresos/ingresar-ingreso/ingresar-ingreso.component';
import { ListarIngresoComponent } from './componentes/ingresos/listar-ingreso/listar-ingreso.component';

@NgModule({
  declarations: [
    AppComponent,
    GastosComponent,
    IngresosComponent,
    IngresarPresupuestoComponent,
    IngresarGastoComponent,
    ListarGastoComponent,
    IngresarIngresoComponent,
    ListarIngresoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
