import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { SharedModule } from '../shared/shared.module';

import { DragDropModule } from '@angular/cdk/drag-drop';
import { FormsModule } from '@angular/forms';

import { CadastrosComponent } from './pages/cadastros/cadastro.component';
import { SortEstadioPipe } from './pipes/sort-estadio.pipe';
import { JogosPorRodadaComponent } from './components/jogos-por-rodada/jogos-por-rodada.component';
import { InfoJogoComponent } from './components/info-jogo/info-jogo.component';
import { ElencoComponent } from './components/elenco/elenco.component';
import { SubstituicaoComponent } from './components/elenco/substituicao/substituicao.component';
import { EscalacaoComponent } from './components/elenco/escalacao/escalacao.component';


@NgModule({
  declarations: [
    CadastrosComponent,
    SortEstadioPipe,
    JogosPorRodadaComponent,
    InfoJogoComponent,
    ElencoComponent,
    SubstituicaoComponent,
    EscalacaoComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    PrimeNgModule,
    DragDropModule,
    SharedModule
  ],
  exports: [
    CadastrosComponent
  ]
})
export class RodadasModule { }
