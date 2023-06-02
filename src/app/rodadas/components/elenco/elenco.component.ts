import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { IEquipe, IEscalacao, IInfoJogo, IJogadorElenco, IJogo, ISubstituicao } from 'src/app/shared/interfaces/brasileirao/brasileirao.interface';
import { BrasileiraoService } from '../../../services/brasileirao.service';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { supportsScrollBehavior } from '@angular/cdk/platform';
import { detalhesJogos } from '../../../shared/utilidades/escalacoes';

@Component({
  selector: 'app-elenco',
  templateUrl: './elenco.component.html',
  styleUrls: ['./elenco.component.css']
})
export class ElencoComponent implements OnInit, OnChanges {

  @Input() jogo!: IJogo;
  // detalheJogo!: IInfoJogo | undefined;

  equipe!: IEquipe;
  escalado!: IJogadorElenco | null;

  jogadores: IJogadorElenco[] = [];

  filtroJogadores: string = '';

  @Input() mandante: boolean = false;

  constructor(private brasileiraoService: BrasileiraoService) { }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.mandante) {
      this.equipe = this.brasileiraoService.buscarElenco(2023, this.jogo.clubeMandante.apelido);
      // this.detalheJogo = this.jogo.detalhesJogo?.mandante;
    }
    else {
      this.equipe = this.brasileiraoService.buscarElenco(2023, this.jogo.clubeVisitante.apelido);
      // this.detalheJogo = this.jogo.detalhesJogo?.visitante;
    }
  }

  ngOnInit(): void {

  }

  escalarJogadores = () => {

    if (this.mandante) {
      if (this.filtroJogadores.toString().trim() === '')
        return;

      const numeros: string[] = this.filtroJogadores.split(';');

      for (var idx = 0; idx <= numeros.length - 1; idx++) {
        const numeroJogador = Number(numeros[idx]);
        if (numeroJogador > 0) {
          const jogadorElenco = this.equipe.elenco.filter(e => e.numero === numeroJogador)[0];
          if (jogadorElenco)
            this.addJogadorEscalado(jogadorElenco);
        }
      }
      this.filtroJogadores = '';
    }
    // else {
    //   if (this.filtroJogadoresVisitante.toString().trim() === '')
    //     return;

    //   const numeros: string[] = this.filtroJogadoresVisitante.split(';');

    //   for (var idx = 0; idx <= numeros.length - 1; idx++) {
    //     const numeroJogador = Number(numeros[idx]);
    //     if (numeroJogador > 0) {
    //       const jogadorElenco = this.equipeVisitante.elenco.filter(e => e.numero === numeroJogador)[0];
    //       if (jogadorElenco)
    //         this.addJogadorEscalado(jogadorElenco, mandante);
    //     }
    //   }

    //   this.filtroJogadoresVisitante = '';
    // }
  }

  addJogadorEscalado = (jogadorElenco: IJogadorElenco) => {

    if (this.mandante) {
      if (this.jogo?.detalhesJogo === null || this.jogo?.detalhesJogo === undefined) {
        this.criarDetalheJogo();
      }

      const jogadorElencoEncontrado = this.jogo?.detalhesJogo?.mandante.escalacao.filter(je => je.jogadorElenco.jogador.apelido.toLocaleUpperCase() === jogadorElenco.jogador.apelido.toLocaleUpperCase())[0];
      if (jogadorElencoEncontrado === undefined || jogadorElencoEncontrado === null) {
        this.addJogadorEscalacao(jogadorElenco);
      }
    }
    else {

      if (this.jogo?.detalhesJogo === null || this.jogo?.detalhesJogo === undefined) {
        this.criarDetalheJogo();
      }

      const jogadorElencoEncontrado = this.jogo?.detalhesJogo?.visitante.escalacao.filter(je => je.jogadorElenco.jogador.apelido.toLocaleUpperCase() === jogadorElenco.jogador.apelido.toLocaleUpperCase())[0];
      if (jogadorElencoEncontrado === undefined || jogadorElencoEncontrado === null) {
        this.addJogadorEscalacao(jogadorElenco);
      }

    }

    this.getClasseNomeJogador(jogadorElenco);
  }

  getClasseNomeJogador = (jogador: IJogadorElenco) => {
    let jogadorElenco: IEscalacao | undefined = undefined;

    if (this.mandante)
      jogadorElenco = this.jogo?.detalhesJogo?.mandante.escalacao.filter(tm => tm.jogadorElenco.jogador.apelido.toLocaleLowerCase() === jogador.jogador.apelido.toLocaleLowerCase())[0];
    else
      jogadorElenco = this.jogo?.detalhesJogo?.visitante.escalacao.filter(tm => tm.jogadorElenco.jogador.apelido.toLocaleLowerCase() === jogador.jogador.apelido.toLocaleLowerCase())[0];

    if (jogadorElenco)
      return 'nome escalado';
    else
      return 'nome';
  }

  getClasseJogadorEscalado = (escalacao: IEscalacao) => {

    let classe: string = 'jogadorEscalado';

    if (this.mandante) {
      this.jogo?.detalhesJogo?.mandante.substituicoes.map(su => {
        if (su.jogadorSaiu.jogadorElenco !== undefined && su.jogadorSaiu.jogadorElenco.jogador.apelido.toLocaleLowerCase() === escalacao.jogadorElenco.jogador.apelido.toLocaleLowerCase()) {
          classe = 'jogadorEscalado substituido';
        }
      });
    } else {
      this.jogo?.detalhesJogo?.visitante.substituicoes.map(su => {
        if (su.jogadorSaiu.jogadorElenco != undefined && su.jogadorSaiu.jogadorElenco.jogador.apelido.toLocaleLowerCase() === escalacao.jogadorElenco.jogador.apelido.toLocaleLowerCase()) {
          classe = 'jogadorEscalado substituido';
        }
      });
    }

    return classe;
  }

  getClasseMainElenco = () => {
    if (this.mandante)
      return 'flex flex-column align-items-start justify-content-start p-2 m-1 gap-2';
    else
      return 'flex flex-column align-items-end justify-content-start p-2 m-1 gap-2';
  }

  dragStart(escalacao: IJogadorElenco) {
    this.escalado = escalacao;
  }

  dragEnd() {
    this.escalado = null;
  }

  drop() {
    if (this.escalado) {
      this.jogadores.push(this.escalado);
      this.escalado = null;
    }
  }

  dropOrder = (escalacao: CdkDragDrop<IEscalacao[]>) => {
    if (this.jogo?.detalhesJogo !== undefined && this.jogo?.detalhesJogo.mandante.escalacao.length > 0) {
      if (this.mandante)
        moveItemInArray(this.jogo?.detalhesJogo.mandante.escalacao, escalacao.previousIndex, escalacao.currentIndex);
      else
        moveItemInArray(this.jogo?.detalhesJogo.visitante.escalacao, escalacao.previousIndex, escalacao.currentIndex);
    }
  }

  createRange(num: number) {
    return Array.from({ length: num }, (_, i) => i);
  }

  addCartaoAmarelo = (jogadorElenco: IJogadorElenco) => {
    if (this.mandante) {
      this.jogo?.detalhesJogo?.mandante.escalacao.map(escalacao => {
        if (escalacao.jogadorElenco.jogador.apelido.toLocaleLowerCase() === jogadorElenco.jogador.apelido.toLocaleLowerCase()) {

          if (escalacao.cartoesAmarelos === 0)
            escalacao.cartoesAmarelos += 1;
          else
            escalacao.cartoesAmarelos -= 1;
        }
      })
      this.jogo?.detalhesJogo?.mandante.substituicoes.map(escalacao => {
        if (escalacao.jogadorEntrou.jogadorElenco.jogador.apelido.toLocaleLowerCase() === jogadorElenco.jogador.apelido.toLocaleLowerCase()) {

          if (escalacao.jogadorEntrou.cartoesAmarelos === 0)
            escalacao.jogadorEntrou.cartoesAmarelos += 1;
          else
            escalacao.jogadorEntrou.cartoesAmarelos -= 1;
        }
      })
    }
    else {
      this.jogo?.detalhesJogo?.visitante.escalacao.map(escalacao => {
        if (escalacao.jogadorElenco.jogador.apelido.toLocaleLowerCase() === jogadorElenco.jogador.apelido.toLocaleLowerCase()) {

          if (escalacao.cartoesAmarelos === 0)
            escalacao.cartoesAmarelos += 1;
          else
            escalacao.cartoesAmarelos -= 1;
        }
      })
      this.jogo?.detalhesJogo?.visitante.substituicoes.map(escalacao => {
        if (escalacao.jogadorEntrou.jogadorElenco.jogador.apelido.toLocaleLowerCase() === jogadorElenco.jogador.apelido.toLocaleLowerCase()) {

          if (escalacao.jogadorEntrou.cartoesAmarelos === 0)
            escalacao.jogadorEntrou.cartoesAmarelos += 1;
          else
            escalacao.jogadorEntrou.cartoesAmarelos -= 1;
        }
      })
    }
  }

  addCartaoVermelho = (jogadorElenco: IJogadorElenco) => {
    if (this.mandante) {
      this.jogo?.detalhesJogo?.mandante.escalacao.map(escalacao => {
        if (escalacao.jogadorElenco.jogador.apelido.toLocaleLowerCase() === jogadorElenco.jogador.apelido.toLocaleLowerCase()) {

          if (escalacao.cartoesVermelhos === 0)
            escalacao.cartoesVermelhos += 1;
          else
            escalacao.cartoesVermelhos -= 1;
        }
      })
      this.jogo?.detalhesJogo?.mandante.substituicoes.map(escalacao => {
        if (escalacao.jogadorEntrou.jogadorElenco.jogador.apelido.toLocaleLowerCase() === jogadorElenco.jogador.apelido.toLocaleLowerCase()) {

          if (escalacao.jogadorEntrou.cartoesVermelhos === 0)
            escalacao.jogadorEntrou.cartoesVermelhos += 1;
          else
            escalacao.jogadorEntrou.cartoesVermelhos -= 1;
        }
      })
    }
    else {
      this.jogo?.detalhesJogo?.visitante.escalacao.map(escalacao => {
        if (escalacao.jogadorElenco.jogador.apelido.toLocaleLowerCase() === jogadorElenco.jogador.apelido.toLocaleLowerCase()) {

          if (escalacao.cartoesVermelhos === 0)
            escalacao.cartoesVermelhos += 1;
          else
            escalacao.cartoesVermelhos -= 1;
        }
      })
      this.jogo?.detalhesJogo?.visitante.substituicoes.map(escalacao => {
        if (escalacao.jogadorEntrou.jogadorElenco.jogador.apelido.toLocaleLowerCase() === jogadorElenco.jogador.apelido.toLocaleLowerCase()) {

          if (escalacao.jogadorEntrou.cartoesVermelhos === 0)
            escalacao.jogadorEntrou.cartoesVermelhos += 1;
          else
            escalacao.jogadorEntrou.cartoesVermelhos -= 1;
        }
      })
    }
  }

  addGolsContra = (jogadorElenco: IJogadorElenco) => {
    if (this.jogo === null)
      return;

    if (this.mandante) {
      this.jogo.detalhesJogo?.mandante.escalacao.map(escalacao => {
        if (escalacao.jogadorElenco.jogador.apelido.toLocaleLowerCase() === jogadorElenco.jogador.apelido.toLocaleLowerCase()) {
          escalacao.golsContra += 1;
          if (this.jogo !== null)
            this.jogo.golsClubeVisitante += 1;
        }
      })
      this.jogo?.detalhesJogo?.mandante.substituicoes.map(escalacao => {
        if (escalacao.jogadorEntrou.jogadorElenco.jogador.apelido.toLocaleLowerCase() === jogadorElenco.jogador.apelido.toLocaleLowerCase()) {
          escalacao.jogadorEntrou.golsContra += 1;
          if (this.jogo !== null)
            this.jogo.golsClubeVisitante += 1;
        }
      })
    }
    else {
      this.jogo?.detalhesJogo?.visitante.escalacao.map(escalacao => {
        if (escalacao.jogadorElenco.jogador.apelido.toLocaleLowerCase() === jogadorElenco.jogador.apelido.toLocaleLowerCase()) {
          escalacao.golsContra += 1;
          if (this.jogo !== null)
            this.jogo.golsClubeMandante += 1;
        }
      })
      this.jogo?.detalhesJogo?.visitante.substituicoes.map(escalacao => {
        if (escalacao.jogadorEntrou.jogadorElenco.jogador.apelido.toLocaleLowerCase() === jogadorElenco.jogador.apelido.toLocaleLowerCase()) {
          escalacao.jogadorEntrou.golsContra += 1;
          if (this.jogo !== null)
            this.jogo.golsClubeMandante += 1;
        }
      })
    }
  }

  addGolsPro = (jogadorElenco: IJogadorElenco) => {
    if (this.mandante) {
      this.jogo?.detalhesJogo?.mandante.escalacao.map(escalacao => {
        if (escalacao.jogadorElenco.jogador.apelido.toLocaleLowerCase() === jogadorElenco.jogador.apelido.toLocaleLowerCase()) {
          escalacao.gols += 1;
          if (this.jogo !== null)
            this.jogo.golsClubeMandante += 1;
        }
      })
      this.jogo?.detalhesJogo?.mandante.substituicoes.map(escalacao => {
        if (escalacao.jogadorEntrou.jogadorElenco.jogador.apelido.toLocaleLowerCase() === jogadorElenco.jogador.apelido.toLocaleLowerCase()) {
          escalacao.jogadorEntrou.gols += 1;
          if (this.jogo !== null)
            this.jogo.golsClubeMandante += 1;
        }
      })
    }
    else {
      this.jogo?.detalhesJogo?.visitante.escalacao.map(escalacao => {
        if (escalacao.jogadorElenco.jogador.apelido.toLocaleLowerCase() === jogadorElenco.jogador.apelido.toLocaleLowerCase()) {
          escalacao.gols += 1;
          if (this.jogo !== null)
            this.jogo.golsClubeVisitante += 1;
        }
      })
      this.jogo?.detalhesJogo?.visitante.substituicoes.map(escalacao => {
        if (escalacao.jogadorEntrou.jogadorElenco.jogador.apelido.toLocaleLowerCase() === jogadorElenco.jogador.apelido.toLocaleLowerCase()) {
          escalacao.jogadorEntrou.gols += 1;
          if (this.jogo !== null)
            this.jogo.golsClubeVisitante += 1;
        }
      })
    }
  }

  removerGolsContra = (jogadorElenco: IJogadorElenco) => {
    if (this.mandante) {
      this.jogo?.detalhesJogo?.mandante.escalacao.map(escalacao => {
        if (escalacao.jogadorElenco.jogador.apelido.toLocaleLowerCase() === jogadorElenco.jogador.apelido.toLocaleLowerCase()) {
          if (escalacao.golsContra > 0)
            escalacao.golsContra -= 1;
        }
      })
    }
    else {
      this.jogo?.detalhesJogo?.visitante.escalacao.map(escalacao => {
        if (escalacao.jogadorElenco.jogador.apelido.toLocaleLowerCase() === jogadorElenco.jogador.apelido.toLocaleLowerCase()) {
          if (escalacao.golsContra > 0)
            escalacao.golsContra -= 1;
        }
      })
    }
  }

  removerGolsPro = (jogadorElenco: IJogadorElenco) => {
    if (this.mandante) {
      this.jogo?.detalhesJogo?.mandante.escalacao.map(escalacao => {
        if (escalacao.jogadorElenco.jogador.apelido.toLocaleLowerCase() === jogadorElenco.jogador.apelido.toLocaleLowerCase()) {
          if (escalacao.gols > 0) {
            escalacao.gols -= 1;
            if (this.jogo !== null)
              this.jogo.golsClubeMandante -= 1;
          }
        }
      })
    }
    else {
      this.jogo?.detalhesJogo?.visitante.escalacao.map(escalacao => {
        if (escalacao.jogadorElenco.jogador.apelido.toLocaleLowerCase() === jogadorElenco.jogador.apelido.toLocaleLowerCase()) {
          if (escalacao.gols > 0) {
            escalacao.gols -= 1;
            if (this.jogo !== null)
              this.jogo.golsClubeVisitante -= 1;
          }
        }
      })
    }
  }

  substituirJogadorEscalado = (escalacao: IEscalacao) => {

    if (this.mandante) {
      const substituicao = this.jogo?.detalhesJogo?.mandante.substituicoes.filter(su => su.jogadorSaiu?.jogadorElenco.jogador.apelido.toLocaleUpperCase() ===
        escalacao.jogadorElenco.jogador.apelido.toLocaleUpperCase())[0];

      if (this.jogo?.detalhesJogo !== undefined &&
        this.jogo?.detalhesJogo?.mandante.substituicoes.length < 5 && (substituicao === null || substituicao === undefined)) {
        const jogadoresSubstituidos: ISubstituicao = {
          jogadorSaiu: escalacao,
          jogadorEntrou: {
            jogadorElenco: {
              jogador: {
                apelido: '',
                id: 0,
                idade: 0,
                nome: '',
                posicao: ''
              },
              numero: 0
            },
            cartoesAmarelos: 0,
            cartoesVermelhos: 0,
            gols: 0,
            golsContra: 0
          }
        };
        this.jogo?.detalhesJogo.mandante.substituicoes.push(jogadoresSubstituidos);
      }
    }
    else {
      const substituicao = this.jogo?.detalhesJogo?.visitante.substituicoes.filter(su => su.jogadorSaiu?.jogadorElenco.jogador.apelido.toLocaleUpperCase() ===
        escalacao.jogadorElenco.jogador.apelido.toLocaleUpperCase())[0];

      if (this.jogo?.detalhesJogo !== undefined &&
        this.jogo?.detalhesJogo?.visitante.substituicoes.length < 5 && (substituicao === null || substituicao === undefined)) {
        const jogadoresSubstituidos: ISubstituicao = {
          jogadorSaiu: escalacao,
          jogadorEntrou: {
            jogadorElenco: {
              jogador: {
                apelido: '',
                id: 0,
                idade: 0,
                nome: '',
                posicao: ''
              },
              numero: 0
            },
            cartoesAmarelos: 0,
            cartoesVermelhos: 0,
            gols: 0,
            golsContra: 0
          }
        };
        this.jogo?.detalhesJogo.visitante.substituicoes.push(jogadoresSubstituidos);
      }

    }

    this.getClasseJogadorEscalado(escalacao);
  }

  removerJogadorEscaladoSubstituido = (substituicao: ISubstituicao) => {
    if (this.jogo === null || this.jogo?.detalhesJogo === undefined)
      return;

    if (this.mandante) {
      const index = this.jogo?.detalhesJogo.mandante.substituicoes.indexOf(substituicao);
      this.jogo.detalhesJogo.mandante.substituicoes.splice(index, 1);
      this.jogo.golsClubeMandante -= substituicao.jogadorEntrou.gols;
      this.jogo.golsClubeVisitante -= substituicao.jogadorEntrou.golsContra;
    }
    else {

      const index = this.jogo?.detalhesJogo.visitante.substituicoes.indexOf(substituicao);
      this.jogo.detalhesJogo.visitante.substituicoes.splice(index, 1);
      this.jogo.golsClubeVisitante -= substituicao.jogadorEntrou.gols;
      this.jogo.golsClubeMandante -= substituicao.jogadorEntrou.golsContra;
    }
  }

  removerJogadorEscalado = (escalacao: IEscalacao) => {
    if (this.jogo === null)
      return;

    if (this.mandante) {
      if (this.jogo.detalhesJogo !== undefined && this.jogo.detalhesJogo.mandante.escalacao.length > 0) {
        const index = this.jogo?.detalhesJogo.mandante.escalacao.indexOf(escalacao);
        this.jogo.detalhesJogo.mandante.escalacao.splice(index, 1);
        this.jogo.golsClubeMandante -= escalacao.gols;
        this.jogo.golsClubeVisitante -= escalacao.golsContra;
      }
    }
    else {
      if (this.jogo.detalhesJogo !== undefined && this.jogo.detalhesJogo.visitante.escalacao.length > 0) {
        const index = this.jogo?.detalhesJogo.visitante.escalacao.indexOf(escalacao);
        this.jogo.detalhesJogo.visitante.escalacao.splice(index, 1);
        this.jogo.golsClubeVisitante -= escalacao.gols;
        this.jogo.golsClubeMandante -= escalacao.golsContra;
      }
    }
  }

  substituicoes = (substituicoes: ISubstituicao[]) => {
    if (this.jogo === null || this.jogo.detalhesJogo === undefined) return;

    if (this.mandante)
      this.jogo.detalhesJogo.mandante.substituicoes = substituicoes;
    else
      this.jogo.detalhesJogo.visitante.substituicoes = substituicoes;
  }

  private criarDetalheJogo = () => {
    if (this.jogo === null)
      return;

    this.jogo.detalhesJogo = {
      ano: 2023,
      idJogo: this.jogo?.id,
      idRodada: this.jogo?.numeroRodada,
      mandante: {
        treinador: {
          id: '',
          nome: '',
          apelido: ''
        },
        esquemaTatico: '',
        escalacao: [],
        substituicoes: []
      },
      visitante: {
        treinador: {
          id: '',
          nome: '',
          apelido: ''
        },
        esquemaTatico: '',
        escalacao: [],
        substituicoes: []
      }
    };
  }

  private addJogadorEscalacao = (jogadorElenco: IJogadorElenco) => {
    const escalacao: IEscalacao = {
      jogadorElenco: jogadorElenco,
      gols: 0,
      golsContra: 0,
      cartoesAmarelos: 0,
      cartoesVermelhos: 0
    }

    if (this.jogo?.detalhesJogo !== undefined && this.jogo?.detalhesJogo !== null) {

      if (this.mandante) {
        if (this.jogo?.detalhesJogo.mandante.escalacao.length < 11)
          this.jogo?.detalhesJogo.mandante.escalacao.push(escalacao);
        else {
          for (var idx = 0; idx < this.jogo?.detalhesJogo.mandante.substituicoes.length; idx++) {
            const su = this.jogo?.detalhesJogo.mandante.substituicoes[idx];

            if (su.jogadorEntrou.jogadorElenco.jogador.apelido === '') {
              su.jogadorEntrou.jogadorElenco = jogadorElenco;
              break;
            }
          }
        }
      }
      else {
        if (this.jogo?.detalhesJogo.visitante.escalacao.length < 11)
          this.jogo?.detalhesJogo?.visitante.escalacao.push(escalacao);
        else {
          for (var idx = 0; idx < this.jogo?.detalhesJogo.visitante.substituicoes.length; idx++) {
            const su = this.jogo?.detalhesJogo.visitante.substituicoes[idx];

            if (su.jogadorEntrou.jogadorElenco.jogador.apelido === '') {
              su.jogadorEntrou.jogadorElenco = jogadorElenco;
              break;
            }
          }
        }
      }
    }
  }

}
