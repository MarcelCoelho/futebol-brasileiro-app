import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { BrasileiraoService } from 'src/app/services/brasileirao.service';
import { IClassificacao, IClube, IJogo, IRodada } from 'src/app/shared/interfaces/brasileirao/brasileirao.interface';
import { getClassificacao, getClassificar, jogoEmAndamento } from 'src/app/shared/utilidades/classificacao';
import { getJogos } from 'src/app/shared/utilidades/rodadas';
import { getDiaSemanaCompleto } from 'src/app/shared/utilidades/util';

interface IJogoClube {
  clube: IClube;
  jogos: IJogo[];
  classificacao: IClassificacao;
  localProximoJogo: string;
}

@Component({
  selector: 'app-calendario-jogos-clube',
  templateUrl: './calendario-jogos-clube.component.html',
  styleUrls: ['./calendario-jogos-clube.component.css']
})
export class CalendarioJogosClubeComponent implements OnInit, OnChanges {

  @Input() rodadas: IRodada[] = [];

  @Input() clubes: IClube[] = [];

  classificacao: IClassificacao[] = [];
  classificacaoClube!: IClassificacao;
  jogosClubes: IJogoClube[] = [];

  selectedAccordion: boolean = false;

  loadingActivate: boolean = false;

  constructor(private brasileiraoService: BrasileiraoService) { }

  ngOnChanges(changes: SimpleChanges) {

    this.jogosClubes = [];

    this.clubes.map(clube => {

      const jogos = getJogos(this.rodadas).filter(jogo => {
        return (jogo.clubeMandante.apelido === clube.apelido || jogo.clubeVisitante.apelido === clube.apelido);
      });

      this.classificacao = getClassificacao(this.rodadas);

      this.classificacao = getClassificar(this.classificacao);

      this.classificacaoClube = this.classificacao.filter(clas => clas.clube.apelido === clube.apelido)[0];

      jogos.map(jogo => {
        if (jogo.finalizado)
          jogo.cssClasseResultado = '';
        else
          jogo.cssClasseResultado = '';
      });

      const jogoClube: IJogoClube = {
        clube: clube,
        jogos: jogos,
        classificacao: this.classificacaoClube,
        localProximoJogo: this.getLocalProximoJogo(jogos, clube, this.classificacaoClube.proximoJogo)
      };

      this.jogosClubes.push(jogoClube);

      this.selectedAccordion = this.jogosClubes.length === 1;

    })

  }

  ngOnInit(): void {

  }

  getLocalProximoJogo = (jogos: IJogo[], clube: IClube, clubeProximoJogo?: IClube): string => {

    const mandante = jogos.filter(jogo => {
      return (jogo.clubeMandante.apelido === clube.apelido && jogo.clubeVisitante.apelido === clubeProximoJogo?.apelido)
    })[0];

    if (mandante)
      return '(C)';
    else
      return '(F)';
  }

  getJogoEmAndamentoLocal = (jogo: IJogo): boolean => {
    return jogoEmAndamento(jogo);
  }

  getDiaSemanaLocal = (dataJogo: Date) => {
    return getDiaSemanaCompleto(new Date(dataJogo));
  }

  getSelected = (jogo: IJogo) => {

    if (jogo.detalhesJogo !== undefined && jogo.detalhesJogo !== null)
      return;

    setInterval(() => {
      this.configurarDetalhesJogo(jogo)
    }, 1000);

  }

  private configurarDetalhesJogo = (jogo: IJogo) => {

    const detalhesJogo = this.brasileiraoService.buscarDetalhesJogo(jogo.id, jogo.numeroRodada);

    this.jogosClubes.map(jc => {
      jc.jogos.map(jogoClube => {
        if (jogoClube.id === jogo.id && jogoClube.numeroRodada === jogo.numeroRodada) {
          jogoClube.detalhesJogo = detalhesJogo;
          return;
        }
      })
    })
  }

}
