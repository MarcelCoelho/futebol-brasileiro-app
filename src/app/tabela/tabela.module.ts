import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { SharedModule } from '../shared/shared.module';
import { JogosModule } from '../jogos/jogos.module';
import { TabelaComponent } from './pages/tabela/tabela.component';
import { ClassificacaoComponent } from './components/classificacao/classificacao.component';
import { UltimosCincoComponent } from './components/ultimos-cinco/ultimos-cinco.component';





@NgModule({
  declarations: [
    ClassificacaoComponent,
    UltimosCincoComponent,
    TabelaComponent
  ],
  imports: [
    CommonModule,
    JogosModule,
    SharedModule,
    PrimeNgModule
  ],
  exports: [
    ClassificacaoComponent
  ]
})
export class TabelaModule { }
