import { Component, OnInit } from '@angular/core';
import { PresupuestoService } from 'src/app/services/presupuesto.service';

@Component({
  selector: 'app-ingresar-ingreso',
  templateUrl: './ingresar-ingreso.component.html',
  styleUrls: ['./ingresar-ingreso.component.css']
})
export class IngresarIngresoComponent implements OnInit {
  nombreIngreso: String;
  cantidad: number;
  formularioIncorrecto: boolean;
  textIncorrecto: string;  
  constructor(private _presupuestoService: PresupuestoService){
    this.nombreIngreso = '';
    this.cantidad = 0;
    this.formularioIncorrecto = false;
    this.textIncorrecto= '';
    }
    ngOnInit(): void {
        
    }
    agregarIngreso(){
      if(this.nombreIngreso === '' || this.cantidad <= 0){
        this.formularioIncorrecto = true;
        this.textIncorrecto= 'Nombre Ingreso o cantidad incorrecta';
      }else{
        //creacion de objeto
        const INGRESO = {
          nombre: this.nombreIngreso,
          cantidad: this.cantidad,
        }
        //evio del objeto via sunbjet
        this._presupuestoService.agregarGasto(INGRESO);
        this.formularioIncorrecto = false;
        this.nombreIngreso = '';
        this.cantidad = 0;
      }
    }
}
