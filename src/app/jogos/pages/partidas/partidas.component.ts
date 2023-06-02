import { Component, OnInit } from '@angular/core';
import { BrasileiraoService } from 'src/app/services/brasileirao.service';
import { IClube, IRodada } from 'src/app/shared/interfaces/brasileirao/brasileirao.interface';
import { IData } from 'src/app/shared/interfaces/shared.interface';
import { getClubePorApelido } from 'src/app/shared/utilidades/clubes';
import { getRodadas } from 'src/app/shared/utilidades/rodadas';

@Component({
  selector: 'app-partidas',
  templateUrl: './partidas.component.html',
  styleUrls: ['./partidas.component.css']
})
export class PartidasComponent implements OnInit {

  data: IData[] = [];
  rodadas: IRodada[] = [];
  clubes: IClube[] = [];
  porClube: boolean = false;

  constructor(private brasileiraoService: BrasileiraoService) { }

  ngOnInit(): void {

    this.brasileiraoService.buscarElencosPorTemporada().map(clube => {
      const _data: IData =
      {
        codigo: clube.apelido,
        descricao: clube.nome,
        imagem: clube.logo
      };

      this.data.push(_data);
    })

    this.rodadas = getRodadas();
    // this.clubeSelecionado(['CRU'])
  }

  clubeSelecionado = (clubes: string[]) => {

    if (clubes.length === 0) {
      this.porClube = false;
    }
    else {
      let _clubes: IClube[] = [];
      clubes.map(clube => {
        _clubes.push(getClubePorApelido(clube, false));
      });

      this.clubes = _clubes;
      this.porClube = true;
    }
  }
}
