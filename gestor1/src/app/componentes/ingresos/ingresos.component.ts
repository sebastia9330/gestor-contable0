import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { PresupuestoService } from 'src/app/services/presupuesto.service';

@Component({
  selector: 'app-ingresos',
  templateUrl: './ingresos.component.html',
  styleUrls: ['./ingresos.component.css']
})
export class IngresosComponent implements OnInit  {
    constructor(private _presupuestoService: PresupuestoService, private router: Router){
    
    }
    ngOnInit():  void {
      if(this._presupuestoService.presupuesto === 0){
        this.router.navigate(['./ingresarPresupuesto'])
      }
    }

}
