import { Component, OnInit } from '@angular/core';
import { IEquipe, IEscalacao, IEstadio, IJogadorElenco, IJogo, IRodada, ISubstituicao } from 'src/app/shared/interfaces/brasileirao/brasileirao.interface';
import { BrasileiraoService } from '../../../services/brasileirao.service';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { getHorarioJogo } from 'src/app/shared/utilidades/util';

interface IRodadaCustom {
  rodada: IRodada;
  open: boolean;
}

@Component({
  selector: 'app-cadastros',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastrosComponent implements OnInit {

  jogo!: IJogo | null;

  constructor(private brasileiraoService: BrasileiraoService) { }

  ngOnInit(): void {

  }

  jogoSelecionado = (jogo: IJogo | null) => {

    if (jogo === null) {
      this.jogo = null;
      return;
    }

    this.jogo = jogo;
  }

  gravarDetalhesJogo = (jogo: IJogo | null) => {
    if (jogo === null) return;

    if (jogo.detalhesJogo !== undefined) {

      jogo.cartoesAmarelosClubeMandante = 0;
      jogo.cartoesVermelhosClubeMandante = 0;
      jogo.cartoesAmarelosClubeVisitante = 0;
      jogo.cartoesVermelhosClubeVisitante = 0;

      if (jogo.detalhesJogo.mandante?.escalacao?.length > 0) {
        jogo.detalhesJogo.mandante.escalacao.map(escalacao => {
          jogo.cartoesAmarelosClubeMandante += escalacao.cartoesAmarelos;
          jogo.cartoesVermelhosClubeMandante += escalacao.cartoesVermelhos;
        })

        if (jogo.detalhesJogo.mandante.substituicoes.length > 0) {
          jogo.detalhesJogo.mandante.substituicoes.map(su => {
            jogo.cartoesAmarelosClubeMandante += su.jogadorEntrou.cartoesAmarelos;
            jogo.cartoesVermelhosClubeMandante += su.jogadorEntrou.cartoesVermelhos;
          })
        }

      }

      if (jogo.detalhesJogo.visitante?.escalacao?.length > 0) {
        jogo.detalhesJogo.visitante.escalacao.map(escalacao => {
          jogo.cartoesAmarelosClubeVisitante += escalacao.cartoesAmarelos;
          jogo.cartoesVermelhosClubeVisitante += escalacao.cartoesVermelhos;
        })
      }
      if (jogo.detalhesJogo.visitante.substituicoes.length > 0) {
        jogo.detalhesJogo.visitante.substituicoes.map(su => {
          jogo.cartoesAmarelosClubeMandante += su.jogadorEntrou.cartoesAmarelos;
          jogo.cartoesVermelhosClubeMandante += su.jogadorEntrou.cartoesVermelhos;
        })
      }
    }

    this.brasileiraoService.gravarJogo(jogo);
  }


}