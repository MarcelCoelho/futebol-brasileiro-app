import { AfterContentInit, Component, Input } from '@angular/core';

@Component({
  selector: 'app-jogador',
  templateUrl: './jogador.component.html',
  styleUrls: ['./jogador.component.css']
})
export class JogadorComponent implements AfterContentInit {

  @Input() ano: number = 0;
  @Input() rodada: number = 0;

  @Input() nome?: string = '';
  @Input() numero: number = 0;
  @Input() corNumero: string = '';
  @Input() corFundo: string = '';
  @Input() corBorda: string = '';

  ngAfterContentInit() {

    if (this.corFundo === 'white')
      this.corNumero = 'black';
    // const divJogador = (document.querySelector('.bola') as HTMLElement);

    // if (divJogador) {
    //   divJogador.style.color = this.corLetra;
    //   divJogador.style.background = this.corFundo;
    //   // divJogador.style.border = '2px solid ' + this.borda;
    // }
  }

}
