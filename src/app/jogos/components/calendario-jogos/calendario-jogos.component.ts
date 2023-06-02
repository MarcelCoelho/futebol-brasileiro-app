import { Component } from '@angular/core';
import { IJogo, IRodada } from 'src/app/shared/interfaces/brasileirao/brasileirao.interface';
import { jogoEmAndamento } from 'src/app/shared/utilidades/classificacao';
import { getRodadas } from 'src/app/shared/utilidades/rodadas';
import { getDiaSemana } from 'src/app/shared/utilidades/util';

@Component({
  selector: 'app-calendario-jogos',
  templateUrl: './calendario-jogos.component.html',
  styleUrls: ['./calendario-jogos.component.css']
})
export class CalendarioJogosComponent {

  rodadas: IRodada[] = [];
  rodada!: IRodada;

  constructor() {
    this.rodadas = getRodadas();
    this.rodada = this.rodadas.filter(rodada => !rodada.finalizada)[0];

    this.rodada.jogos.map(jogo => {
      this.getJogoEmAndamentoLocal(jogo);
    })
  }

  proximaRodada = (numero: number) => {
    if (numero < 20)
      this.rodada = this.rodadas.filter(rodada => rodada.numero === numero + 1)[0];
  }

  rodadaAnterior = (numero: number) => {
    if (numero > 1)
      this.rodada = this.rodadas.filter(rodada => rodada.numero === numero - 1)[0];
  }

  getJogoEmAndamentoLocal = (jogo: IJogo): boolean => {
    return jogoEmAndamento(jogo);
  }

  getDiaSemanaLocal = (dataJogo: Date) => {
    return getDiaSemana(dataJogo);
  }


}
