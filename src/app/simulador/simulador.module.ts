import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SimuladorComponent } from './pages/simulador/simulador.component';

@NgModule({
  declarations: [
    SimuladorComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SimuladorComponent
  ]
})
export class SimuladorModule { }
