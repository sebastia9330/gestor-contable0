import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


//componentes
import { IngresarPresupuestoComponent } from './componentes/ingresar-presupuesto/ingresar-presupuesto.component';
import { IngresosComponent } from './componentes/ingresos/ingresos.component';
import { GastosComponent } from './componentes/gastos/gastos.component';

const routes: Routes = [
  { path: '', redirectTo: '/ingresarPresupuesto', pathMatch: 'full'},
  { path: 'ingresarPresupuesto', component: IngresarPresupuestoComponent},
  { path: 'gastos', component: GastosComponent},
  { path: 'ingresos', component: IngresosComponent},
  { path: '**', redirectTo: '/ingresarPresupuesto', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
