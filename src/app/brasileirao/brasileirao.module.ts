import { NgModule } from '@angular/core';
import { BrasileiraoComponent } from './pages/brasileirao/brasileirao.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [BrasileiraoComponent],
  imports: [SharedModule],
  exports: [BrasileiraoComponent]
})
export class BrasileiraoModule { }
