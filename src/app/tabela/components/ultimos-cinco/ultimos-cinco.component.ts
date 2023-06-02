import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { IClube, IJogo, IRodada } from '../../../shared/interfaces/brasileirao/brasileirao.interface';

@Component({
  selector: 'app-ultimos-cinco',
  templateUrl: './ultimos-cinco.component.html',
  styleUrls: ['./ultimos-cinco.component.css']
})
export class UltimosCincoComponent implements OnInit, AfterViewInit {

  @Input() rodadas: IRodada[] = [];
  @Input() clube!: IClube;

  cincoUltimasJogos: IJogo[] = [];

  constructor() {

  }
  ngAfterViewInit(): void {
    this.calcularCincoUltimosJogos();
  }
  ngOnInit(): void {

  }

  calcularCincoUltimosJogos = () => {
    this.rodadas.map(rodada => {

      rodada.jogos.map(jogo => {
        if (jogo.finalizado &&
          (jogo.clubeMandante.apelido === this.clube.apelido ||
            jogo.clubeVisitante.apelido === this.clube.apelido)) {
          this.cincoUltimasJogos.push(jogo);
        }
      })
    });

    this.cincoUltimasJogos = this.cincoUltimasJogos.slice(-5);

    const cincoUltimosJogosClonados: IJogo[] = JSON.parse(JSON.stringify(this.cincoUltimasJogos));

    cincoUltimosJogosClonados.map(jogo => {

      if (jogo.clubeMandante.apelido === this.clube.apelido) {
        if (jogo.golsClubeMandante > jogo.golsClubeVisitante)
          jogo.cssClasseResultado = 'resultado vitoria';
        else if (jogo.golsClubeVisitante > jogo.golsClubeMandante)
          jogo.cssClasseResultado = 'resultado derrota';
        else
          jogo.cssClasseResultado = 'resultado empate';
      }
      else if (jogo.clubeVisitante.apelido === this.clube.apelido) {
        if (jogo.golsClubeVisitante > jogo.golsClubeMandante)
          jogo.cssClasseResultado = 'resultado vitoria';
        else if (jogo.golsClubeMandante > jogo.golsClubeVisitante)
          jogo.cssClasseResultado = 'resultado derrota';
        else
          jogo.cssClasseResultado = 'resultado empate';
      }
    });

    this.cincoUltimasJogos = cincoUltimosJogosClonados;
  }

}
