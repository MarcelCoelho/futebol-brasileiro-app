import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PartidasComponent } from './pages/partidas/partidas.component';
import { CalendarioJogosComponent } from './components/calendario-jogos/calendario-jogos.component';
import { CalendarioJogosClubeComponent } from './components/calendario-jogos-clube/calendario-jogos-clube.component';
import { EscalacaoComponent } from './components/escalacao/escalacao.component';
import { JogadorComponent } from './components/escalacao/jogador/jogador.component';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    PartidasComponent,
    CalendarioJogosComponent,
    CalendarioJogosClubeComponent,
    EscalacaoComponent,
    JogadorComponent
  ],
  imports: [
    CommonModule,
    PrimeNgModule,
    SharedModule,
  ],
  exports: [
    PartidasComponent,
    CalendarioJogosComponent,
    EscalacaoComponent
  ]
})
export class JogosModule { }
