import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IClube, IDetalhesJogo, IEquipe, IEstadio, IJogo, IRodada } from 'src/app/shared/interfaces/brasileirao/brasileirao.interface';
import { getClubes } from 'src/app/shared/utilidades/clubes';
import { getDetallheJogo, gravarJogosLocalStorage } from 'src/app/shared/utilidades/escalacoes';
import { getEstadios } from 'src/app/shared/utilidades/estadios';
import { getRodadas, gravarJogoRodadaLocalStorage } from 'src/app/shared/utilidades/rodadas';
import { getElenco } from 'src/app/shared/utilidades/temporadas';

@Injectable({
  providedIn: 'root'
})
export class BrasileiraoService {

  constructor(private http: HttpClient) {

  }

  buscarElencosPorTemporada = (carregarTemporadas: boolean = false): IClube[] => {
    return getClubes(carregarTemporadas);
  }

  buscarDetalhesJogo = (idJogo: number, idRodada: number): IDetalhesJogo | undefined => {
    return getDetallheJogo(idJogo, idRodada);
  }

  buscarRodadas = (): IRodada[] => {
    return getRodadas();
  }

  buscarElenco = (ano: number, apelidoClube: string): IEquipe => {
    return getElenco(ano, apelidoClube);
  }

  buscarEstadios = (): IEstadio[] => {
    return getEstadios();
  }

  gravarJogo = (jogo: IJogo) => {
    gravarJogosLocalStorage(jogo);
    gravarJogoRodadaLocalStorage(jogo);
  }

  gravarJogoRodada = (jogo: IJogo) => {
    gravarJogoRodadaLocalStorage(jogo);
  }
}
