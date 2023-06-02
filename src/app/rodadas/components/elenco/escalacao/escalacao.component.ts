import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IEscalacao, IInfoJogo, ISubstituicao } from 'src/app/shared/interfaces/brasileirao/brasileirao.interface';

@Component({
  selector: 'app-escalacao',
  templateUrl: './escalacao.component.html',
  styleUrls: ['./escalacao.component.css']
})
export class EscalacaoComponent {

  @Input() mandante: boolean = false;
  @Input() detalhesJogo!: IInfoJogo | undefined;

  @Output() onSubstituicoes = new EventEmitter<ISubstituicao[]>();

  createRange(num: number) {
    return Array.from({ length: num }, (_, i) => i);
  }

  substituirJogadorEscalado = (escalacao: IEscalacao) => {


    const substituicao = this.detalhesJogo?.substituicoes.filter(su => su.jogadorSaiu?.jogadorElenco.jogador.apelido.toLocaleUpperCase() ===
      escalacao.jogadorElenco.jogador.apelido.toLocaleUpperCase())[0];

    if (this.detalhesJogo !== undefined &&
      this.detalhesJogo?.substituicoes.length < 5 && (substituicao === null || substituicao === undefined)) {
      const jogadoresSubstituidos: ISubstituicao = {
        jogadorSaiu: escalacao,
        jogadorEntrou: {
          jogadorElenco: {
            jogador: {
              apelido: '',
              id: 0,
              idade: 0,
              nome: '',
              posicao: ''
            },
            numero: 0
          },
          cartoesAmarelos: 0,
          cartoesVermelhos: 0,
          gols: 0,
          golsContra: 0
        }
      };
      this.detalhesJogo.substituicoes.push(jogadoresSubstituidos);
      this.onSubstituicoes.emit(this.detalhesJogo.substituicoes);
    }

    this.getClasseJogadorEscalado(escalacao);
  }

  getClasseJogadorEscalado = (escalacao: IEscalacao) => {

    let classe: string = 'jogadorEscalado';

    this.detalhesJogo?.substituicoes.map(su => {
      if (su.jogadorSaiu.jogadorElenco !== undefined && su.jogadorSaiu.jogadorElenco.jogador.apelido.toLocaleLowerCase() === escalacao.jogadorElenco.jogador.apelido.toLocaleLowerCase()) {
        classe = 'jogadorEscalado substituido';
      }
    });

    return classe;
  }

  removerJogadorEscalado = (escalacao: IEscalacao) => {

    if (this.detalhesJogo !== undefined && this.detalhesJogo.escalacao.length > 0) {
      const index = this.detalhesJogo.escalacao.indexOf(escalacao);
      this.detalhesJogo.escalacao.splice(index, 1);
      // this.jogo.golsClubeMandante -= escalacao.gols;
      // this.jogo.golsClubeVisitante -= escalacao.golsContra;
    }
  }

}
