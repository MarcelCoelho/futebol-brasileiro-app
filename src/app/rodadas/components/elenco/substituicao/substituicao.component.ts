import { Component, Input } from '@angular/core';
import { IInfoJogo, ISubstituicao } from 'src/app/shared/interfaces/brasileirao/brasileirao.interface';

@Component({
  selector: 'app-substituicao',
  templateUrl: './substituicao.component.html',
  styleUrls: ['./substituicao.component.css']
})
export class SubstituicaoComponent {

  @Input() detalhesJogo!: IInfoJogo | undefined;

  createRange(num: number) {
    return Array.from({ length: num }, (_, i) => i);
  }

  removerJogadorEscaladoSubstituido = (substituicao: ISubstituicao) => {
    if (this.detalhesJogo === undefined)
      return;


    const index = this.detalhesJogo.substituicoes.indexOf(substituicao);
    this.detalhesJogo.substituicoes.splice(index, 1);
    // this.golsClubeMandante -= substituicao.jogadorEntrou.gols;
    // this.golsClubeVisitante -= substituicao.jogadorEntrou.golsContra;
  }

}
