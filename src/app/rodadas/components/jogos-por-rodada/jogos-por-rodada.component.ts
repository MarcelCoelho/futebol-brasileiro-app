import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { IEquipe, IJogo, IRodada } from 'src/app/shared/interfaces/brasileirao/brasileirao.interface';
import { BrasileiraoService } from '../../../services/brasileirao.service';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

interface IRodadaCustom {
  rodada: IRodada;
  open: boolean;
}

@Component({
  selector: 'app-jogos-por-rodada',
  templateUrl: './jogos-por-rodada.component.html',
  styleUrls: ['./jogos-por-rodada.component.css']
})
export class JogosPorRodadaComponent implements OnInit {

  rodadasCustom: IRodadaCustom[] = [];
  rodadasCustomClonadas: IRodadaCustom[] = [];

  @Output() onJogoSelecionado: EventEmitter<IJogo | null> = new EventEmitter();

  equipeMandante!: IEquipe;
  equipeVisitante!: IEquipe;

  filtroRodadas: string = '';

  constructor(private brasileiraoService: BrasileiraoService) { }

  ngOnInit(): void {

    const rodadas = this.brasileiraoService.buscarRodadas();

    let rodadaAtual: Number = 0;

    rodadas.map(rd => {
      if (!rd.finalizada && rodadaAtual === 0) {
        rodadaAtual = rd.numero;
        const rodada: IRodadaCustom = {
          rodada: rd,
          open: true
        };
        this.rodadasCustom.unshift(rodada);
      }
      else {
        const rodada: IRodadaCustom = {
          rodada: rd,
          open: false
        };
        this.rodadasCustom.push(rodada);
      }
    })

    this.rodadasCustomClonadas = JSON.parse(JSON.stringify(this.rodadasCustom));

    this.getClasseConfrontoClube(null);

  }

  jogoSelecionado = (jogo: IJogo | null) => {

    let jogoSelecionado: IJogo | null = jogo;

    if (jogoSelecionado === null) {
      this.getClasseConfrontoClube(jogoSelecionado);
      return;
    }

    console.log(jogo?.numeroRodada)

    this.equipeMandante = this.brasileiraoService.buscarElenco(2023, jogoSelecionado.clubeMandante.apelido);
    this.equipeVisitante = this.brasileiraoService.buscarElenco(2023, jogoSelecionado.clubeVisitante.apelido);
    this.getClasseConfrontoClube(jogo);

    // this.dataJogo = new Date(this.jogo.data);
    // this.estadioSelecionado = this.jogo.local !== undefined ? this.jogo.local :
    //   this.estadios.filter(es => es.clube?.apelido === this.equipeMandante.clube.apelido)[0];
    // this.jogoFinalizado = this.jogo.finalizado;

    const detalhesJogo = this.brasileiraoService.buscarDetalhesJogo(jogoSelecionado.id, jogoSelecionado.numeroRodada);
    if (jogoSelecionado.detalhesJogo === undefined || jogoSelecionado.detalhesJogo === null)
      jogoSelecionado.detalhesJogo = detalhesJogo;

    this.onJogoSelecionado.emit(jogoSelecionado);
  }

  getClasseConfrontoClube(jogo: IJogo | null) {
    if (this.equipeMandante !== null && this.equipeMandante !== undefined && jogo !== null &&
      jogo.clubeMandante.apelido === this.equipeMandante.clube.apelido &&
      jogo.clubeVisitante.apelido === this.equipeVisitante.clube.apelido)
      return 'confronto-clubes destacado';

    else
      return 'confronto-clubes';
  }

  filtrarRodadas = () => {

    if (this.filtroRodadas.length === 0) {
      this.rodadasCustom = JSON.parse(JSON.stringify(this.rodadasCustomClonadas));
      this.jogoSelecionado(null);
      return;
    }

    const rodadasCustomTemp: IRodadaCustom[] = JSON.parse(JSON.stringify(this.rodadasCustomClonadas));

    const rodada = rodadasCustomTemp.filter(rdcc => {
      return (rdcc.rodada.numero === Number(this.filtroRodadas))
    })[0];

    if (rodada) {
      this.rodadasCustom = [];
      rodada.open = true;
      this.rodadasCustom.push(rodada);
      this.jogoSelecionado(null);
    }
    else {

      let splitFiltro = this.filtroRodadas.split('X');

      if (splitFiltro.length <= 1)
        splitFiltro = this.filtroRodadas.split('x');

      if (splitFiltro.length > 1) {

        const mandante = splitFiltro[0].trim().toLowerCase();
        const visitante = splitFiltro[1].trim().toLowerCase();
        let numeroRodada: number;
        let jogoFiltrado!: IJogo;

        rodadasCustomTemp.map(rdcc => {
          rdcc.rodada.jogos.map(jogo => {
            if (jogo.clubeMandante.apelido.toLowerCase() === mandante && jogo.clubeVisitante.apelido.toLowerCase() === visitante) {
              numeroRodada = rdcc.rodada.numero;
              jogoFiltrado = jogo;
            }
          })
        });

        const rodada = rodadasCustomTemp.filter(rdcc => {
          return (rdcc.rodada.numero === numeroRodada)
        })[0];

        if (rodada) {
          this.rodadasCustom = [];
          rodada.open = true;
          this.rodadasCustom.push(rodada);
        }

        this.jogoSelecionado(jogoFiltrado);
      }
    }

  }

  getSelected = (rodadaCustom: IRodadaCustom) => {

    this.rodadasCustom.map(rdc => {
      if (rdc.rodada.numero === rodadaCustom.rodada.numero)
        rdc.open = true;
      else
        rdc.open = false;
    });

    const index = this.rodadasCustom.indexOf(rodadaCustom);
    this.rodadasCustom.splice(index, 1);

    this.rodadasCustom.sort(this.ordernar)

    this.rodadasCustom.unshift(rodadaCustom);
  }

  dropOrderRodadas = (rodadas: CdkDragDrop<IRodadaCustom[]>) => {
    moveItemInArray(this.rodadasCustom, rodadas.previousIndex, rodadas.currentIndex);
  }

  private ordernar = (a: IRodadaCustom, b: IRodadaCustom): number => {

    if (a.rodada.numero < b.rodada.numero)
      return -1;
    else if (a.rodada.numero > b.rodada.numero)
      return 1;

    return -1;
  }

}
