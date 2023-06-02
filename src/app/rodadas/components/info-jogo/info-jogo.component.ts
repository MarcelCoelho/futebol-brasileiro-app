import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { IEstadio, IJogo } from 'src/app/shared/interfaces/brasileirao/brasileirao.interface';
import { BrasileiraoService } from '../../../services/brasileirao.service';

@Component({
  selector: 'app-info-jogo',
  templateUrl: './info-jogo.component.html',
  styleUrls: ['./info-jogo.component.css']
})
export class InfoJogoComponent implements OnInit, OnChanges {

  estadios: IEstadio[] = [];
  estadioSelecionado?: IEstadio;

  @Input() jogo!: IJogo;

  @Output() onGravarDetalhesJogo: EventEmitter<IJogo | null> = new EventEmitter();

  constructor(private brasileiraoService: BrasileiraoService) { }

  ngOnChanges(changes: SimpleChanges): void {
    this.jogo.data = new Date(this.jogo.data);
    this.estadioSelecionado = this.jogo.local !== undefined ? this.jogo.local :
      this.estadios.filter(es => es.clube?.apelido === this.jogo.clubeMandante.apelido)[0];
  }

  ngOnInit(): void {
    if (this.jogo)
      this.estadios = this.brasileiraoService.buscarEstadios();
  }

  gravarDetalhesJogo = () => {
    this.jogo.local = this.estadioSelecionado;
    this.onGravarDetalhesJogo.emit(this.jogo);
  }
}
