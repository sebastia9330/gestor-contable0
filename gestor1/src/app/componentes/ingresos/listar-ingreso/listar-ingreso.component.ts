import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { PresupuestoService } from 'src/app/services/presupuesto.service';

@Component({
  selector: 'app-listar-ingreso',
  templateUrl: './listar-ingreso.component.html',
  styleUrls: ['./listar-ingreso.component.css']
})
export class ListarIngresoComponent implements OnInit, OnDestroy{
  subscription: Subscription;
  presupuesto: number;
  restante: number;
  listaIngreso: any [] = []
  constructor(private _presupuestoService: PresupuestoService){
    this.presupuesto = 0;
    this.restante = 0;
    this.subscription = this._presupuestoService.getIngresos().subscribe(data =>{
      this.restante = this.restante + data.cantidad;
      this.listaIngreso.push(data);
    })
  }
  ngOnInit(): void {
    this.presupuesto = this._presupuestoService.presupuesto;
    this.restante = this._presupuestoService.restante;   
  }
  ngOnDestroy(): void {
      this.subscription.unsubscribe();
  }
}
