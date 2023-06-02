import { Component, OnInit } from '@angular/core';

import { TreeNode } from 'primeng/api';

import { IClassificacao, IClube, IRodada } from '../../../shared/interfaces/brasileirao/brasileirao.interface';
import { getClassificacao, getClassificar } from 'src/app/shared/utilidades/classificacao';
import { getClubes } from 'src/app/shared/utilidades/clubes';
import { getRodadas } from 'src/app/shared/utilidades/rodadas';

@Component({
  selector: 'app-classificacao',
  templateUrl: './classificacao.component.html',
  styleUrls: ['./classificacao.component.css']
})

export class ClassificacaoComponent implements OnInit {

  clubes: IClube[] = [];
  rodadas: IRodada[] = [];
  classificacao: IClassificacao[] = [];

  classificados: TreeNode[] = [];

  constructor() { }
  ngOnInit(): void {
    this.clubes = getClubes();
    this.rodadas = getRodadas();
    this.classificacao = getClassificacao(this.rodadas);
    this.classificacao = getClassificar(this.classificacao);
  }

  //#endregion

}
