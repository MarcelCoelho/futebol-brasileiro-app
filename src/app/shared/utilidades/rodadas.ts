import { IDetalhesJogo, IJogo, IRodada } from "../interfaces/brasileirao/brasileirao.interface";
import { getClubePorApelido } from "./clubes";
import { getEstadio } from "./estadios";
import { getHorarioJogo } from "./util";
import { getDetallheJogo } from './escalacoes';

export const getJogos = (rodadas: IRodada[] = []): IJogo[] => {

  let jogos: IJogo[] = [];

  if (rodadas.length > 0) {
    rodadas.map(rodada => {
      rodada.jogos.map(jogo => jogos.push(jogo));
    })
  }
  else {
    getRodadas().map(rodada => {
      rodada.jogos.map(jogo => {
        jogos.push(jogo)
      });
    })
  }
  return jogos;
}

//#region Local



const criarJogo = (id: number,
  numeroRodada: number,
  data: Date,
  mandante: string,
  visitante: string,
  local: string = '',
  golsClubeMandante: number = 0,
  golsClubeVisitante: number = 0,
  cartoesAmarelosClubeMandante: number = 0,
  cartoesVermelhosClubeMandante: number = 0,
  cartoesAmarelosClubeVisitante: number = 0,
  cartoesVermelhosClubeVisitante: number = 0,
  finalizado: boolean = false,
  carregarDetalheJogo: boolean = false): IJogo => {

  const clubeMandante = getClubePorApelido(mandante, false);

  let jogo: IJogo = {
    id,
    numeroRodada,
    data,
    hora: getHorarioJogo(data),
    clubeMandante,
    clubeVisitante: getClubePorApelido(visitante, false),
    local: local === '' ? getEstadio(clubeMandante.estadio?.apelido) : getEstadio(local),
    golsClubeMandante,
    golsClubeVisitante,
    cartoesAmarelosClubeMandante,
    cartoesVermelhosClubeMandante,
    cartoesAmarelosClubeVisitante,
    cartoesVermelhosClubeVisitante,
    finalizado
  }

  if (carregarDetalheJogo)
    jogo.detalhesJogo = getDetallheJogo(id, numeroRodada);

  return jogo;
}

export const getRodadas = (): IRodada[] => {

  let rodadasLocalStorage = localStorage.getItem('rodadas');

  let rodadas: IRodada[] = [];

  if (rodadasLocalStorage) {
    rodadas = JSON.parse(rodadasLocalStorage);

    // const rodada9 = {
    //   id: 9,
    //   numero: 9,
    //   finalizada: false,
    //   jogos: [
    //     criarJogo(89, 9, new Date(2023, 5, 3, 16, 0, 0), 'FOR', 'BAH'),
    //     criarJogo(86, 9, new Date(2023, 5, 3, 18, 30, 0), 'CRU', 'CAM', 'parque do sabiá'),
    //     criarJogo(88, 9, new Date(2023, 5, 3, 18, 30, 0), 'CAP', 'BOT'),
    //     criarJogo(90, 9, new Date(2023, 5, 3, 18, 30, 0), 'AME', 'COR'),
    //     criarJogo(84, 9, new Date(2023, 5, 3, 21, 0, 0), 'SAN', 'INT'),
    //     criarJogo(81, 9, new Date(2023, 5, 4, 16, 0, 0), 'FLU', 'RBB'),
    //     criarJogo(87, 9, new Date(2023, 5, 4, 16, 0, 0), 'GRE', 'SAO'),
    //     criarJogo(83, 9, new Date(2023, 5, 4, 18, 30, 0), 'PAL', 'CFC'),
    //     criarJogo(85, 9, new Date(2023, 5, 4, 18, 30, 0), 'GOI', 'CUI'),
    //     criarJogo(82, 9, new Date(2023, 5, 5, 20, 0, 0), 'VAS', 'FLA'),
    //   ]
    // };



    // rodadas.map(rd => {

    //   if (rd.id === 9)
    //     rd.jogos = rodada9.jogos;

    //   if (rd.id === 10)
    //     rd.jogos = rodada10.jogos;

    //   if (rd.id === 11)
    //     rd.jogos = rodada11.jogos;
    //   // });

    //   gravarRodadasLocalStorage(rodadas);

    // })
  }
  else {
    rodadas = [
      {
        id: 1,
        numero: 1,
        finalizada: true,
        jogos: [
          criarJogo(3, 1, new Date(2023, 3, 15, 16, 0, 0), 'PAL', 'CUI', 'allianz parque', 2, 1, 2, 0, 4, 1, true),
          criarJogo(10, 1, new Date(2023, 3, 15, 16, 0, 0), 'AME', 'FLU', 'independência', 0, 3, 3, 0, 2, 0, true),
          criarJogo(8, 1, new Date(2023, 3, 15, 18, 30, 0), 'CAP', 'GOI', 'arena da baixada', 2, 0, 2, 0, 3, 0, true),
          criarJogo(2, 1, new Date(2023, 3, 15, 18, 30, 0), 'BOT', 'SAO', 'nilton santos', 2, 1, 3, 0, 2, 0, true),
          criarJogo(5, 1, new Date(2023, 3, 15, 18, 30, 0), 'RBB', 'BAH', 'nabi abi chedid', 2, 1, 3, 0, 1, 0, true),
          criarJogo(9, 1, new Date(2023, 3, 15, 18, 30, 0), 'FOR', 'INT', 'arena castelão', 1, 1, 2, 0, 1, 0, true),
          criarJogo(6, 1, new Date(2023, 3, 15, 21, 0, 0), 'CAM', 'VAS', 'mineirão', 1, 2, 6, 0, 5, 0, true),
          criarJogo(4, 1, new Date(2023, 3, 16, 16, 0, 0), 'COR', 'CRU', 'neo química arena', 2, 1, 4, 0, 2, 0, true),
          criarJogo(1, 1, new Date(2023, 3, 16, 16, 0, 0), 'FLA', 'CFC', 'maracanã', 3, 0, 3, 0, 3, 0, true),
          criarJogo(7, 1, new Date(2023, 3, 16, 18, 30, 0), 'GRE', 'SAN', 'alfredo jaconi', 1, 0, 3, 0, 3, 1, true),
        ]
      },
      {
        id: 2,
        numero: 2,
        finalizada: true,
        jogos: [
          criarJogo(11, 2, new Date(2023, 3, 22, 16, 0, 0), 'FLU', 'CAP', '', 2, 0, 3, 0, 3, 0, true),
          criarJogo(20, 2, new Date(2023, 3, 22, 18, 30, 0), 'CUI', 'RBB', '', 1, 1, 3, 0, 3, 0, true),
          criarJogo(13, 2, new Date(2023, 3, 22, 18, 30, 0), 'SAO', 'AME', '', 3, 0, 6, 0, 3, 0, true),
          criarJogo(16, 2, new Date(2023, 3, 22, 21, 0, 0), 'CRU', 'GRE', 'independência', 1, 0, 4, 1, 2, 0, true),
          criarJogo(17, 2, new Date(2023, 3, 23, 11, 0, 0), 'INT', 'FLA', '', 2, 1, 2, 0, 0, 0, true),
          criarJogo(12, 2, new Date(2023, 3, 23, 16, 0, 0), 'VAS', 'PAL', 'maracanã', 2, 2, 4, 0, 3, 0, true),
          criarJogo(14, 2, new Date(2023, 3, 23, 16, 0, 0), 'SAN', 'CAM', '', 0, 0, 3, 0, 3, 0, true),
          criarJogo(18, 2, new Date(2023, 3, 23, 18, 30, 0), 'CFC', 'FOR', '', 0, 3, 1, 0, 2, 0, true),
          criarJogo(15, 2, new Date(2023, 3, 23, 19, 0, 0), 'GOI', 'COR', '', 3, 1, 5, 0, 2, 0, true),
          criarJogo(19, 2, new Date(2023, 3, 24, 20, 0), 'BAH', 'BOT', '', 1, 2, 1, 0, 2, 0, true),
        ]
      },
      {
        id: 3,
        numero: 3,
        finalizada: true,
        jogos: [
          criarJogo(29, 3, new Date(2023, 3, 29, 16, 30, 0), 'FOR', 'FLU', '', 4, 2, 0, 0, 3, 0, true),
          criarJogo(28, 3, new Date(2023, 3, 29, 16, 30, 0), 'CFC', 'SAO', '', 1, 1, 4, 0, 1, 0, true),
          criarJogo(23, 3, new Date(2023, 3, 29, 18, 30, 0), 'PAL', 'COR', '', 2, 1, 3, 0, 3, 0, true),
          criarJogo(25, 3, new Date(2023, 3, 29, 18, 30, 0), 'RBB', 'CRU', '', 0, 3, 2, 2, 3, 0, true),
          criarJogo(24, 3, new Date(2023, 3, 29, 18, 30, 0), 'SAN', 'AME', '', 3, 2, 3, 1, 3, 0, true),
          criarJogo(26, 3, new Date(2023, 3, 29, 21, 0, 0), 'CAM', 'CAP', 'independência', 2, 1, 3, 0, 2, 1, true),
          criarJogo(21, 3, new Date(2023, 3, 30, 16, 0, 0), 'FLA', 'BOT', '', 2, 3, 4, 0, 2, 1, true),
          criarJogo(27, 3, new Date(2023, 3, 30, 18, 30, 0), 'INT', 'GOI', '', 1, 0, 4, 0, 0, 1, true),
          criarJogo(30, 3, new Date(2023, 3, 30, 18, 30, 0), 'CUI', 'GRE', '', 1, 2, 3, 1, 5, 0, true),
          criarJogo(22, 3, new Date(2023, 4, 1, 20, 0, 0), 'VAS', 'BAH', '', 0, 1, 1, 0, 4, 0, true),
        ]
      },
      {
        id: 4,
        numero: 4,
        finalizada: true,
        jogos: [
          criarJogo(36, 4, new Date(2023, 4, 6, 16, 0, 0), 'CRU', 'SAN', 'independência', 2, 1, 5, 0, 3, 0, true),
          criarJogo(31, 4, new Date(2023, 4, 6, 21, 0, 0), 'FLU', 'VAS', '', 1, 1, 3, 0, 3, 0, true),
          criarJogo(40, 4, new Date(2023, 4, 7, 11, 0, 0), 'AME', 'CUI', '', 1, 2, 3, 1, 2, 0, true),
          criarJogo(39, 4, new Date(2023, 4, 7, 16, 0, 0), 'BAH', 'CFC', '', 3, 1, 2, 0, 7, 0, true),
          criarJogo(38, 4, new Date(2023, 4, 7, 16, 0, 0), 'CAP', 'FLA', '', 2, 1, 2, 0, 2, 0, true),
          criarJogo(33, 4, new Date(2023, 4, 7, 16, 0, 0), 'SAO', 'INT', '', 2, 0, 3, 0, 4, 0, true),
          criarJogo(37, 4, new Date(2023, 4, 7, 18, 30, 0), 'GRE', 'RBB', '', 3, 3, 5, 0, 2, 0, true),
          criarJogo(32, 4, new Date(2023, 4, 7, 18, 30, 0), 'BOT', 'CAM', '', 2, 0, 1, 0, 3, 0, true),
          criarJogo(35, 4, new Date(2023, 4, 7, 18, 30, 0), 'GOI', 'PAL', '', 0, 5, 2, 1, 6, 0, true),
          criarJogo(34, 4, new Date(2023, 4, 8, 20, 0, 0), 'COR', 'FOR', '', 1, 1, 2, 0, 2, 0, true),
        ]
      },
      {
        id: 5,
        numero: 5,
        finalizada: true,
        jogos: [
          criarJogo(44, 5, new Date(2023, 4, 10, 19, 0, 0), 'SAN', 'BAH', '', 3, 0, 3, 0, 4, 0, true),
          criarJogo(45, 5, new Date(2023, 4, 10, 19, 0, 0), 'RBB', 'AME', '', 2, 2, 5, 0, 3, 0, true),
          criarJogo(47, 5, new Date(2023, 4, 10, 19, 0, 0), 'INT', 'CAP', '', 0, 2, 2, 0, 4, 0, true),
          criarJogo(50, 5, new Date(2023, 4, 10, 20, 0, 0), 'CUI', 'CAM', '', 0, 4, 1, 0, 2, 0, true),
          criarJogo(41, 5, new Date(2023, 4, 10, 20, 0, 0), 'FLA', 'GOI', '', 2, 0, 0, 0, 1, 0, true),
          criarJogo(43, 5, new Date(2023, 4, 10, 21, 0, 0), 'PAL', 'GRE', '', 4, 1, 2, 0, 4, 0, true),
          criarJogo(46, 5, new Date(2023, 4, 10, 21, 30, 0), 'CRU', 'FLU', '', 0, 2, 1, 0, 8, 1, true),
          criarJogo(48, 5, new Date(2023, 4, 11, 19, 0, 0), 'CFC', 'VAS', '', 1, 1, 2, 0, 1, 0, true),
          criarJogo(42, 5, new Date(2023, 4, 11, 19, 30, 0), 'BOT', 'COR', '', 3, 0, 1, 0, 2, 0, true),
          criarJogo(49, 5, new Date(2023, 4, 11, 20, 0, 0), 'FOR', 'SAO', '', 0, 0, 1, 1, 3, 1, true),
        ]
      },
      {
        id: 6,
        numero: 6,
        finalizada: true,
        jogos: [
          criarJogo(59, 6, new Date(2023, 4, 13, 16, 0, 0), 'BAH', 'FLA', '', 2, 3, 4, 2, 5, 0, true),
          criarJogo(53, 6, new Date(2023, 4, 13, 18, 30, 0), 'PAL', 'RBB', '', 1, 1, 2, 0, 4, 0, true),
          criarJogo(51, 6, new Date(2023, 4, 13, 18, 30, 0), 'FLU', 'CUI', '', 2, 0, 3, 0, 4, 0, true),
          criarJogo(56, 6, new Date(2023, 4, 13, 21, 0, 0), 'CAM', 'INT', '', 2, 0, 2, 0, 3, 0, true),
          criarJogo(52, 6, new Date(2023, 4, 14, 16, 0, 0), 'VAS', 'SAN', '', 0, 1, 4, 0, 2, 0, true),
          criarJogo(54, 6, new Date(2023, 4, 14, 16, 0, 0), 'COR', 'SAO', '', 1, 1, 2, 0, 4, 0, true),
          criarJogo(57, 6, new Date(2023, 4, 14, 16, 0, 0), 'GRE', 'FOR', '', 0, 0, 3, 0, 5, 0, true),
          criarJogo(58, 6, new Date(2023, 4, 14, 18, 30, 0), 'CAP', 'CFC', '', 3, 2, 2, 0, 3, 0, true),
          criarJogo(55, 6, new Date(2023, 4, 14, 18, 30, 0), 'GOI', 'BOT', '', 2, 1, 6, 0, 3, 0, true),
          criarJogo(60, 6, new Date(2023, 4, 14, 18, 30, 0), 'AME', 'CRU', '', 0, 4, 2, 0, 0, 0, true),
        ]
      },
      {
        id: 7,
        numero: 7,
        finalizada: false,
        jogos: [
          criarJogo(69, 7, new Date(2023, 4, 20, 16, 0, 0), 'BAH', 'GOI'),
          criarJogo(70, 7, new Date(2023, 4, 20, 16, 0, 0), 'AME', 'FOR'),
          criarJogo(65, 7, new Date(2023, 4, 20, 16, 0, 0), 'RBB', 'CAP'),
          criarJogo(68, 7, new Date(2023, 4, 20, 18, 30, 0), 'CFC', 'CAM'),
          criarJogo(63, 7, new Date(2023, 4, 20, 18, 30, 0), 'SAO', 'VAS'),
          criarJogo(62, 7, new Date(2023, 4, 20, 18, 30, 0), 'BOT', 'FLU'),
          criarJogo(64, 7, new Date(2023, 4, 20, 21, 0, 0), 'SAN', 'PAL'),
          criarJogo(61, 7, new Date(2023, 4, 21, 16, 0, 0), 'FLA', 'COR'),
          criarJogo(67, 7, new Date(2023, 4, 21, 18, 30, 0), 'GRE', 'INT'),
          criarJogo(66, 7, new Date(2023, 4, 22, 20, 0, 0), 'CRU', 'CUI', 'arena do jacaré'),
        ]
      },
      {
        id: 8,
        numero: 8,
        finalizada: false,
        jogos: [
          criarJogo(79, 8, new Date(2023, 4, 27, 16, 0, 0), 'FOR', 'VAS'),
          criarJogo(80, 8, new Date(2023, 4, 27, 18, 30, 0), 'CUI', 'CFC'),
          criarJogo(71, 8, new Date(2023, 4, 27, 18, 30, 0), 'FLA', 'CRU'),
          criarJogo(73, 8, new Date(2023, 4, 27, 21, 0, 0), 'SAO', 'GOI'),
          criarJogo(77, 8, new Date(2023, 4, 28, 16, 0, 0), 'INT', 'BAH'),
          criarJogo(74, 8, new Date(2023, 4, 28, 16, 0, 0), 'COR', 'FLU'),
          criarJogo(76, 8, new Date(2023, 4, 28, 18, 30, 0), 'CAM', 'PAL'),
          criarJogo(78, 8, new Date(2023, 4, 28, 18, 30, 0), 'CAP', 'GRE'),
          criarJogo(72, 8, new Date(2023, 4, 28, 19, 0, 0), 'BOT', 'AME'),
          criarJogo(75, 8, new Date(2023, 4, 29, 20, 0, 0), 'RBB', 'SAN'),
        ]
      },
      {
        id: 9,
        numero: 9,
        finalizada: false,
        jogos: [
          criarJogo(79, 9, new Date(2023, 5, 3, 16, 0, 0), 'FOR', 'BAH'),
          criarJogo(80, 9, new Date(2023, 5, 3, 18, 30, 0), 'CRU', 'CAM', 'parque do sabiá'),
          criarJogo(71, 9, new Date(2023, 5, 3, 18, 30, 0), 'CAP', 'BOT'),
          criarJogo(73, 9, new Date(2023, 5, 3, 18, 30, 0), 'AME', 'COR'),
          criarJogo(77, 9, new Date(2023, 5, 3, 21, 0, 0), 'SAN', 'INT'),
          criarJogo(74, 9, new Date(2023, 5, 4, 16, 0, 0), 'FLU', 'RBB'),
          criarJogo(76, 9, new Date(2023, 5, 4, 16, 0, 0), 'GRE', 'SAO'),
          criarJogo(78, 9, new Date(2023, 5, 4, 18, 30, 0), 'PAL', 'CFC'),
          criarJogo(72, 9, new Date(2023, 5, 4, 18, 30, 0), 'GOI', 'CUI'),
          criarJogo(75, 9, new Date(2023, 5, 5, 20, 0, 0), 'VAS', 'FLA'),
        ]
      },
      {
        id: 10,
        numero: 10,
        finalizada: false,
        jogos: [
          criarJogo(79, 10, new Date(2023, 5, 10, 16, 0, 0), 'CFC', 'SAN'),
          criarJogo(80, 10, new Date(2023, 5, 10, 18, 30, 0), 'BOT', 'FOR'),
          criarJogo(71, 10, new Date(2023, 5, 10, 18, 30, 0), 'COR', 'CUI'),
          criarJogo(73, 10, new Date(2023, 5, 10, 18, 30, 0), 'CAM', 'RBB', 'Mineirão'),
          criarJogo(77, 10, new Date(2023, 5, 10, 21, 0, 0), 'BAH', 'CRU'),
          criarJogo(74, 10, new Date(2023, 5, 11, 11, 0, 0), 'AME', 'CAP'),
          criarJogo(76, 10, new Date(2023, 5, 11, 16, 0, 0), 'SAO', 'PAL'),
          criarJogo(78, 10, new Date(2023, 5, 11, 16, 0, 0), 'INT', 'VAS'),
          criarJogo(72, 10, new Date(2023, 5, 11, 18, 30, 0), 'FLA', 'GRE'),
          criarJogo(75, 10, new Date(2023, 5, 11, 18, 30, 0), 'GOI', 'FLU'),
        ]
      },
      {
        id: 11,
        numero: 11,
        finalizada: false,
        jogos: [
          criarJogo(79, 11, new Date(2023, 5, 21, 19, 0, 0), 'SAO', 'CAP'),
          criarJogo(80, 11, new Date(2023, 5, 21, 19, 0, 0), 'CRU', 'FOR'),
          criarJogo(71, 11, new Date(2023, 5, 21, 20, 0, 0), 'SAN', 'COR'),
          criarJogo(73, 11, new Date(2023, 5, 21, 21, 30, 0), 'FLU', 'CAM'),
          criarJogo(77, 11, new Date(2023, 5, 21, 21, 30, 0), 'BAH', 'PAL'),
          criarJogo(74, 11, new Date(2023, 5, 22, 19, 0, 0), 'GRE', 'AME'),
          criarJogo(76, 11, new Date(2023, 5, 22, 20, 0, 0), 'VAS', 'GOI'),
          criarJogo(78, 11, new Date(2023, 5, 22, 20, 0, 0), 'CFC', 'INT'),
          criarJogo(72, 11, new Date(2023, 5, 22, 20, 0, 0), 'CUI', 'BOT'),
          criarJogo(75, 11, new Date(2023, 5, 22, 21, 30, 0), 'RBB', 'FLA'),
        ]
      },
      {
        id: 12,
        numero: 12,
        finalizada: false,
        jogos: []
      },
      {
        id: 13,
        numero: 13,
        finalizada: false,
        jogos: []
      },
      {
        id: 14,
        numero: 14,
        finalizada: false,
        jogos: []
      },
      {
        id: 15,
        numero: 15,
        finalizada: false,
        jogos: []
      },
      {
        id: 16,
        numero: 16,
        finalizada: false,
        jogos: []
      },
      {
        id: 17,
        numero: 17,
        finalizada: false,
        jogos: []
      },
      {
        id: 18,
        numero: 18,
        finalizada: false,
        jogos: []
      },
      {
        id: 19,
        numero: 19,
        finalizada: false,
        jogos: []
      }
    ];

    gravarRodadasLocalStorage(rodadas);
  }
  return rodadas;
}

export const gravarRodadasLocalStorage = (rodadas: IRodada[]) => {
  localStorage.setItem('rodadas', JSON.stringify(rodadas))
}

export const gravarJogoRodadaLocalStorage = (jogo: IJogo) => {

  let rodadas: IRodada[] = getRodadas();
  if (rodadas) {

    rodadas.map(rd => {
      if (rd.numero === jogo.numeroRodada) {

        let jogoRodada = rd.jogos.filter(j => j.id === jogo.id)[0];
        if (jogoRodada) {
          jogoRodada.cartoesAmarelosClubeMandante = Number(jogo.cartoesAmarelosClubeMandante);
          jogoRodada.cartoesVermelhosClubeMandante = Number(jogo.cartoesVermelhosClubeMandante);
          jogoRodada.cartoesAmarelosClubeVisitante = Number(jogo.cartoesAmarelosClubeVisitante);
          jogoRodada.cartoesVermelhosClubeVisitante = Number(jogo.cartoesVermelhosClubeVisitante);
          jogoRodada.golsClubeMandante = Number(jogo.golsClubeMandante);
          jogoRodada.golsClubeVisitante = Number(jogo.golsClubeVisitante);
          jogoRodada.finalizado = jogo.finalizado;
          jogoRodada.local = jogo.local;
          jogoRodada.data = new Date(jogo.data);
          jogoRodada.hora = getHorarioJogo(jogo.data);
        }
        else {
          jogoRodada = {
            clubeMandante: jogo.clubeMandante,
            clubeVisitante: jogo.clubeVisitante,
            id: jogo.id,
            hora: jogo.hora,
            numeroRodada: jogo.numeroRodada,
            data: new Date(jogo.data),
            cartoesAmarelosClubeMandante: Number(jogo.cartoesAmarelosClubeMandante),
            cartoesVermelhosClubeMandante: Number(jogo.cartoesVermelhosClubeMandante),
            cartoesAmarelosClubeVisitante: Number(jogo.cartoesAmarelosClubeVisitante),
            cartoesVermelhosClubeVisitante: Number(jogo.cartoesVermelhosClubeVisitante),
            golsClubeMandante: Number(jogo.golsClubeMandante),
            golsClubeVisitante: Number(jogo.golsClubeVisitante),
            finalizado: jogo.finalizado
          };
          rd.jogos.push(jogoRodada);
        }
        rd.finalizada = rd.jogos.filter(j => j.finalizado).length === 10;
      }
    })

  }
  else {
    rodadas = [
      {
        id: jogo.numeroRodada,
        numero: jogo.numeroRodada,
        finalizada: false,
        jogos: [jogo]
      }
    ]
  };

  gravarRodadasLocalStorage(rodadas);

}

export const gravarJogoLocalStorage = (jogos: IJogo[]) => {
  localStorage.setItem('jogos', JSON.stringify(jogos))
}