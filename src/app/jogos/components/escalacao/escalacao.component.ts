import { Component, Input, OnInit } from '@angular/core';
import { IEscalacao, IJogadorElenco, IJogo, ISubstituicao } from 'src/app/shared/interfaces/brasileirao/brasileirao.interface';

@Component({
  selector: 'app-escalacao',
  templateUrl: './escalacao.component.html',
  styleUrls: ['./escalacao.component.css']
})
export class EscalacaoComponent implements OnInit {

  @Input() jogo!: IJogo;

  escalacaoMandante: IEscalacao[] = [];
  escalacaoVisitante: IEscalacao[] = [];

  substituicoesMandante: ISubstituicao[] = [];
  substituicoesVisitante: ISubstituicao[] = [];

  constructor() {


  }
  ngOnInit(): void {
    if (this.jogo.detalhesJogo) {

      if (this.jogo.detalhesJogo.mandante.substituicoes.length > 0) {
        this.substituicoesMandante = this.jogo.detalhesJogo.mandante.substituicoes;
      }

      if (this.jogo.detalhesJogo.visitante.substituicoes.length > 0) {
        this.substituicoesVisitante = this.jogo.detalhesJogo.visitante.substituicoes;
      }

      if (this.jogo.detalhesJogo.mandante.escalacao.length > 0) {
        this.escalacaoMandante = this.jogo.detalhesJogo?.mandante.escalacao;
        this.escalacaoVisitante = this.jogo.detalhesJogo?.visitante.escalacao;
      }

    }
  }

  jogadorSubstituido = (jogador: IEscalacao, substituto: ISubstituicao): boolean => {

    return substituto.jogadorSaiu.jogadorElenco.jogador.apelido.toLowerCase() ===
      jogador.jogadorElenco.jogador.apelido.toLowerCase()
  }

  createRange(num: number) {
    return Array.from({ length: num }, (_, i) => i);
  }
}


