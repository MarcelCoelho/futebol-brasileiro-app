import { IDetalhesJogo, IEquipe, IEscalacao, IJogo } from "../interfaces/brasileirao/brasileirao.interface";
import { getElenco } from "./temporadas";
import { getTreinador } from "./treinadores";

export const detalhesJogos = (): IDetalhesJogo[] => {

  const detalhesJogo: IDetalhesJogo[] =
    [
      criarDetalheJogo4(),  // COR X CRU
      criarDetalheJogo6(),  // CAM X VAS
      criarDetalheJogo7(),  // GRE X SAN
      criarDetalheJogo10(), // AME X FLU
      criarDetalheJogo12(), // VAS X PAL
      criarDetalheJogo13(), // SAO X AME
      criarDetalheJogo14(), // SAN X CAM
      criarDetalheJogo16(), // CRU X GRE
      criarDetalheJogo21(), // FLA X BOT
      criarDetalheJogo23(), // COR X PAL
      criarDetalheJogo24(), // SAN X AME
      criarDetalheJogo25(), // RBB X CRU
      criarDetalheJogo29(), // FOR X FLU
      criarDetalheJogo30(), // CUI X GRE
      criarDetalheJogo31(), // FLU X VAS
      criarDetalheJogo32(), // BOT X CAM
      criarDetalheJogo34(), // COR X FOR
      criarDetalheJogo36(), // CRU X SAN
      criarDetalheJogo37(), // GRE X RBB
      criarDetalheJogo38(), // CAP X FLA
      criarDetalheJogo40(), // AME X CUI
      criarDetalheJogo45(), // RBB X AME
    ];

  return detalhesJogo;
}

const criarDetalheJogo4 = (): IDetalhesJogo => {

  const corinthians = getElenco(2023, 'COR');
  const cruzeiro = getElenco(2023, 'CRU');

  const escalacaoMandante: IEscalacao[] = [
    criarEscalacao(2023, 'COR', 'cássio', 0, 0, 0, 0, corinthians),
    criarEscalacao(2023, 'COR', 'fagner', 0, 0, 1, 0, corinthians),
    criarEscalacao(2023, 'COR', 'bruno méndez', 0, 0, 0, 0, corinthians),
    criarEscalacao(2023, 'COR', 'gil', 0, 0, 0, 0, corinthians),
    criarEscalacao(2023, 'COR', 'matheus bidu', 0, 0, 0, 0, corinthians),
    criarEscalacao(2023, 'COR', 'fausto vera', 0, 0, 1, 0, corinthians),
    criarEscalacao(2023, 'COR', 'roni', 0, 0, 1, 0, corinthians),
    criarEscalacao(2023, 'COR', 'giuliano', 0, 0, 0, 0, corinthians),
    criarEscalacao(2023, 'COR', 'barletta', 0, 0, 0, 0, corinthians),
    criarEscalacao(2023, 'COR', 'róger guedes', 1, 0, 1, 0, corinthians),
    criarEscalacao(2023, 'COR', 'yuri alberto', 0, 0, 0, 0, corinthians),
  ];

  const escalacaoVisitante: IEscalacao[] = [
    criarEscalacao(2023, 'CRU', 'rafael cabral', 0, 0, 0, 0, cruzeiro),
    criarEscalacao(2023, 'CRU', 'willian', 0, 0, 0, 0, cruzeiro),
    criarEscalacao(2023, 'CRU', 'oliveira', 1, 0, 1, 0, cruzeiro),
    criarEscalacao(2023, 'CRU', 'luciano castan', 0, 0, 0, 0, cruzeiro),
    criarEscalacao(2023, 'CRU', 'marlon', 0, 0, 0, 0, cruzeiro),
    criarEscalacao(2023, 'CRU', 'richard', 0, 0, 0, 0, cruzeiro),
    criarEscalacao(2023, 'CRU', 'ramiro', 0, 0, 1, 0, cruzeiro),
    criarEscalacao(2023, 'CRU', 'mateus vital', 0, 0, 0, 0, cruzeiro),
    criarEscalacao(2023, 'CRU', 'bruno rodrigues', 0, 0, 0, 0, cruzeiro),
    criarEscalacao(2023, 'CRU', 'wesley', 0, 0, 0, 0, cruzeiro),
    criarEscalacao(2023, 'CRU', 'gilberto', 0, 0, 1, 0, cruzeiro),
  ];

  const detalheJogo: IDetalhesJogo = {
    ano: 2023,
    idJogo: 4,
    idRodada: 1,
    mandante: {
      esquemaTatico: '4-4-2',
      treinador: getTreinador('fernando lázaro'),
      escalacao: escalacaoMandante,
      substituicoes: [
        {
          jogadorEntrou: criarEscalacao(2023, ' COR', 'du queiroz', 0, 0, 0, 0, corinthians),
          jogadorSaiu: criarEscalacao(2023, 'COR', 'fausto vera', 0, 0, 0, 0, corinthians)
        },
        {
          jogadorEntrou: criarEscalacao(2023, 'COR', 'cantillo', 0, 0, 0, 0, corinthians),
          jogadorSaiu: criarEscalacao(2023, 'COR', 'roni', 0, 0, 0, 0, corinthians)
        },
        {
          jogadorEntrou: criarEscalacao(2023, 'COR', 'matheus araújo', 1, 0, 0, 0, corinthians),
          jogadorSaiu: criarEscalacao(2023, 'COR', 'giuliano', 0, 0, 0, 0, corinthians)
        },
        {
          jogadorEntrou: criarEscalacao(2023, 'COR', 'adson', 0, 0, 0, 0, corinthians),
          jogadorSaiu: criarEscalacao(2023, 'COR', 'barletta', 0, 0, 0, 0, corinthians)
        }
      ]
    },
    visitante: {
      esquemaTatico: '4-3-3',
      treinador: cruzeiro.treinador,
      escalacao: escalacaoVisitante,
      substituicoes: [
        {
          jogadorSaiu: criarEscalacao(2023, 'CRU', 'ramiro', 0, 0, 0, 0, cruzeiro),
          jogadorEntrou: criarEscalacao(2023, 'CRU', 'felipe machado', 0, 0, 0, 0, cruzeiro)
        },
        {
          jogadorSaiu: criarEscalacao(2023, 'CRU', 'mateus vital', 0, 0, 0, 0, cruzeiro),
          jogadorEntrou: criarEscalacao(2023, 'CRU', 'rafael bilu', 0, 0, 0, 0, cruzeiro)
        },
        {
          jogadorSaiu: criarEscalacao(2023, 'CRU', 'wesley', 0, 0, 0, 0, cruzeiro),
          jogadorEntrou: criarEscalacao(2023, 'CRU', 'nikão', 0, 0, 1, 0, cruzeiro)
        }
      ]
    }
  };

  return detalheJogo;
}

const criarDetalheJogo6 = (): IDetalhesJogo => {

  const atletico = getElenco(2023, 'CAM');
  const vasco = getElenco(2023, 'VAS');

  const escalacaoMandante: IEscalacao[] = [
    criarEscalacao(2023, 'CAM', 'everson', 0, 0, 0, 0, atletico),
    criarEscalacao(2023, 'CAM', 'renzo saravia', 0, 0, 1, 0, atletico),
    criarEscalacao(2023, 'CAM', 'mauricio lemos', 1, 0, 1, 0, atletico),
    criarEscalacao(2023, 'CAM', 'jemerson', 0, 0, 0, 0, atletico),
    criarEscalacao(2023, 'CAM', 'rubens', 0, 0, 0, 0, atletico),
    criarEscalacao(2023, 'CAM', 'otávio', 0, 0, 1, 0, atletico),
    criarEscalacao(2023, 'CAM', 'hyoran', 0, 0, 0, 0, atletico),
    criarEscalacao(2023, 'CAM', 'matías zaracho', 0, 0, 1, 0, atletico),
    criarEscalacao(2023, 'CAM', 'paulinho', 0, 0, 0, 0, atletico),
    criarEscalacao(2023, 'CAM', 'hulk', 0, 0, 1, 0, atletico),
    criarEscalacao(2023, 'CAM', 'cristian pavón', 0, 0, 1, 0, atletico),
  ];

  const escalacaoVisitante: IEscalacao[] = [
    criarEscalacao(2023, 'VAS', 'léo jardim', 0, 0, 0, 0, vasco),
    criarEscalacao(2023, 'VAS', 'puma rodriguez', 0, 0, 0, 0, vasco),
    criarEscalacao(2023, 'VAS', 'robson', 0, 0, 1, 0, vasco),
    criarEscalacao(2023, 'VAS', 'léo', 0, 0, 0, 0, vasco),
    criarEscalacao(2023, 'VAS', 'lucas piton', 0, 0, 0, 0, vasco),
    criarEscalacao(2023, 'VAS', 'rodrigo', 0, 0, 1, 0, vasco),
    criarEscalacao(2023, 'VAS', 'jair', 0, 0, 0, 0, vasco),
    criarEscalacao(2023, 'VAS', 'andrey santos', 1, 0, 1, 0, vasco),
    criarEscalacao(2023, 'VAS', 'gabriel pec', 1, 0, 1, 0, vasco),
    criarEscalacao(2023, 'VAS', 'pedro raul', 0, 0, 1, 0, vasco),
    criarEscalacao(2023, 'VAS', 'alex teixeira', 0, 0, 0, 0, vasco),
  ];

  const detalheJogo: IDetalhesJogo = {
    ano: 2023,
    idJogo: 6,
    idRodada: 1,
    mandante: {
      esquemaTatico: '4-3-3',
      treinador: atletico.treinador,
      escalacao: escalacaoMandante,
      substituicoes: [
        {
          jogadorSaiu: criarEscalacao(2023, 'CAM', 'rubens', 0, 0, 0, 0, atletico),
          jogadorEntrou: criarEscalacao(2023, 'CAM', 'patrick', 0, 0, 0, 0, atletico)
        },
        {
          jogadorSaiu: criarEscalacao(2023, 'CAM', 'otávio', 0, 0, 0, 0, atletico),
          jogadorEntrou: criarEscalacao(2023, 'CAM', 'edenilson', 0, 0, 0, 0, atletico)
        },
        {
          jogadorSaiu: criarEscalacao(2023, 'CAM', 'hyoran', 0, 0, 0, 0, atletico),
          jogadorEntrou: criarEscalacao(2023, 'CAM', 'pedrinho', 0, 0, 0, 0, atletico)
        },
        {
          jogadorSaiu: criarEscalacao(2023, 'CAM', 'cristian pavón', 0, 0, 0, 0, atletico),
          jogadorEntrou: criarEscalacao(2023, 'CAM', 'isaac', 0, 0, 0, 0, atletico)
        }
      ],
    },
    visitante: {
      esquemaTatico: '4-5-1',
      treinador: vasco.treinador,
      escalacao: escalacaoVisitante,
      substituicoes: [
        {
          jogadorSaiu: criarEscalacao(2023, 'VAS', 'lucas piton', 0, 0, 0, 0, vasco),
          jogadorEntrou: criarEscalacao(2023, 'VAS', 'paulo victor', 0, 0, 0, 0, vasco)
        },
        {
          jogadorSaiu: criarEscalacao(2023, 'VAS', 'andrey santos', 0, 0, 0, 0, vasco),
          jogadorEntrou: criarEscalacao(2023, 'VAS', 'barros', 0, 0, 0, 0, vasco)
        },
        {
          jogadorSaiu: criarEscalacao(2023, 'VAS', 'jair', 0, 0, 0, 0, vasco),
          jogadorEntrou: criarEscalacao(2023, 'VAS', 'matías galarza', 0, 0, 0, 0, vasco)
        },
        {
          jogadorSaiu: criarEscalacao(2023, 'VAS', 'alex teixeira', 0, 0, 0, 0, vasco),
          jogadorEntrou: criarEscalacao(2023, 'VAS', 'marlon gomes', 0, 0, 0, 0, vasco)
        },
        {
          jogadorSaiu: criarEscalacao(2023, 'VAS', 'gabriel pec', 0, 0, 0, 0, vasco),
          jogadorEntrou: criarEscalacao(2023, 'VAS', 'figueiredo', 0, 0, 0, 0, vasco)
        },
      ]
    }
  };

  return detalheJogo;
}

const criarDetalheJogo7 = (): IDetalhesJogo => {

  const gremio = getElenco(2023, 'GRE');
  const santos = getElenco(2023, 'SAN');

  const escalacaoMandante: IEscalacao[] = [
    criarEscalacao(2023, 'GRE', 'adriel', 0, 0, 0, 0, gremio),
    criarEscalacao(2023, 'GRE', 'joão pedro', 1, 0, 0, 0, gremio),
    criarEscalacao(2023, 'GRE', 'bruno alves', 0, 0, 0, 0, gremio),
    criarEscalacao(2023, 'GRE', 'kannemann', 0, 0, 1, 0, gremio),
    criarEscalacao(2023, 'GRE', 'diogo barbosa', 0, 0, 0, 0, gremio),
    criarEscalacao(2023, 'GRE', 'villasanti', 0, 0, 0, 0, gremio),
    criarEscalacao(2023, 'GRE', 'bitello', 0, 0, 0, 0, gremio),
    criarEscalacao(2023, 'GRE', 'cristaldo', 0, 0, 0, 0, gremio),
    criarEscalacao(2023, 'GRE', 'zinho', 0, 0, 0, 0, gremio),
    criarEscalacao(2023, 'GRE', 'luis suárez', 0, 0, 0, 0, gremio),
    criarEscalacao(2023, 'GRE', 'vina', 0, 0, 1, 0, gremio),
  ];

  const escalacaoVisitante: IEscalacao[] = [
    criarEscalacao(2023, 'SAN', 'joão paulo', 0, 0, 0, 0, santos),
    criarEscalacao(2023, 'SAN', 'nathan', 0, 0, 0, 0, santos),
    criarEscalacao(2023, 'SAN', 'messias', 0, 0, 0, 0, santos),
    criarEscalacao(2023, 'SAN', 'eduardo bauermann', 0, 0, 0, 0, santos),
    criarEscalacao(2023, 'SAN', 'felipe jonatan', 0, 0, 0, 0, santos),
    criarEscalacao(2023, 'SAN', 'dodi', 0, 0, 1, 0, santos),
    criarEscalacao(2023, 'SAN', 'camacho', 0, 0, 1, 0, santos),
    criarEscalacao(2023, 'SAN', 'lucas lima', 0, 0, 0, 0, santos),
    criarEscalacao(2023, 'SAN', 'dani', 0, 0, 0, 0, santos),
    criarEscalacao(2023, 'SAN', 'lucas barbosa', 0, 0, 0, 0, santos),
    criarEscalacao(2023, 'SAN', 'marcos leonardo', 0, 0, 0, 0, santos),
  ];

  const detalheJogo: IDetalhesJogo = {
    ano: 2023,
    idJogo: 7,
    idRodada: 1,
    mandante: {
      esquemaTatico: '4-3-3',
      treinador: gremio.treinador,
      escalacao: escalacaoMandante,
      substituicoes: [
        {
          jogadorSaiu: criarEscalacao(2023, 'GRE', 'joão pedro', 0, 0, 0, 0, gremio),
          jogadorEntrou: criarEscalacao(2023, 'GRE', 'thomas luciano', 0, 0, 0, 0, gremio),
        },
        {
          jogadorSaiu: criarEscalacao(2023, 'GRE', 'villasanti', 0, 0, 0, 0, gremio),
          jogadorEntrou: criarEscalacao(2023, 'GRE', 'darlan', 0, 0, 1, 0, gremio),
        },
        {
          jogadorSaiu: criarEscalacao(2023, 'GRE', 'cristaldo', 0, 0, 0, 0, gremio),
          jogadorEntrou: criarEscalacao(2023, 'GRE', 'nathan', 0, 0, 0, 0, gremio),
        },
        {
          jogadorSaiu: criarEscalacao(2023, 'GRE', 'zinho', 0, 0, 0, 0, gremio),
          jogadorEntrou: criarEscalacao(2023, 'GRE', 'andré henrique', 0, 0, 0, 0, gremio),
        },
        {
          jogadorSaiu: criarEscalacao(2023, 'GRE', 'vina', 0, 0, 0, 0, gremio),
          jogadorEntrou: criarEscalacao(2023, 'GRE', 'everton galdino', 0, 0, 0, 0, gremio),
        }
      ]
    },
    visitante: {
      esquemaTatico: '4-3-3',
      treinador: santos.treinador,
      escalacao: escalacaoVisitante,
      substituicoes: [
        {
          jogadorSaiu: criarEscalacao(2023, 'SAN', 'dodi', 0, 0, 0, 0, santos),
          jogadorEntrou: criarEscalacao(2023, 'SAN', 'bruno mezenga', 0, 0, 1, 0, santos),
        },
        {
          jogadorSaiu: criarEscalacao(2023, 'SAN', 'camacho', 0, 0, 0, 0, santos),
          jogadorEntrou: criarEscalacao(2023, 'SAN', 'rodrigo fernandez', 0, 0, 0, 0, santos),
        },
        {
          jogadorSaiu: criarEscalacao(2023, 'SAN', 'lucas lima', 0, 0, 0, 0, santos),
          jogadorEntrou: criarEscalacao(2023, 'SAN', 'miguelito', 0, 0, 0, 0, santos)
        }
        ,
        {
          jogadorSaiu: criarEscalacao(2023, 'SAN', 'dani', 0, 0, 0, 0, santos),
          jogadorEntrou: criarEscalacao(2023, 'SAN', 'ângelo', 0, 0, 0, 0, santos)
        },
        {
          jogadorSaiu: criarEscalacao(2023, 'SAN', 'lucas barbosa', 0, 0, 0, 0, santos),
          jogadorEntrou: criarEscalacao(2023, 'SAN', 'soteldo', 0, 0, 0, 1, santos)
        },
      ],
    }
  };

  return detalheJogo;
}

const criarDetalheJogo10 = (): IDetalhesJogo => {

  const america = getElenco(2023, 'AME');
  const fluminense = getElenco(2023, 'FLU');

  const escalacaoMandante: IEscalacao[] = [
    criarEscalacao(2023, 'AME', 'matheus cavichioli', 0, 0, 0, 0, america),
    criarEscalacao(2023, 'AME', 'nino paraiba', 0, 0, 1, 0, america),
    criarEscalacao(2023, 'AME', 'éder', 0, 0, 1, 0, america),
    criarEscalacao(2023, 'AME', 'iago maidana', 0, 0, 1, 0, america),
    criarEscalacao(2023, 'AME', 'marlon', 0, 0, 0, 0, america),
    criarEscalacao(2023, 'AME', 'juninho', 0, 0, 0, 0, america),
    criarEscalacao(2023, 'AME', 'alê', 0, 0, 0, 0, america),
    criarEscalacao(2023, 'AME', 'martinez', 0, 0, 0, 0, america),
    criarEscalacao(2023, 'AME', 'felipe azevedo', 0, 0, 0, 0, america),
    criarEscalacao(2023, 'AME', 'h. almeida', 0, 0, 0, 0, america),
    criarEscalacao(2023, 'AME', 'everaldo', 0, 0, 0, 0, america),
  ];

  const escalacaoVisitante: IEscalacao[] = [
    criarEscalacao(2023, 'FLU', 'fábio', 0, 0, 0, 0, fluminense),
    criarEscalacao(2023, 'FLU', 'samuel xavier', 0, 0, 0, 0, fluminense),
    criarEscalacao(2023, 'FLU', 'nino', 0, 0, 0, 0, fluminense),
    criarEscalacao(2023, 'FLU', 'vitor mendes', 0, 0, 1, 0, fluminense),
    criarEscalacao(2023, 'FLU', 'alexsander', 0, 0, 0, 0, fluminense),
    criarEscalacao(2023, 'FLU', 'andré', 0, 0, 0, 0, fluminense),
    criarEscalacao(2023, 'FLU', 'lima', 0, 0, 0, 0, fluminense),
    criarEscalacao(2023, 'FLU', 'ganso', 0, 0, 0, 0, fluminense),
    criarEscalacao(2023, 'FLU', 'gabriel pirani', 0, 0, 0, 0, fluminense),
    criarEscalacao(2023, 'FLU', 'germán cano', 1, 0, 0, 0, fluminense),
    criarEscalacao(2023, 'FLU', 'john kennedy', 1, 0, 1, 0, fluminense),
  ];

  const detalheJogo: IDetalhesJogo = {
    ano: 2023,
    idJogo: 10,
    idRodada: 1,
    mandante: {
      esquemaTatico: '4-3-3',
      treinador: america.treinador,
      escalacao: escalacaoMandante,
      substituicoes: [
        {
          jogadorSaiu: criarEscalacao(2023, 'AME', 'iago maidana', 0, 0, 0, 0, america),
          jogadorEntrou: criarEscalacao(2023, 'AME', 'ricardo silva', 0, 0, 0, 0, america),
        },
        {
          jogadorSaiu: criarEscalacao(2023, 'AME', 'martinez', 0, 0, 0, 0, america),
          jogadorEntrou: criarEscalacao(2023, 'AME', 'lucas kal', 0, 0, 0, 0, america),
        },
        {
          jogadorSaiu: criarEscalacao(2023, 'AME', 'felipe azevedo', 0, 0, 0, 0, america),
          jogadorEntrou: criarEscalacao(2023, 'AME', 'matheusinho', 0, 0, 0, 0, america),
        },
        {
          jogadorSaiu: criarEscalacao(2023, 'AME', 'h. almeida', 0, 0, 0, 0, america),
          jogadorEntrou: criarEscalacao(2023, 'AME', 'w. paulista', 0, 0, 0, 0, america),
        },
        {
          jogadorSaiu: criarEscalacao(2023, 'AME', 'everaldo', 0, 0, 0, 0, america),
          jogadorEntrou: criarEscalacao(2023, 'AME', 'adyson', 0, 0, 0, 0, america),
        }
      ]
    },
    visitante: {
      esquemaTatico: '4-3-3',
      treinador: fluminense.treinador,
      escalacao: escalacaoVisitante,
      substituicoes: [
        {
          jogadorSaiu: criarEscalacao(2023, 'FLU', 'nino', 0, 0, 0, 0, fluminense),
          jogadorEntrou: criarEscalacao(2023, 'FLU', 'david braz', 0, 0, 0, 0, fluminense),
        },
        {
          jogadorSaiu: criarEscalacao(2023, 'FLU', 'alexsander', 0, 0, 0, 0, fluminense),
          jogadorEntrou: criarEscalacao(2023, 'FLU', 'guga', 0, 0, 0, 0, fluminense),
        },
        {
          jogadorSaiu: criarEscalacao(2023, 'FLU', 'ganso', 0, 0, 0, 0, fluminense),
          jogadorEntrou: criarEscalacao(2023, 'FLU', 'thiago santos', 0, 0, 0, 0, fluminense),
        },
        {
          jogadorSaiu: criarEscalacao(2023, 'FLU', 'gabriel pirani', 0, 0, 0, 0, fluminense),
          jogadorEntrou: criarEscalacao(2023, 'FLU', 'lelê', 1, 0, 0, 0, fluminense),
        },
        {
          jogadorSaiu: criarEscalacao(2023, 'FLU', 'germán cano', 0, 0, 0, 0, fluminense),
          jogadorEntrou: criarEscalacao(2023, 'FLU', 'keno', 0, 0, 0, 0, fluminense),
        },
      ],
    }
  };

  return detalheJogo;
}

const criarDetalheJogo13 = (): IDetalhesJogo => {

  const saopaulo = getElenco(2023, 'SAO');
  const america = getElenco(2023, 'AME');

  const escalacaoMandante: IEscalacao[] = [
    criarEscalacao(2023, 'SAO', 'rafael', 0, 0, 0, 0, saopaulo),
    criarEscalacao(2023, 'SAO', 'raí ramos', 0, 0, 1, 0, saopaulo),
    criarEscalacao(2023, 'SAO', 'arboleda', 0, 0, 0, 0, saopaulo),
    criarEscalacao(2023, 'SAO', 'lucas beraldo', 0, 0, 0, 0, saopaulo),
    criarEscalacao(2023, 'SAO', 'patryck', 0, 0, 1, 0, saopaulo),
    criarEscalacao(2023, 'SAO', 'rodrigo nestor', 0, 0, 0, 0, saopaulo),
    criarEscalacao(2023, 'SAO', 'luan', 0, 0, 0, 0, saopaulo),
    criarEscalacao(2023, 'SAO', 'pablo maia', 0, 0, 1, 0, saopaulo),
    criarEscalacao(2023, 'SAO', 'michel araujo', 0, 0, 0, 0, saopaulo),
    criarEscalacao(2023, 'SAO', 'calleri', 1, 0, 0, 0, saopaulo),
    criarEscalacao(2023, 'SAO', 'luciano', 1, 0, 1, 0, saopaulo),
  ];

  const escalacaoVisitante: IEscalacao[] = [
    criarEscalacao(2023, 'AME', 'matheus cavichioli', 0, 0, 0, 0, america),
    criarEscalacao(2023, 'AME', 'nino paraiba', 0, 0, 0, 0, america),
    criarEscalacao(2023, 'AME', 'éder', 0, 0, 1, 0, america),
    criarEscalacao(2023, 'AME', 'ricardo silva', 0, 0, 0, 0, america),
    criarEscalacao(2023, 'AME', 'marlon', 0, 0, 0, 0, america),
    criarEscalacao(2023, 'AME', 'juninho', 0, 0, 0, 0, america),
    criarEscalacao(2023, 'AME', 'lucas kal', 0, 0, 1, 0, america),
    criarEscalacao(2023, 'AME', 'martinez', 0, 0, 0, 0, america),
    criarEscalacao(2023, 'AME', 'matheusinho', 0, 0, 0, 0, america),
    criarEscalacao(2023, 'AME', 'aloísio', 0, 0, 0, 0, america),
    criarEscalacao(2023, 'AME', 'everaldo', 0, 0, 1, 0, america),
  ];

  const detalheJogo: IDetalhesJogo = {
    ano: 2023,
    idJogo: 13,
    idRodada: 2,
    mandante: {
      esquemaTatico: '4-4-2',
      treinador: saopaulo.treinador,
      escalacao: escalacaoMandante,
      substituicoes: [
        {
          jogadorSaiu: criarEscalacao(2023, 'SAO', 'patryck', 0, 0, 0, 0, saopaulo),
          jogadorEntrou: criarEscalacao(2023, 'SAO', 'caio paulista', 0, 0, 0, 0, saopaulo),
        },
        {
          jogadorSaiu: criarEscalacao(2023, 'SAO', 'rodrigo nestor', 0, 0, 0, 0, saopaulo),
          jogadorEntrou: criarEscalacao(2023, 'SAO', 'alisson', 0, 0, 0, 0, saopaulo),
        },
        {
          jogadorSaiu: criarEscalacao(2023, 'SAO', 'luan', 0, 0, 0, 0, saopaulo),
          jogadorEntrou: criarEscalacao(2023, 'SAO', 'gabriel neves', 0, 0, 0, 0, saopaulo),
        },
        {
          jogadorSaiu: criarEscalacao(2023, 'SAO', 'michel araujo', 0, 0, 0, 0, saopaulo),
          jogadorEntrou: criarEscalacao(2023, 'SAO', 'wellington rato', 0, 0, 0, 0, saopaulo),
        },
        {
          jogadorSaiu: criarEscalacao(2023, 'SAO', 'luciano', 0, 0, 0, 0, saopaulo),
          jogadorEntrou: criarEscalacao(2023, 'SAO', 'marcos paulo', 1, 0, 1, 0, saopaulo),
        },
      ]
    },
    visitante: {
      esquemaTatico: '4-3-3',
      treinador: america.treinador,
      escalacao: escalacaoVisitante,
      substituicoes: [
        {
          jogadorSaiu: criarEscalacao(2023, 'AME', 'nino paraiba', 0, 0, 0, 0, america),
          jogadorEntrou: criarEscalacao(2023, 'AME', 'marcinho', 0, 0, 0, 0, america),
        },
        {
          jogadorSaiu: criarEscalacao(2023, 'AME', 'martinez', 0, 0, 0, 0, america),
          jogadorEntrou: criarEscalacao(2023, 'AME', 'h. almeida', 0, 0, 0, 0, america),
        },
        {
          jogadorSaiu: criarEscalacao(2023, 'AME', 'matheusinho', 0, 0, 0, 0, america),
          jogadorEntrou: criarEscalacao(2023, 'AME', 'felipe azevedo', 0, 0, 0, 0, america),
        },
        {
          jogadorSaiu: criarEscalacao(2023, 'AME', 'everaldo', 0, 0, 0, 0, america),
          jogadorEntrou: criarEscalacao(2023, 'AME', 'adyson', 0, 0, 0, 0, america),
        },
        {
          jogadorSaiu: criarEscalacao(2023, 'AME', 'aloísio', 0, 0, 0, 0, america),
          jogadorEntrou: criarEscalacao(2023, 'AME', 'w. paulista', 0, 0, 0, 0, america),
        },
      ],
    }
  };

  return detalheJogo;
}

const criarDetalheJogo12 = (): IDetalhesJogo => {

  const vasco = getElenco(2023, 'VAS');
  const palmeiras = getElenco(2023, 'PAL');

  const escalacaoMandante: IEscalacao[] = [
    criarEscalacao(2023, 'VAS', 'léo jardim', 0, 0, 0, 0, vasco),
    criarEscalacao(2023, 'VAS', 'puma rodriguez', 0, 0, 0, 0, vasco),
    criarEscalacao(2023, 'VAS', 'robson', 0, 0, 0, 0, vasco),
    criarEscalacao(2023, 'VAS', 'léo', 0, 0, 0, 0, vasco),
    criarEscalacao(2023, 'VAS', 'lucas piton', 0, 0, 1, 0, vasco),
    criarEscalacao(2023, 'VAS', 'rodrigo', 0, 0, 0, 0, vasco),
    criarEscalacao(2023, 'VAS', 'jair', 0, 0, 1, 0, vasco),
    criarEscalacao(2023, 'VAS', 'andrey santos', 0, 0, 0, 0, vasco),
    criarEscalacao(2023, 'VAS', 'gabriel pec', 1, 0, 1, 0, vasco),
    criarEscalacao(2023, 'VAS', 'pedro raul', 1, 0, 1, 0, vasco),
    criarEscalacao(2023, 'VAS', 'alex teixeira', 0, 0, 0, 0, vasco),
  ];

  const escalacaoVisitante: IEscalacao[] = [
    criarEscalacao(2023, 'PAL', 'weverton', 0, 0, 0, 0, palmeiras),
    criarEscalacao(2023, 'PAL', 'gustavo garcia', 0, 0, 0, 0, palmeiras),
    criarEscalacao(2023, 'PAL', 'gustavo gómez', 0, 0, 0, 0, palmeiras),
    criarEscalacao(2023, 'PAL', 'murilo', 0, 0, 1, 0, palmeiras),
    criarEscalacao(2023, 'PAL', 'piquerez', 0, 0, 1, 0, palmeiras),
    criarEscalacao(2023, 'PAL', 'zé rafael', 0, 0, 1, 0, palmeiras),
    criarEscalacao(2023, 'PAL', 'gabriel menino', 0, 0, 1, 0, palmeiras),
    criarEscalacao(2023, 'PAL', 'richard rios', 0, 0, 0, 0, palmeiras),
    criarEscalacao(2023, 'PAL', 'artur', 1, 0, 0, 0, palmeiras),
    criarEscalacao(2023, 'PAL', 'rafael navarro', 1, 0, 0, 0, palmeiras),
    criarEscalacao(2023, 'PAL', 'jhon jhon', 0, 0, 0, 0, palmeiras),
  ];

  const detalheJogo: IDetalhesJogo = {
    ano: 2023,
    idJogo: 12,
    idRodada: 2,
    mandante: {
      esquemaTatico: '',
      treinador: vasco.treinador,
      escalacao: escalacaoMandante,
      substituicoes: [
        {
          jogadorSaiu: criarEscalacao(2023, 'VAS', 'robson', 0, 0, 0, 0, vasco),
          jogadorEntrou: criarEscalacao(2023, 'VAS', 'manuel capasso', 0, 0, 0, 0, vasco)
        },
        {
          jogadorSaiu: criarEscalacao(2023, 'VAS', 'rodrigo', 0, 0, 0, 0, vasco),
          jogadorEntrou: criarEscalacao(2023, 'VAS', 'marlon gomes', 0, 0, 0, 0, vasco)
        },
        {
          jogadorSaiu: criarEscalacao(2023, 'VAS', 'jair', 0, 0, 0, 0, vasco),
          jogadorEntrou: criarEscalacao(2023, 'VAS', 'matías galarza', 0, 0, 0, 0, vasco)
        },
        {
          jogadorSaiu: criarEscalacao(2023, 'VAS', 'gabriel pec', 0, 0, 0, 0, vasco),
          jogadorEntrou: criarEscalacao(2023, 'VAS', 'luca orellano', 0, 0, 0, 0, vasco)
        },
        {
          jogadorSaiu: criarEscalacao(2023, 'VAS', 'alex teixeira', 0, 0, 0, 0, vasco),
          jogadorEntrou: criarEscalacao(2023, 'VAS', 'figueiredo', 0, 0, 0, 0, vasco)
        }
      ],
    },
    visitante: {
      esquemaTatico: '',
      treinador: palmeiras.treinador,
      escalacao: escalacaoVisitante,
      substituicoes: [
        {
          jogadorSaiu: criarEscalacao(2023, 'PAL', 'gabriel menino', 0, 0, 0, 0, palmeiras),
          jogadorEntrou: criarEscalacao(2023, 'PAL', 'flaco lópez', 0, 0, 0, 0, palmeiras)
        },
        {
          jogadorSaiu: criarEscalacao(2023, 'PAL', 'richard rios', 0, 0, 0, 0, palmeiras),
          jogadorEntrou: criarEscalacao(2023, 'PAL', 'fabinho', 0, 0, 0, 0, palmeiras)
        },
        {
          jogadorSaiu: criarEscalacao(2023, 'PAL', 'artur', 0, 0, 0, 0, palmeiras),
          jogadorEntrou: criarEscalacao(2023, 'PAL', 'luis guilherme', 0, 0, 0, 0, palmeiras)
        },
        {
          jogadorSaiu: criarEscalacao(2023, 'PAL', 'rafael navarro', 0, 0, 0, 0, palmeiras),
          jogadorEntrou: criarEscalacao(2023, 'PAL', 'endrick', 0, 0, 0, 0, palmeiras)
        },
        {
          jogadorSaiu: criarEscalacao(2023, 'PAL', 'dudu', 0, 0, 0, 0, palmeiras),
          jogadorEntrou: criarEscalacao(2023, 'PAL', 'jhon jhon', 0, 0, 0, 0, palmeiras)
        },
      ]
    }
  };

  return detalheJogo;
}

const criarDetalheJogo14 = (): IDetalhesJogo => {

  const santos = getElenco(2023, 'SAN');
  const atletico = getElenco(2023, 'CAM');

  const escalacaoMandante: IEscalacao[] = [
    criarEscalacao(2023, 'SAN', 'joão paulo', 0, 0, 0, 0, santos),
    criarEscalacao(2023, 'SAN', 'nathan', 0, 0, 0, 0, santos),
    criarEscalacao(2023, 'SAN', 'messias', 0, 0, 0, 0, santos),
    criarEscalacao(2023, 'SAN', 'eduardo bauermann', 0, 0, 0, 0, santos),
    criarEscalacao(2023, 'SAN', 'lucas pires', 0, 0, 0, 0, santos),
    criarEscalacao(2023, 'SAN', 'rodrigo fernandez', 0, 0, 1, 0, santos),
    criarEscalacao(2023, 'SAN', 'dodi', 0, 0, 1, 0, santos),
    criarEscalacao(2023, 'SAN', 'lucas lima', 0, 0, 0, 0, santos),
    criarEscalacao(2023, 'SAN', 'ângelo', 0, 0, 0, 0, santos),
    criarEscalacao(2023, 'SAN', 'dani', 0, 0, 0, 0, santos),
    criarEscalacao(2023, 'SAN', 'marcos leonardo', 0, 0, 0, 0, santos),
  ];

  const escalacaoVisitante: IEscalacao[] = [
    criarEscalacao(2023, 'CAM', 'everson', 0, 0, 0, 0, atletico),
    criarEscalacao(2023, 'CAM', 'renzo saravia', 0, 0, 0, 0, atletico),
    criarEscalacao(2023, 'CAM', 'bruno fuchs', 0, 0, 0, 0, atletico),
    criarEscalacao(2023, 'CAM', 'mauricio lemos', 0, 0, 0, 0, atletico),
    criarEscalacao(2023, 'CAM', 'rubens', 0, 0, 0, 0, atletico),
    criarEscalacao(2023, 'CAM', 'otávio', 0, 0, 1, 0, atletico),
    criarEscalacao(2023, 'CAM', 'matías zaracho', 0, 0, 0, 0, atletico),
    criarEscalacao(2023, 'CAM', 'edenilson', 0, 0, 0, 0, atletico),
    criarEscalacao(2023, 'CAM', 'hyoran', 0, 0, 1, 0, atletico),
    criarEscalacao(2023, 'CAM', 'paulinho', 0, 0, 0, 0, atletico),
    criarEscalacao(2023, 'CAM', 'hulk', 0, 0, 0, 0, atletico),
  ];


  const detalheJogo: IDetalhesJogo = {
    ano: 2023,
    idJogo: 14,
    idRodada: 2,
    mandante: {
      esquemaTatico: '4-3-3',
      treinador: santos.treinador,
      escalacao: escalacaoMandante,
      substituicoes: [
        {
          jogadorSaiu: criarEscalacao(2023, 'SAN', 'nathan', 0, 0, 0, 0, santos),
          jogadorEntrou: criarEscalacao(2023, 'SAN', 'gabriel inocêncio', 0, 0, 0, 0, santos),
        },
        {
          jogadorSaiu: criarEscalacao(2023, 'SAN', 'ângelo', 0, 0, 0, 0, santos),
          jogadorEntrou: criarEscalacao(2023, 'SAN', 'miguelito', 0, 0, 0, 0, santos),
        },
        {
          jogadorSaiu: criarEscalacao(2023, 'SAN', 'marcos leonardo', 0, 0, 0, 0, santos),
          jogadorEntrou: criarEscalacao(2023, 'SAN', 'bruno mezenga', 0, 0, 0, 0, santos),
        },
        {
          jogadorSaiu: criarEscalacao(2023, 'SAN', 'dani', 0, 0, 0, 0, santos),
          jogadorEntrou: criarEscalacao(2023, 'SAN', 'luan dias', 0, 0, 0, 0, santos),
        },
      ]
    },
    visitante: {
      esquemaTatico: '4-4-2',
      treinador: atletico.treinador,
      escalacao: escalacaoVisitante,
      substituicoes: [
        {
          jogadorSaiu: criarEscalacao(2023, 'CAM', 'renzo saravia', 0, 0, 0, 0, atletico),
          jogadorEntrou: criarEscalacao(2023, 'CAM', 'mariano', 0, 0, 1, 0, atletico),
        },
        {
          jogadorSaiu: criarEscalacao(2023, 'CAM', 'mauricio lemos', 0, 0, 0, 0, atletico),
          jogadorEntrou: criarEscalacao(2023, 'CAM', 'jemerson', 0, 0, 0, 0, atletico),
        },
        {
          jogadorSaiu: criarEscalacao(2023, 'CAM', 'rubens', 0, 0, 0, 0, atletico),
          jogadorEntrou: criarEscalacao(2023, 'CAM', 'eduardo vargas', 0, 0, 0, 0, atletico),
        },
        {
          jogadorSaiu: criarEscalacao(2023, 'CAM', 'edenilson', 0, 0, 0, 0, atletico),
          jogadorEntrou: criarEscalacao(2023, 'CAM', 'cristian pavón', 0, 0, 0, 0, atletico),
        },
        {
          jogadorSaiu: criarEscalacao(2023, 'CAM', 'hyoran', 0, 0, 0, 0, atletico),
          jogadorEntrou: criarEscalacao(2023, 'CAM', 'patrick', 0, 0, 0, 0, atletico),
        },
      ],
    }
  };

  return detalheJogo;
}

const criarDetalheJogo16 = (): IDetalhesJogo => {

  const cruzeiro = getElenco(2023, 'CRU');
  const gremio = getElenco(2023, 'GRE');

  const escalacaoMandante: IEscalacao[] = [
    criarEscalacao(2023, 'CRU', 'rafael cabral', 0, 0, 0, 0, cruzeiro),
    criarEscalacao(2023, 'CRU', 'willian', 0, 0, 0, 0, cruzeiro),
    criarEscalacao(2023, 'CRU', 'oliveira', 0, 0, 0, 1, cruzeiro),
    criarEscalacao(2023, 'CRU', 'luciano castan', 0, 0, 0, 0, cruzeiro),
    criarEscalacao(2023, 'CRU', 'marlon', 0, 0, 1, 0, cruzeiro),
    criarEscalacao(2023, 'CRU', 'richard', 0, 0, 1, 0, cruzeiro),
    criarEscalacao(2023, 'CRU', 'ramiro', 0, 0, 1, 0, cruzeiro),
    criarEscalacao(2023, 'CRU', 'mateus vital', 0, 0, 0, 0, cruzeiro),
    criarEscalacao(2023, 'CRU', 'bruno rodrigues', 1, 0, 0, 0, cruzeiro),
    criarEscalacao(2023, 'CRU', 'nikão', 0, 0, 0, 0, cruzeiro),
    criarEscalacao(2023, 'CRU', 'gilberto', 0, 0, 1, 0, cruzeiro),
  ];

  const escalacaoVisitante: IEscalacao[] = [
    criarEscalacao(2023, 'GRE', 'gabriel grando', 0, 0, 0, 0, gremio),
    criarEscalacao(2023, 'GRE', 'joão pedro', 0, 0, 0, 0, gremio),
    criarEscalacao(2023, 'GRE', 'bruno alves', 0, 0, 0, 0, gremio),
    criarEscalacao(2023, 'GRE', 'kannemann', 0, 0, 1, 0, gremio),
    criarEscalacao(2023, 'GRE', 'diogo barbosa', 0, 0, 0, 0, gremio),
    criarEscalacao(2023, 'GRE', 'lucas silva', 0, 0, 0, 0, gremio),
    criarEscalacao(2023, 'GRE', 'nathan', 0, 0, 0, 0, gremio),
    criarEscalacao(2023, 'GRE', 'cristaldo', 0, 0, 0, 0, gremio),
    criarEscalacao(2023, 'GRE', 'bitello', 0, 0, 0, 0, gremio),
    criarEscalacao(2023, 'GRE', 'vina', 0, 0, 0, 0, gremio),
    criarEscalacao(2023, 'GRE', 'luis suárez', 0, 0, 1, 0, gremio),
  ];

  const detalheJogo: IDetalhesJogo = {
    ano: 2023,
    idJogo: 16,
    idRodada: 2,
    mandante: {
      esquemaTatico: '4-4-2',
      treinador: cruzeiro.treinador,
      escalacao: escalacaoMandante,
      substituicoes: [
        {
          jogadorSaiu: criarEscalacao(2023, 'CRU', 'richard', 0, 0, 0, 0, cruzeiro),
          jogadorEntrou: criarEscalacao(2023, 'CRU', 'neto moura', 0, 0, 0, 0, cruzeiro),
        },
        {
          jogadorSaiu: criarEscalacao(2023, 'CRU', 'ramiro', 0, 0, 0, 0, cruzeiro),
          jogadorEntrou: criarEscalacao(2023, 'CRU', 'felipe machado', 0, 0, 0, 0, cruzeiro),
        },
        {
          jogadorSaiu: criarEscalacao(2023, 'CRU', 'mateus vital', 0, 0, 0, 0, cruzeiro),
          jogadorEntrou: criarEscalacao(2023, 'CRU', 'wallison', 0, 0, 0, 0, cruzeiro)
        },
        {
          jogadorSaiu: criarEscalacao(2023, 'CRU', 'nikão', 0, 0, 0, 0, cruzeiro),
          jogadorEntrou: criarEscalacao(2023, 'CRU', 'rafael bilu', 0, 0, 0, 0, cruzeiro)
        },
      ],
    },
    visitante: {
      esquemaTatico: '4-5-1',
      treinador: gremio.treinador,
      escalacao: escalacaoVisitante,
      substituicoes: [
        {
          jogadorSaiu: criarEscalacao(2023, 'GRE', 'lucas silva', 0, 0, 0, 0, gremio),
          jogadorEntrou: criarEscalacao(2023, 'GRE', 'everton galdino', 0, 0, 0, 0, gremio)
        },
        {
          jogadorSaiu: criarEscalacao(2023, 'GRE', 'nathan', 0, 0, 0, 0, gremio),
          jogadorEntrou: criarEscalacao(2023, 'GRE', 'zinho', 0, 0, 0, 0, gremio)
        },
        {
          jogadorSaiu: criarEscalacao(2023, 'GRE', 'cristaldo', 0, 0, 0, 0, gremio),
          jogadorEntrou: criarEscalacao(2023, 'GRE', 'gustavinho', 0, 0, 0, 0, gremio),
        },
        {
          jogadorSaiu: criarEscalacao(2023, 'GRE', 'vina', 0, 0, 0, 0, gremio),
          jogadorEntrou: criarEscalacao(2023, 'GRE', 'andré henrique', 0, 0, 0, 0, gremio)
        },
      ]
    }
  };

  return detalheJogo;
}

const criarDetalheJogo21 = (): IDetalhesJogo => {

  const flamengo = getElenco(2023, 'FLA');
  const botafogo = getElenco(2023, 'BOT');

  const escalacaoMandante: IEscalacao[] = [
    criarEscalacao(2023, 'FLA', 'santos', 0, 0, 0, 0, flamengo),
    criarEscalacao(2023, 'FLA', 'léo pereira', 2, 0, 0, 0, flamengo),
    criarEscalacao(2023, 'FLA', 'fabricio bruno', 0, 0, 0, 0, flamengo),
    criarEscalacao(2023, 'FLA', 'david luiz', 0, 0, 1, 0, flamengo),
    criarEscalacao(2023, 'FLA', 'wesley', 0, 0, 0, 0, flamengo),
    criarEscalacao(2023, 'FLA', 'arturo vidal', 0, 0, 1, 0, flamengo),
    criarEscalacao(2023, 'FLA', 'thiago maia', 0, 0, 1, 0, flamengo),
    criarEscalacao(2023, 'FLA', 'ayrton lucas', 0, 0, 0, 0, flamengo),
    criarEscalacao(2023, 'FLA', 'everton cebolinha', 0, 0, 0, 0, flamengo),
    criarEscalacao(2023, 'FLA', 'pedro', 0, 0, 0, 0, flamengo),
    criarEscalacao(2023, 'FLA', 'gabriel barbosa', 0, 0, 1, 0, flamengo),
  ];

  const escalacaoVisitante: IEscalacao[] = [
    criarEscalacao(2023, 'BOT', 'lucas perri', 0, 0, 0, 0, botafogo),
    criarEscalacao(2023, 'BOT', 'rafael', 0, 0, 0, 1, botafogo),
    criarEscalacao(2023, 'BOT', 'adryelson', 0, 0, 0, 0, botafogo),
    criarEscalacao(2023, 'BOT', 'victor cuesta', 0, 0, 1, 0, botafogo),
    criarEscalacao(2023, 'BOT', 'marçal', 0, 0, 0, 0, botafogo),
    criarEscalacao(2023, 'BOT', 'danilo barbosa', 1, 0, 0, 0, botafogo),
    criarEscalacao(2023, 'BOT', 'tchê tchê', 0, 0, 0, 0, botafogo),
    criarEscalacao(2023, 'BOT', 'eduardo', 0, 0, 0, 0, botafogo),
    criarEscalacao(2023, 'BOT', 'júnior santos', 0, 0, 0, 0, botafogo),
    criarEscalacao(2023, 'BOT', 'tiquinho soares', 2, 0, 1, 0, botafogo),
    criarEscalacao(2023, 'BOT', 'victor sá', 0, 0, 0, 0, botafogo),
  ];


  const detalheJogo: IDetalhesJogo = {
    ano: 2023,
    idJogo: 21,
    idRodada: 3,
    mandante: {
      esquemaTatico: '3-4-3',
      treinador: flamengo.treinador,
      escalacao: escalacaoMandante,
      substituicoes: [
        {
          jogadorSaiu: criarEscalacao(2023, 'FLA', 'wesley', 0, 0, 0, 0, flamengo),
          jogadorEntrou: criarEscalacao(2023, 'FLA', 'marinho', 0, 0, 0, 0, flamengo),
        },
        {
          jogadorSaiu: criarEscalacao(2023, 'FLA', 'thiago maia', 0, 0, 0, 0, flamengo),
          jogadorEntrou: criarEscalacao(2023, 'FLA', 'victor hugo', 0, 0, 0, 0, flamengo),
        },
        {
          jogadorSaiu: criarEscalacao(2023, 'FLA', 'arturo vidal', 0, 0, 0, 0, flamengo),
          jogadorEntrou: criarEscalacao(2023, 'FLA', 'matheus frança', 0, 0, 0, 0, flamengo),
        },
        {
          jogadorSaiu: criarEscalacao(2023, 'FLA', 'ayrton lucas', 0, 0, 0, 0, flamengo),
          jogadorEntrou: criarEscalacao(2023, 'FLA', 'everton ribeiro', 0, 0, 0, 0, flamengo),
        },
        {
          jogadorSaiu: criarEscalacao(2023, 'FLA', 'everton cebolinha', 0, 0, 0, 0, flamengo),
          jogadorEntrou: criarEscalacao(2023, 'FLA', 'bruno henrique', 0, 0, 0, 0, flamengo),
        },
      ]
    },
    visitante: {
      esquemaTatico: '4-4-2',
      treinador: botafogo.treinador,
      escalacao: escalacaoVisitante,
      substituicoes: [
        {
          jogadorSaiu: criarEscalacao(2023, 'BOT', 'tchê tchê', 0, 0, 0, 0, botafogo),
          jogadorEntrou: criarEscalacao(2023, 'BOT', 'philipe sampaio', 0, 0, 0, 0, botafogo),
        },
        {
          jogadorSaiu: criarEscalacao(2023, 'BOT', 'eduardo', 0, 0, 0, 0, botafogo),
          jogadorEntrou: criarEscalacao(2023, 'BOT', 'marlon freitas', 0, 0, 0, 0, botafogo),
        },
        {
          jogadorSaiu: criarEscalacao(2023, 'BOT', 'júnior santos', 0, 0, 0, 0, botafogo),
          jogadorEntrou: criarEscalacao(2023, 'BOT', 'di placido', 0, 0, 0, 0, botafogo),
        },
        {
          jogadorSaiu: criarEscalacao(2023, 'BOT', 'victor sá', 0, 0, 0, 0, botafogo),
          jogadorEntrou: criarEscalacao(2023, 'BOT', 'luis henrique', 0, 0, 0, 0, botafogo),
        },
      ],
    }
  };

  return detalheJogo;
}

const criarDetalheJogo23 = (): IDetalhesJogo => {

  const palmeiras = getElenco(2023, 'PAL');
  const corinthians = getElenco(2023, 'COR');

  const escalacaoMandante: IEscalacao[] = [
    criarEscalacao(2023, 'PAL', 'weverton', 0, 0, 0, 0, palmeiras),
    criarEscalacao(2023, 'PAL', 'mayke', 0, 0, 1, 0, palmeiras),
    criarEscalacao(2023, 'PAL', 'gustavo gómez', 0, 0, 0, 0, palmeiras),
    criarEscalacao(2023, 'PAL', 'murilo', 1, 0, 0, 0, palmeiras),
    criarEscalacao(2023, 'PAL', 'piquerez', 0, 1, 1, 0, palmeiras),
    criarEscalacao(2023, 'PAL', 'zé rafael', 0, 0, 0, 0, palmeiras),
    criarEscalacao(2023, 'PAL', 'gabriel menino', 0, 0, 0, 0, palmeiras),
    criarEscalacao(2023, 'PAL', 'raphael veiga', 1, 0, 0, 0, palmeiras),
    criarEscalacao(2023, 'PAL', 'artur', 0, 0, 0, 0, palmeiras),
    criarEscalacao(2023, 'PAL', 'rony', 0, 0, 0, 0, palmeiras),
    criarEscalacao(2023, 'PAL', 'dudu', 0, 0, 0, 0, palmeiras),
  ];

  const escalacaoVisitante: IEscalacao[] = [
    criarEscalacao(2023, 'COR', 'cássio', 0, 0, 0, 0, corinthians),
    criarEscalacao(2023, 'COR', 'du queiroz', 0, 0, 1, 0, corinthians),
    criarEscalacao(2023, 'COR', 'gil', 0, 0, 0, 0, corinthians),
    criarEscalacao(2023, 'COR', 'murillo', 0, 0, 0, 0, corinthians),
    criarEscalacao(2023, 'COR', 'matheus bidu', 0, 0, 0, 0, corinthians),
    criarEscalacao(2023, 'COR', 'fausto vera', 0, 0, 0, 0, corinthians),
    criarEscalacao(2023, 'COR', 'roni', 0, 0, 0, 0, corinthians),
    criarEscalacao(2023, 'COR', 'adson', 0, 0, 0, 0, corinthians),
    criarEscalacao(2023, 'COR', 'romero', 0, 0, 0, 0, corinthians),
    criarEscalacao(2023, 'COR', 'róger guedes', 0, 0, 1, 0, corinthians),
    criarEscalacao(2023, 'COR', 'yuri alberto', 0, 0, 0, 0, corinthians),
  ];

  const detalheJogo: IDetalhesJogo = {
    ano: 2023,
    idJogo: 23,
    idRodada: 3,
    mandante: {
      esquemaTatico: '4-3-3',
      treinador: palmeiras.treinador,
      escalacao: escalacaoMandante,
      substituicoes: [
        {
          jogadorSaiu: criarEscalacao(2023, 'PAL', 'mayke', 0, 0, 0, 0, palmeiras),
          jogadorEntrou: criarEscalacao(2023, 'PAL', 'gustavo garcia', 0, 0, 0, 0, palmeiras),
        },
        {
          jogadorSaiu: criarEscalacao(2023, 'PAL', 'zé rafael', 0, 0, 0, 0, palmeiras),
          jogadorEntrou: criarEscalacao(2023, 'PAL', 'richard rios', 0, 0, 0, 0, palmeiras),
        },
        {
          jogadorSaiu: criarEscalacao(2023, 'PAL', 'raphael veiga', 0, 0, 0, 0, palmeiras),
          jogadorEntrou: criarEscalacao(2023, 'PAL', 'jhon jhon', 0, 0, 0, 0, palmeiras),
        },
        {
          jogadorSaiu: criarEscalacao(2023, 'PAL', 'artur', 0, 0, 0, 0, palmeiras),
          jogadorEntrou: criarEscalacao(2023, 'PAL', 'giovani', 0, 0, 0, 0, palmeiras),
        },
        {
          jogadorSaiu: criarEscalacao(2023, 'PAL', 'rony', 0, 0, 0, 0, palmeiras),
          jogadorEntrou: criarEscalacao(2023, 'PAL', 'rafael navarro', 0, 0, 1, 0, palmeiras),
        },
      ],
    },
    visitante: {
      esquemaTatico: '4-4-2',
      treinador: getTreinador('danilo'),
      escalacao: escalacaoVisitante,
      substituicoes: [
        {
          jogadorSaiu: criarEscalacao(2023, 'COR', 'du queiroz', 0, 0, 0, 0, corinthians),
          jogadorEntrou: criarEscalacao(2023, 'COR', 'fagner', 0, 0, 0, 0, corinthians),
        },
        {
          jogadorSaiu: criarEscalacao(2023, 'COR', 'fausto vera', 0, 0, 0, 0, corinthians),
          jogadorEntrou: criarEscalacao(2023, 'COR', 'maycon', 0, 0, 0, 0, corinthians),
        },
        {
          jogadorSaiu: criarEscalacao(2023, 'COR', 'adson', 0, 0, 0, 0, corinthians),
          jogadorEntrou: criarEscalacao(2023, 'COR', 'paulinho', 0, 0, 0, 0, corinthians),
        },
        {
          jogadorSaiu: criarEscalacao(2023, 'COR', 'romero', 0, 0, 0, 0, corinthians),
          jogadorEntrou: criarEscalacao(2023, 'COR', 'giuliano', 0, 0, 1, 0, corinthians),
        },
        {
          jogadorSaiu: criarEscalacao(2023, 'COR', 'yuri alberto', 0, 0, 0, 0, corinthians),
          jogadorEntrou: criarEscalacao(2023, 'COR', 'giovane', 0, 0, 0, 0, corinthians),
        },
      ]
    }
  };

  return detalheJogo;
}

const criarDetalheJogo24 = (): IDetalhesJogo => {

  const santos = getElenco(2023, 'SAN');
  const america = getElenco(2023, 'AME');

  const escalacaoMandante: IEscalacao[] = [
    criarEscalacao(2023, 'SAN', 'joão paulo', 0, 0, 0, 0, santos),
    criarEscalacao(2023, 'SAN', 'nathan', 0, 0, 1, 0, santos),
    criarEscalacao(2023, 'SAN', 'messias', 0, 0, 0, 0, santos),
    criarEscalacao(2023, 'SAN', 'eduardo bauermann', 1, 0, 0, 1, santos),
    criarEscalacao(2023, 'SAN', 'lucas pires', 0, 0, 0, 0, santos),
    criarEscalacao(2023, 'SAN', 'rodrigo fernandez', 0, 0, 1, 0, santos),
    criarEscalacao(2023, 'SAN', 'dodi', 0, 0, 1, 0, santos),
    criarEscalacao(2023, 'SAN', 'lucas lima', 0, 0, 0, 0, santos),
    criarEscalacao(2023, 'SAN', 'mendoza', 1, 0, 0, 0, santos),
    criarEscalacao(2023, 'SAN', 'soteldo', 0, 0, 0, 0, santos),
    criarEscalacao(2023, 'SAN', 'marcos leonardo', 1, 0, 0, 0, santos),
  ];

  const escalacaoVisitante: IEscalacao[] = [
    criarEscalacao(2023, 'AME', 'matheus cavichioli', 0, 0, 0, 0, america),
    criarEscalacao(2023, 'AME', 'arthur', 0, 0, 0, 0, america),
    criarEscalacao(2023, 'AME', 'éder', 0, 0, 1, 0, america),
    criarEscalacao(2023, 'AME', 'iago maidana', 0, 0, 1, 0, america),
    criarEscalacao(2023, 'AME', 'marlon', 0, 0, 0, 0, america),
    criarEscalacao(2023, 'AME', 'juninho', 0, 0, 0, 0, america),
    criarEscalacao(2023, 'AME', 'alê', 1, 0, 1, 0, america),
    criarEscalacao(2023, 'AME', 'benitez', 0, 0, 0, 0, america),
    criarEscalacao(2023, 'AME', 'matheusinho', 0, 0, 0, 0, america),
    criarEscalacao(2023, 'AME', 'aloísio', 0, 0, 0, 0, america),
    criarEscalacao(2023, 'AME', 'everaldo', 1, 0, 1, 0, america),
  ];


  const detalheJogo: IDetalhesJogo = {
    ano: 2023,
    idJogo: 24,
    idRodada: 3,
    mandante: {
      esquemaTatico: '4-3-3',
      treinador: santos.treinador,
      escalacao: escalacaoMandante,
      substituicoes: [
        {
          jogadorSaiu: criarEscalacao(2023, 'SAN', 'nathan', 0, 0, 0, 0, santos),
          jogadorEntrou: criarEscalacao(2023, 'SAN', 'gabriel inocêncio', 0, 0, 0, 0, santos),
        },
        {
          jogadorSaiu: criarEscalacao(2023, 'SAN', 'dodi', 0, 0, 0, 0, santos),
          jogadorEntrou: criarEscalacao(2023, 'SAN', 'ed carlos', 0, 0, 0, 0, santos),
        },
        {
          jogadorSaiu: criarEscalacao(2023, 'SAN', 'lucas lima', 0, 0, 0, 0, santos),
          jogadorEntrou: criarEscalacao(2023, 'SAN', 'alison', 0, 0, 0, 0, santos),
        },
        {
          jogadorSaiu: criarEscalacao(2023, 'SAN', 'mendoza', 0, 0, 0, 0, santos),
          jogadorEntrou: criarEscalacao(2023, 'SAN', 'ângelo', 0, 0, 0, 0, santos),
        },
        {
          jogadorSaiu: criarEscalacao(2023, 'SAN', 'soteldo', 0, 0, 0, 0, santos),
          jogadorEntrou: criarEscalacao(2023, 'SAN', 'dani', 0, 0, 0, 0, santos),
        },
      ]
    },
    visitante: {
      esquemaTatico: '4-3-3',
      treinador: america.treinador,
      escalacao: escalacaoVisitante,
      substituicoes: [
        {
          jogadorSaiu: criarEscalacao(2023, 'AME', 'marlon', 0, 0, 0, 0, america),
          jogadorEntrou: criarEscalacao(2023, 'AME', 'nino paraiba', 0, 0, 0, 0, america),
        },
        {
          jogadorSaiu: criarEscalacao(2023, 'AME', 'juninho', 0, 0, 0, 0, america),
          jogadorEntrou: criarEscalacao(2023, 'AME', 'danilo avelar', 0, 0, 0, 0, america),
        },
        {
          jogadorSaiu: criarEscalacao(2023, 'AME', 'benitez', 0, 0, 0, 0, america),
          jogadorEntrou: criarEscalacao(2023, 'AME', 'martinez', 0, 0, 0, 0, america),
        },
        {
          jogadorSaiu: criarEscalacao(2023, 'AME', 'matheusinho', 0, 0, 0, 0, america),
          jogadorEntrou: criarEscalacao(2023, 'AME', 'felipe azevedo', 0, 0, 0, 0, america),
        },
        {
          jogadorSaiu: criarEscalacao(2023, 'AME', 'aloísio', 0, 0, 0, 0, america),
          jogadorEntrou: criarEscalacao(2023, 'AME', 'mikael', 0, 0, 0, 0, america),
        },
      ],
    }
  };

  return detalheJogo;
}

const criarDetalheJogo25 = (): IDetalhesJogo => {

  const bragantino = getElenco(2023, 'RBB');
  const cruzeiro = getElenco(2023, 'CRU');

  const escalacaoMandante: IEscalacao[] = [
    criarEscalacao(2023, 'RBB', 'lucão', 0, 0, 0, 0, bragantino),
    criarEscalacao(2023, 'RBB', 'aderlan', 0, 0, 0, 1, bragantino),
    criarEscalacao(2023, 'RBB', 'eduardo santos', 0, 0, 0, 0, bragantino),
    criarEscalacao(2023, 'RBB', 'natan', 0, 0, 1, 0, bragantino),
    criarEscalacao(2023, 'RBB', 'juninho capixaba', 0, 0, 0, 0, bragantino),
    criarEscalacao(2023, 'RBB', 'matheus fernandes', 0, 0, 0, 0, bragantino),
    criarEscalacao(2023, 'RBB', 'eric ramires', 0, 0, 0, 0, bragantino),
    criarEscalacao(2023, 'RBB', 'bruninho', 0, 0, 0, 0, bragantino),
    criarEscalacao(2023, 'RBB', 'helinho', 0, 0, 1, 0, bragantino),
    criarEscalacao(2023, 'RBB', 'eduardo sasha', 0, 0, 0, 0, bragantino),
    criarEscalacao(2023, 'RBB', 'sorriso', 0, 0, 1, 0, bragantino),
  ];

  const escalacaoVisitante: IEscalacao[] = [
    criarEscalacao(2023, 'CRU', 'rafael cabral', 0, 0, 0, 0, cruzeiro),
    criarEscalacao(2023, 'CRU', 'willian', 0, 0, 0, 0, cruzeiro),
    criarEscalacao(2023, 'CRU', 'neris', 0, 0, 1, 0, cruzeiro),
    criarEscalacao(2023, 'CRU', 'luciano castan', 0, 0, 1, 0, cruzeiro),
    criarEscalacao(2023, 'CRU', 'marlon', 0, 0, 0, 0, cruzeiro),
    criarEscalacao(2023, 'CRU', 'richard', 0, 0, 0, 0, cruzeiro),
    criarEscalacao(2023, 'CRU', 'ramiro', 1, 0, 1, 0, cruzeiro),
    criarEscalacao(2023, 'CRU', 'mateus vital', 0, 0, 0, 0, cruzeiro),
    criarEscalacao(2023, 'CRU', 'bruno rodrigues', 1, 0, 0, 0, cruzeiro),
    criarEscalacao(2023, 'CRU', 'nikão', 0, 0, 0, 0, cruzeiro),
    criarEscalacao(2023, 'CRU', 'gilberto', 1, 0, 0, 0, cruzeiro),
  ];

  const detalheJogo: IDetalhesJogo = {
    ano: 2023,
    idJogo: 25,
    idRodada: 3,
    mandante: {
      esquemaTatico: '',
      treinador: bragantino.treinador,
      escalacao: escalacaoMandante,
      substituicoes: [
        {
          jogadorSaiu: criarEscalacao(2023, 'RBB', 'matheus fernandes', 0, 0, 0, 0, bragantino),
          jogadorEntrou: criarEscalacao(2023, 'RBB', 'gustavinho', 0, 0, 0, 0, bragantino),
        },
        {
          jogadorSaiu: criarEscalacao(2023, 'RBB', 'bruninho', 0, 0, 0, 0, bragantino),
          jogadorEntrou: criarEscalacao(2023, 'RBB', 'jadsom silva', 0, 0, 1, 0, bragantino),
        },
        {
          jogadorSaiu: criarEscalacao(2023, 'RBB', 'helinho', 0, 0, 0, 0, bragantino),
          jogadorEntrou: criarEscalacao(2023, 'RBB', 'henry mosquera', 0, 0, 0, 0, bragantino),
        },
        {
          jogadorSaiu: criarEscalacao(2023, 'RBB', 'eduardo sasha', 0, 0, 0, 0, bragantino),
          jogadorEntrou: criarEscalacao(2023, 'RBB', 'thiago borbas', 0, 0, 1, 0, bragantino),
        },
        {
          jogadorSaiu: criarEscalacao(2023, 'RBB', 'sorriso', 0, 0, 0, 0, bragantino),
          jogadorEntrou: criarEscalacao(2023, 'RBB', 'andrés hurtado', 0, 0, 0, 0, bragantino),
        },
      ],
    },
    visitante: {
      esquemaTatico: '',
      treinador: cruzeiro.treinador,
      escalacao: escalacaoVisitante,
      substituicoes: [
        {
          jogadorSaiu: criarEscalacao(2023, 'CRU', 'neris', 0, 0, 0, 0, cruzeiro),
          jogadorEntrou: criarEscalacao(2023, 'CRU', 'reynaldo', 0, 0, 0, 0, cruzeiro),
        },
        {
          jogadorSaiu: criarEscalacao(2023, 'CRU', 'luciano castan', 0, 0, 0, 0, cruzeiro),
          jogadorEntrou: criarEscalacao(2023, 'CRU', 'matheus jussa', 0, 0, 0, 0, cruzeiro),
        },
        {
          jogadorSaiu: criarEscalacao(2023, 'CRU', 'ramiro', 0, 0, 0, 0, cruzeiro),
          jogadorEntrou: criarEscalacao(2023, 'CRU', 'felipe machado', 0, 0, 0, 0, cruzeiro),
        },
        {
          jogadorSaiu: criarEscalacao(2023, 'CRU', 'mateus vital', 0, 0, 0, 0, cruzeiro),
          jogadorEntrou: criarEscalacao(2023, 'CRU', 'neto moura', 0, 0, 0, 0, cruzeiro),
        },
        {
          jogadorSaiu: criarEscalacao(2023, 'CRU', 'nikão', 0, 0, 0, 0, cruzeiro),
          jogadorEntrou: criarEscalacao(2023, 'CRU', 'rafael bilu', 0, 0, 0, 0, cruzeiro),
        },
      ]
    }
  };

  return detalheJogo;
}

const criarDetalheJogo29 = (): IDetalhesJogo => {

  const fortaleza = getElenco(2023, 'FOR');
  const fluminense = getElenco(2023, 'FLU');

  const escalacaoMandante: IEscalacao[] = [
    criarEscalacao(2023, 'FOR', 'fernando miguel', 0, 0, 0, 0, fortaleza),
    criarEscalacao(2023, 'FOR', 'tinga', 0, 0, 0, 0, fortaleza),
    criarEscalacao(2023, 'FOR', 'brítez', 0, 0, 0, 0, fortaleza),
    criarEscalacao(2023, 'FOR', 'titi', 0, 0, 0, 0, fortaleza),
    criarEscalacao(2023, 'FOR', 'bruno pacheco', 0, 0, 0, 0, fortaleza),
    criarEscalacao(2023, 'FOR', 'caio alexandre', 0, 0, 0, 0, fortaleza),
    criarEscalacao(2023, 'FOR', 'hércules', 1, 0, 0, 0, fortaleza),
    criarEscalacao(2023, 'FOR', 'pochettino', 0, 0, 0, 0, fortaleza),
    criarEscalacao(2023, 'FOR', 'calebe', 0, 0, 0, 0, fortaleza),
    criarEscalacao(2023, 'FOR', 'thiago galhardo', 1, 0, 0, 0, fortaleza),
    criarEscalacao(2023, 'FOR', 'moisés', 2, 0, 0, 0, fortaleza),
  ];

  const escalacaoVisitante: IEscalacao[] = [
    criarEscalacao(2023, 'FLU', 'fábio', 0, 0, 0, 0, fluminense),
    criarEscalacao(2023, 'FLU', 'guga', 0, 0, 0, 0, fluminense),
    criarEscalacao(2023, 'FLU', 'nino', 0, 0, 0, 0, fluminense),
    criarEscalacao(2023, 'FLU', 'manoel', 0, 0, 0, 0, fluminense),
    criarEscalacao(2023, 'FLU', 'alexsander', 0, 0, 0, 0, fluminense),
    criarEscalacao(2023, 'FLU', 'andré', 0, 0, 0, 0, fluminense),
    criarEscalacao(2023, 'FLU', 'lima', 0, 0, 0, 0, fluminense),
    criarEscalacao(2023, 'FLU', 'alan', 1, 0, 0, 0, fluminense),
    criarEscalacao(2023, 'FLU', 'gabriel pirani', 0, 0, 1, 0, fluminense),
    criarEscalacao(2023, 'FLU', 'lelê', 0, 0, 0, 0, fluminense),
    criarEscalacao(2023, 'FLU', 'john kennedy', 1, 0, 1, 0, fluminense),
  ];

  const detalheJogo: IDetalhesJogo = {
    ano: 2023,
    idJogo: 29,
    idRodada: 3,
    mandante: {
      esquemaTatico: '4-3-3',
      treinador: fortaleza.treinador,
      escalacao: escalacaoMandante,
      substituicoes: [
        {
          jogadorSaiu: criarEscalacao(2023, 'FOR', 'caio alexandre', 0, 0, 0, 0, fortaleza),
          jogadorEntrou: criarEscalacao(2023, 'FOR', 'zé welison', 0, 0, 0, 0, fortaleza),
        },
        {
          jogadorSaiu: criarEscalacao(2023, 'FOR', 'pochettino', 0, 0, 0, 0, fortaleza),
          jogadorEntrou: criarEscalacao(2023, 'FOR', 'iago pikachu', 0, 0, 0, 0, fortaleza),
        },
        {
          jogadorSaiu: criarEscalacao(2023, 'FOR', 'calebe', 0, 0, 0, 0, fortaleza),
          jogadorEntrou: criarEscalacao(2023, 'FOR', 'lucas sasha', 0, 0, 0, 0, fortaleza),
        },
        {
          jogadorSaiu: criarEscalacao(2023, 'FOR', 'thiago galhardo', 0, 0, 0, 0, fortaleza),
          jogadorEntrou: criarEscalacao(2023, 'FOR', 'guilherme', 0, 0, 0, 0, fortaleza),
        },
        {
          jogadorSaiu: criarEscalacao(2023, 'FOR', 'moisés', 0, 0, 0, 0, fortaleza),
          jogadorEntrou: criarEscalacao(2023, 'FOR', 'romarinho', 0, 0, 0, 0, fortaleza),
        },
      ]
    },
    visitante: {
      esquemaTatico: '4-3-3',
      treinador: fluminense.treinador,
      escalacao: escalacaoVisitante,
      substituicoes: [
        {
          jogadorSaiu: criarEscalacao(2023, 'FLU', 'guga', 0, 0, 0, 0, fluminense),
          jogadorEntrou: criarEscalacao(2023, 'FLU', 'keno', 0, 0, 1, 0, fluminense),
        },
        {
          jogadorSaiu: criarEscalacao(2023, 'FLU', 'manoel', 0, 0, 0, 0, fluminense),
          jogadorEntrou: criarEscalacao(2023, 'FLU', 'germán cano', 0, 0, 0, 0, fluminense),
        },
        {
          jogadorSaiu: criarEscalacao(2023, 'FLU', 'gabriel pirani', 0, 0, 0, 0, fluminense),
          jogadorEntrou: criarEscalacao(2023, 'FLU', 'ganso', 0, 0, 0, 0, fluminense),
        },
        {
          jogadorSaiu: criarEscalacao(2023, 'FLU', 'alan', 0, 0, 0, 0, fluminense),
          jogadorEntrou: criarEscalacao(2023, 'FLU', 'j. arias', 0, 0, 0, 0, fluminense),
        },
        {
          jogadorSaiu: criarEscalacao(2023, 'FLU', 'lelê', 0, 0, 0, 0, fluminense),
          jogadorEntrou: criarEscalacao(2023, 'FLU', 'isaac', 0, 0, 0, 0, fluminense),
        },
      ],
    }
  };

  return detalheJogo;
}

const criarDetalheJogo30 = (): IDetalhesJogo => {

  const cuiaba = getElenco(2023, 'CUI');
  const gremio = getElenco(2023, 'GRE');

  const escalacaoMandante: IEscalacao[] = [
    criarEscalacao(2023, 'CUI', 'walter', 0, 0, 0, 0, cuiaba),
    criarEscalacao(2023, 'CUI', 'matheusinho', 0, 0, 0, 0, cuiaba),
    criarEscalacao(2023, 'CUI', 'marllon', 1, 0, 0, 0, cuiaba),
    criarEscalacao(2023, 'CUI', 'alan empereur', 0, 0, 0, 0, cuiaba),
    criarEscalacao(2023, 'CUI', 'patric calmon', 0, 0, 0, 1, cuiaba),
    criarEscalacao(2023, 'CUI', 'filipe augusto', 0, 0, 0, 0, cuiaba),
    criarEscalacao(2023, 'CUI', 'raniele', 0, 0, 1, 0, cuiaba),
    criarEscalacao(2023, 'CUI', 'ceppelini', 0, 0, 0, 0, cuiaba),
    criarEscalacao(2023, 'CUI', 'jonathan cafu', 0, 0, 0, 0, cuiaba),
    criarEscalacao(2023, 'CUI', 'deyverson', 0, 0, 1, 0, cuiaba),
    criarEscalacao(2023, 'CUI', 'emerson', 0, 0, 0, 0, cuiaba),
  ];

  const escalacaoVisitante: IEscalacao[] = [
    criarEscalacao(2023, 'GRE', 'gabriel grando', 0, 0, 0, 0, gremio),
    criarEscalacao(2023, 'GRE', 'fábio', 0, 0, 0, 0, gremio),
    criarEscalacao(2023, 'GRE', 'bruno alves', 0, 0, 1, 0, gremio),
    criarEscalacao(2023, 'GRE', 'kannemann', 0, 0, 1, 0, gremio),
    criarEscalacao(2023, 'GRE', 'diogo barbosa', 0, 0, 1, 0, gremio),
    criarEscalacao(2023, 'GRE', 'lucas silva', 0, 0, 0, 0, gremio),
    criarEscalacao(2023, 'GRE', 'mila', 0, 0, 1, 0, gremio),
    criarEscalacao(2023, 'GRE', 'cristaldo', 0, 0, 0, 0, gremio),
    criarEscalacao(2023, 'GRE', 'bitello', 0, 0, 1, 0, gremio),
    criarEscalacao(2023, 'GRE', 'vina', 1, 0, 0, 0, gremio),
    criarEscalacao(2023, 'GRE', 'luis suárez', 0, 0, 0, 0, gremio),
  ];

  const detalheJogo: IDetalhesJogo = {
    ano: 2023,
    idJogo: 30,
    idRodada: 3,
    mandante: {
      esquemaTatico: '4-4-2',
      treinador: cuiaba.treinador,
      escalacao: escalacaoMandante,
      substituicoes: [
        {
          jogadorSaiu: criarEscalacao(2023, 'CUI', 'matheusinho', 0, 0, 0, 0, cuiaba),
          jogadorEntrou: criarEscalacao(2023, 'CUI', 'matheus alexandre', 0, 0, 0, 0, cuiaba),
        },
        {
          jogadorSaiu: criarEscalacao(2023, 'CUI', 'filipe augusto', 0, 0, 0, 0, cuiaba),
          jogadorEntrou: criarEscalacao(2023, 'CUI', 'pitta', 0, 0, 0, 0, cuiaba),
        },
        {
          jogadorSaiu: criarEscalacao(2023, 'CUI', 'raniele', 0, 0, 0, 0, cuiaba),
          jogadorEntrou: criarEscalacao(2023, 'CUI', 'denilson', 0, 0, 0, 0, cuiaba),
        },
        {
          jogadorSaiu: criarEscalacao(2023, 'CUI', 'ceppelini', 0, 0, 0, 0, cuiaba),
          jogadorEntrou: criarEscalacao(2023, 'CUI', 'ronald lopes', 0, 0, 1, 0, cuiaba),
        },
        {
          jogadorSaiu: criarEscalacao(2023, 'CUI', 'jonathan cafu', 0, 0, 0, 0, cuiaba),
          jogadorEntrou: criarEscalacao(2023, 'CUI', 'wellington silva', 0, 0, 0, 0, cuiaba),
        },
      ],
    },
    visitante: {
      esquemaTatico: '4-5-1',
      treinador: gremio.treinador,
      escalacao: escalacaoVisitante,
      substituicoes: [
        {
          jogadorSaiu: criarEscalacao(2023, 'GRE', 'fábio', 0, 0, 0, 0, gremio),
          jogadorEntrou: criarEscalacao(2023, 'GRE', 'thomas luciano', 0, 0, 0, 0, gremio)
        },
        {
          jogadorSaiu: criarEscalacao(2023, 'GRE', 'lucas silva', 0, 0, 0, 0, gremio),
          jogadorEntrou: criarEscalacao(2023, 'GRE', 'bruno uvini', 0, 0, 0, 0, gremio)
        },
        {
          jogadorSaiu: criarEscalacao(2023, 'GRE', 'mila', 0, 0, 0, 0, gremio),
          jogadorEntrou: criarEscalacao(2023, 'GRE', 'zinho', 0, 0, 0, 0, gremio),
        },
        {
          jogadorSaiu: criarEscalacao(2023, 'GRE', 'cristaldo', 0, 0, 0, 0, gremio),
          jogadorEntrou: criarEscalacao(2023, 'GRE', 'nathan', 0, 0, 0, 0, gremio)
        },
        {
          jogadorSaiu: criarEscalacao(2023, 'GRE', 'vina', 0, 0, 0, 0, gremio),
          jogadorEntrou: criarEscalacao(2023, 'GRE', 'everton galdino', 1, 0, 0, 0, gremio)
        },
      ]
    }
  };

  return detalheJogo;
}

const criarDetalheJogo31 = (): IDetalhesJogo => {

  const fluminense = getElenco(2023, 'FLU');
  const vasco = getElenco(2023, 'VAS');

  const escalacaoMandante: IEscalacao[] = [
    criarEscalacao(2023, 'FLU', 'fábio', 0, 0, 0, 0, fluminense),
    criarEscalacao(2023, 'FLU', 'samuel xavier', 0, 0, 0, 0, fluminense),
    criarEscalacao(2023, 'FLU', 'nino', 0, 0, 0, 0, fluminense),
    criarEscalacao(2023, 'FLU', 'felipe melo', 0, 0, 1, 0, fluminense),
    criarEscalacao(2023, 'FLU', 'marcelo', 0, 0, 0, 0, fluminense),
    criarEscalacao(2023, 'FLU', 'andré', 0, 0, 1, 0, fluminense),
    criarEscalacao(2023, 'FLU', 'alexsander', 0, 0, 0, 0, fluminense),
    criarEscalacao(2023, 'FLU', 'lima', 1, 0, 0, 0, fluminense),
    criarEscalacao(2023, 'FLU', 'ganso', 0, 0, 0, 0, fluminense),
    criarEscalacao(2023, 'FLU', 'j. arias', 0, 0, 0, 0, fluminense),
    criarEscalacao(2023, 'FLU', 'germán cano', 0, 0, 0, 0, fluminense),
  ];

  const escalacaoVisitante: IEscalacao[] = [
    criarEscalacao(2023, 'VAS', 'léo jardim', 0, 0, 1, 0, vasco),
    criarEscalacao(2023, 'VAS', 'puma rodriguez', 0, 0, 0, 0, vasco),
    criarEscalacao(2023, 'VAS', 'robson', 0, 0, 0, 0, vasco),
    criarEscalacao(2023, 'VAS', 'léo', 0, 0, 0, 0, vasco),
    criarEscalacao(2023, 'VAS', 'lucas piton', 0, 0, 0, 0, vasco),
    criarEscalacao(2023, 'VAS', 'rodrigo', 0, 0, 0, 0, vasco),
    criarEscalacao(2023, 'VAS', 'jair', 0, 0, 0, 0, vasco),
    criarEscalacao(2023, 'VAS', 'andrey santos', 0, 0, 0, 0, vasco),
    criarEscalacao(2023, 'VAS', 'gabriel pec', 0, 0, 0, 0, vasco),
    criarEscalacao(2023, 'VAS', 'pedro raul', 1, 0, 0, 0, vasco),
    criarEscalacao(2023, 'VAS', 'alex teixeira', 0, 0, 0, 0, vasco),
  ];

  const detalheJogo: IDetalhesJogo = {
    ano: 2023,
    idJogo: 31,
    idRodada: 4,
    mandante: {
      esquemaTatico: '4-4-2',
      treinador: fluminense.treinador,
      escalacao: escalacaoMandante,
      substituicoes: [
        {
          jogadorSaiu: criarEscalacao(2023, 'FLU', 'samuel xavier', 0, 0, 0, 0, fluminense),
          jogadorEntrou: criarEscalacao(2023, 'FLU', 'guga', 0, 0, 0, 0, fluminense)
        },
        {
          jogadorSaiu: criarEscalacao(2023, 'FLU', 'felipe melo', 0, 0, 0, 0, fluminense),
          jogadorEntrou: criarEscalacao(2023, 'FLU', 'john kennedy', 0, 0, 1, 0, fluminense)
        },
        {
          jogadorSaiu: criarEscalacao(2023, 'FLU', 'marcelo', 0, 0, 0, 0, fluminense),
          jogadorEntrou: criarEscalacao(2023, 'FLU', 'lelê', 0, 0, 0, 0, fluminense)
        },
        {
          jogadorSaiu: criarEscalacao(2023, 'FLU', 'lima', 0, 0, 0, 0, fluminense),
          jogadorEntrou: criarEscalacao(2023, 'FLU', 'thiago santos', 0, 0, 0, 0, fluminense)
        },
      ],
    },
    visitante: {
      esquemaTatico: '4-3-3',
      treinador: vasco.treinador,
      escalacao: escalacaoVisitante,
      substituicoes: [
        {
          jogadorSaiu: criarEscalacao(2023, 'VAS', 'jair', 0, 0, 0, 0, vasco),
          jogadorEntrou: criarEscalacao(2023, 'VAS', 'marlon gomes', 0, 0, 0, 0, vasco)
        },
        {
          jogadorSaiu: criarEscalacao(2023, 'VAS', 'andrey santos', 0, 0, 0, 0, vasco),
          jogadorEntrou: criarEscalacao(2023, 'VAS', 'matías galarza', 0, 0, 0, 0, vasco)
        },
        {
          jogadorSaiu: criarEscalacao(2023, 'VAS', 'alex teixeira', 0, 0, 0, 0, vasco),
          jogadorEntrou: criarEscalacao(2023, 'VAS', 'rwan', 0, 0, 0, 0, vasco)
        },
        {
          jogadorSaiu: criarEscalacao(2023, 'VAS', 'pedro raul', 0, 0, 0, 0, vasco),
          jogadorEntrou: criarEscalacao(2023, 'VAS', 'eguinaldo', 0, 0, 1, 0, vasco)
        },
        {
          jogadorSaiu: criarEscalacao(2023, 'VAS', 'gabriel pec', 0, 0, 0, 0, vasco),
          jogadorEntrou: criarEscalacao(2023, 'VAS', 'figueiredo', 0, 0, 1, 0, vasco)
        },
      ]
    }
  };

  return detalheJogo;
}

const criarDetalheJogo32 = (): IDetalhesJogo => {

  const botafogo = getElenco(2023, 'BOT');
  const atletico = getElenco(2023, 'CAM');

  const escalacaoMandante: IEscalacao[] = [
    criarEscalacao(2023, 'BOT', 'lucas perri', 0, 0, 0, 0, botafogo),
    criarEscalacao(2023, 'BOT', 'di placido', 0, 0, 0, 0, botafogo),
    criarEscalacao(2023, 'BOT', 'adryelson', 0, 0, 0, 0, botafogo),
    criarEscalacao(2023, 'BOT', 'victor cuesta', 0, 0, 0, 0, botafogo),
    criarEscalacao(2023, 'BOT', 'hugo', 0, 0, 0, 0, botafogo),
    criarEscalacao(2023, 'BOT', 'marlon freitas', 0, 0, 0, 0, botafogo),
    criarEscalacao(2023, 'BOT', 'gabriel pires', 0, 0, 0, 0, botafogo),
    criarEscalacao(2023, 'BOT', 'lucas fernandes', 0, 0, 1, 0, botafogo),
    criarEscalacao(2023, 'BOT', 'júnior santos', 0, 0, 0, 0, botafogo),
    criarEscalacao(2023, 'BOT', 'm. nascimento', 1, 0, 0, 0, botafogo),
    criarEscalacao(2023, 'BOT', 'victor sá', 1, 0, 0, 0, botafogo),
  ];

  const escalacaoVisitante: IEscalacao[] = [
    criarEscalacao(2023, 'CAM', 'everson', 0, 0, 0, 0, atletico),
    criarEscalacao(2023, 'CAM', 'mariano', 0, 0, 0, 0, atletico),
    criarEscalacao(2023, 'CAM', 'jemerson', 0, 0, 0, 0, atletico),
    criarEscalacao(2023, 'CAM', 'mauricio lemos', 0, 0, 1, 0, atletico),
    criarEscalacao(2023, 'CAM', 'rubens', 0, 0, 1, 0, atletico),
    criarEscalacao(2023, 'CAM', 'rodrigo battaglia', 0, 0, 1, 0, atletico),
    criarEscalacao(2023, 'CAM', 'edenilson', 0, 0, 0, 0, atletico),
    criarEscalacao(2023, 'CAM', 'matías zaracho', 0, 0, 0, 0, atletico),
    criarEscalacao(2023, 'CAM', 'hyoran', 0, 0, 0, 0, atletico),
    criarEscalacao(2023, 'CAM', 'paulinho', 0, 0, 0, 0, atletico),
    criarEscalacao(2023, 'CAM', 'hulk', 0, 0, 0, 0, atletico),
  ];


  const detalheJogo: IDetalhesJogo = {
    ano: 2023,
    idJogo: 32,
    idRodada: 4,
    mandante: {
      esquemaTatico: '4-3-3',
      treinador: botafogo.treinador,
      escalacao: escalacaoMandante,
      substituicoes: [
        {
          jogadorSaiu: criarEscalacao(2023, 'BOT', 'gabriel pires', 0, 0, 0, 0, botafogo),
          jogadorEntrou: criarEscalacao(2023, 'BOT', 'eduardo', 0, 0, 0, 0, botafogo),
        },
        {
          jogadorSaiu: criarEscalacao(2023, 'BOT', 'lucas fernandes', 0, 0, 0, 0, botafogo),
          jogadorEntrou: criarEscalacao(2023, 'BOT', 'tchê tchê', 0, 0, 0, 0, botafogo),
        },
        {
          jogadorSaiu: criarEscalacao(2023, 'BOT', 'júnior santos', 0, 0, 0, 0, botafogo),
          jogadorEntrou: criarEscalacao(2023, 'BOT', 'matías segovia', 0, 0, 0, 0, botafogo),
        },
        {
          jogadorSaiu: criarEscalacao(2023, 'BOT', 'm. nascimento', 0, 0, 0, 0, botafogo),
          jogadorEntrou: criarEscalacao(2023, 'BOT', 'tiquinho soares', 0, 0, 0, 0, botafogo),
        },
        {
          jogadorSaiu: criarEscalacao(2023, 'BOT', 'victor sá', 0, 0, 0, 0, botafogo),
          jogadorEntrou: criarEscalacao(2023, 'BOT', 'luis henrique', 0, 0, 0, 0, botafogo),
        },
      ]
    },
    visitante: {
      esquemaTatico: '4-4-2',
      treinador: atletico.treinador,
      escalacao: escalacaoVisitante,
      substituicoes: [
        {
          jogadorSaiu: criarEscalacao(2023, 'CAM', 'rubens', 0, 0, 0, 0, atletico),
          jogadorEntrou: criarEscalacao(2023, 'CAM', 'patrick', 0, 0, 0, 0, atletico),
        },
        {
          jogadorSaiu: criarEscalacao(2023, 'CAM', 'edenilson', 0, 0, 0, 0, atletico),
          jogadorEntrou: criarEscalacao(2023, 'CAM', 'cristian pavón', 0, 0, 0, 0, atletico),
        },
        {
          jogadorSaiu: criarEscalacao(2023, 'CAM', 'hyoran', 0, 0, 0, 0, atletico),
          jogadorEntrou: criarEscalacao(2023, 'CAM', 'igor gomes', 0, 0, 0, 0, atletico),
        },
        {
          jogadorSaiu: criarEscalacao(2023, 'CAM', 'paulinho', 0, 0, 0, 0, atletico),
          jogadorEntrou: criarEscalacao(2023, 'CAM', 'eduardo vargas', 0, 0, 0, 0, atletico),
        },
      ],
    }
  };

  return detalheJogo;
}

const criarDetalheJogo34 = (): IDetalhesJogo => {

  const corinthians = getElenco(2023, 'COR');
  const fortaleza = getElenco(2023, 'FOR');

  const escalacaoMandante: IEscalacao[] = [
    criarEscalacao(2023, 'COR', 'cássio', 0, 0, 0, 0, corinthians),
    criarEscalacao(2023, 'COR', 'fagner', 0, 0, 0, 0, corinthians),
    criarEscalacao(2023, 'COR', 'gil', 0, 0, 0, 0, corinthians),
    criarEscalacao(2023, 'COR', 'murillo', 0, 0, 1, 0, corinthians),
    criarEscalacao(2023, 'COR', 'fábio santos', 0, 0, 0, 0, corinthians),
    criarEscalacao(2023, 'COR', 'fausto vera', 0, 0, 1, 0, corinthians),
    criarEscalacao(2023, 'COR', 'roni', 0, 0, 0, 0, corinthians),
    criarEscalacao(2023, 'COR', 'matheus araújo', 0, 0, 0, 0, corinthians),
    criarEscalacao(2023, 'COR', 'adson', 0, 0, 0, 0, corinthians),
    criarEscalacao(2023, 'COR', 'róger guedes', 0, 0, 0, 0, corinthians),
    criarEscalacao(2023, 'COR', 'pedrinho', 0, 0, 0, 0, corinthians),
  ];

  const escalacaoVisitante: IEscalacao[] = [
    criarEscalacao(2023, 'FOR', 'fernando miguel', 0, 0, 0, 0, fortaleza),
    criarEscalacao(2023, 'FOR', 'tinga', 0, 0, 0, 0, fortaleza),
    criarEscalacao(2023, 'FOR', 'brítez', 0, 0, 0, 0, fortaleza),
    criarEscalacao(2023, 'FOR', 'titi', 0, 0, 0, 0, fortaleza),
    criarEscalacao(2023, 'FOR', 'bruno pacheco', 0, 0, 1, 0, fortaleza),
    criarEscalacao(2023, 'FOR', 'caio alexandre', 1, 0, 0, 0, fortaleza),
    criarEscalacao(2023, 'FOR', 'hércules', 0, 0, 0, 0, fortaleza),
    criarEscalacao(2023, 'FOR', 'lucas sasha', 0, 0, 0, 0, fortaleza),
    criarEscalacao(2023, 'FOR', 'calebe', 0, 0, 0, 0, fortaleza),
    criarEscalacao(2023, 'FOR', 'thiago galhardo', 0, 0, 0, 0, fortaleza),
    criarEscalacao(2023, 'FOR', 'moisés', 0, 0, 0, 0, fortaleza),
  ];



  const detalheJogo: IDetalhesJogo = {
    ano: 2023,
    idJogo: 34,
    idRodada: 4,
    mandante: {
      esquemaTatico: '4-3-3',
      treinador: corinthians.treinador,
      escalacao: escalacaoMandante,
      substituicoes: [
        {
          jogadorSaiu: criarEscalacao(2023, 'COR', 'fábio santos', 0, 0, 0, 0, corinthians),
          jogadorEntrou: criarEscalacao(2023, 'COR', 'matheus bidu', 0, 0, 0, 0, corinthians),
        },
        {
          jogadorSaiu: criarEscalacao(2023, 'COR', 'fausto vera', 0, 0, 0, 0, corinthians),
          jogadorEntrou: criarEscalacao(2023, 'COR', 'paulinho', 0, 0, 0, 0, corinthians),
        },
        {
          jogadorSaiu: criarEscalacao(2023, 'COR', 'matheus araújo', 0, 0, 0, 0, corinthians),
          jogadorEntrou: criarEscalacao(2023, 'COR', 'yuri alberto', 1, 0, 0, 0, corinthians),
        },
        {
          jogadorSaiu: criarEscalacao(2023, 'COR', 'adson', 0, 0, 0, 0, corinthians),
          jogadorEntrou: criarEscalacao(2023, 'COR', 'romero', 0, 0, 0, 0, corinthians),
        },
        {
          jogadorSaiu: criarEscalacao(2023, 'COR', 'pedrinho', 0, 0, 0, 0, corinthians),
          jogadorEntrou: criarEscalacao(2023, 'COR', 'guilherme biro', 0, 0, 0, 0, corinthians),
        }
      ],
    },
    visitante: {
      esquemaTatico: '4-3-3',
      treinador: fortaleza.treinador,
      escalacao: escalacaoVisitante,
      substituicoes: [
        {
          jogadorSaiu: criarEscalacao(2023, 'FOR', 'lucas sasha', 0, 0, 0, 0, fortaleza),
          jogadorEntrou: criarEscalacao(2023, 'FOR', 'zanocelo', 0, 0, 0, 0, fortaleza),
        },
        {
          jogadorSaiu: criarEscalacao(2023, 'FOR', 'hércules', 0, 0, 0, 0, fortaleza),
          jogadorEntrou: criarEscalacao(2023, 'FOR', 'iago pikachu', 0, 0, 0, 0, fortaleza),
        },
        {
          jogadorSaiu: criarEscalacao(2023, 'FOR', 'calebe', 0, 0, 0, 0, fortaleza),
          jogadorEntrou: criarEscalacao(2023, 'FOR', 'pochettino', 0, 0, 0, 0, fortaleza),
        },
        {
          jogadorSaiu: criarEscalacao(2023, 'FOR', 'moisés', 0, 0, 0, 0, fortaleza),
          jogadorEntrou: criarEscalacao(2023, 'FOR', 'romarinho', 0, 0, 0, 0, fortaleza),
        },
        {
          jogadorSaiu: criarEscalacao(2023, 'FOR', 'thiago galhardo', 0, 0, 0, 0, fortaleza),
          jogadorEntrou: criarEscalacao(2023, 'FOR', 'silvio romero', 0, 0, 1, 0, fortaleza),
        }
      ]
    }
  };

  return detalheJogo;
}

const criarDetalheJogo36 = (): IDetalhesJogo => {

  const cruzeiro = getElenco(2023, 'CRU');
  const santos = getElenco(2023, 'SAN');

  const escalacaoMandante: IEscalacao[] = [
    criarEscalacao(2023, 'CRU', 'rafael cabral', 0, 0, 0, 0, cruzeiro),
    criarEscalacao(2023, 'CRU', 'willian', 0, 0, 1, 0, cruzeiro),
    criarEscalacao(2023, 'CRU', 'oliveira', 0, 0, 1, 0, cruzeiro),
    criarEscalacao(2023, 'CRU', 'luciano castan', 0, 0, 0, 0, cruzeiro),
    criarEscalacao(2023, 'CRU', 'marlon', 0, 0, 0, 0, cruzeiro),
    criarEscalacao(2023, 'CRU', 'richard', 0, 0, 1, 0, cruzeiro),
    criarEscalacao(2023, 'CRU', 'ramiro', 0, 0, 1, 0, cruzeiro),
    criarEscalacao(2023, 'CRU', 'mateus vital', 0, 0, 0, 0, cruzeiro),
    criarEscalacao(2023, 'CRU', 'bruno rodrigues', 0, 0, 0, 0, cruzeiro),
    criarEscalacao(2023, 'CRU', 'rafael bilu', 0, 0, 0, 0, cruzeiro),
    criarEscalacao(2023, 'CRU', 'gilberto', 0, 0, 0, 0, cruzeiro),
  ];

  const escalacaoVisitante: IEscalacao[] = [
    criarEscalacao(2023, 'SAN', 'joão paulo', 0, 0, 0, 0, santos),
    criarEscalacao(2023, 'SAN', 'nathan', 0, 0, 0, 0, santos),
    criarEscalacao(2023, 'SAN', 'messias', 0, 0, 0, 0, santos),
    criarEscalacao(2023, 'SAN', 'joaquim', 0, 0, 0, 0, santos),
    criarEscalacao(2023, 'SAN', 'lucas pires', 0, 0, 0, 0, santos),
    criarEscalacao(2023, 'SAN', 'rodrigo fernandez', 0, 0, 1, 0, santos),
    criarEscalacao(2023, 'SAN', 'camacho', 0, 0, 0, 0, santos),
    criarEscalacao(2023, 'SAN', 'lucas lima', 0, 0, 1, 0, santos),
    criarEscalacao(2023, 'SAN', 'mendoza', 0, 0, 0, 0, santos),
    criarEscalacao(2023, 'SAN', 'marcos leonardo', 0, 0, 0, 0, santos),
    criarEscalacao(2023, 'SAN', 'lucas braga', 0, 0, 0, 0, santos),
  ];

  const detalheJogo: IDetalhesJogo = {
    ano: 2023,
    idJogo: 36,
    idRodada: 4,
    mandante: {
      esquemaTatico: '4-3-3',
      treinador: cruzeiro.treinador,
      escalacao: escalacaoMandante,
      substituicoes: [
        {
          jogadorSaiu: criarEscalacao(2023, 'CRU', 'ramiro', 0, 0, 0, 0, cruzeiro),
          jogadorEntrou: criarEscalacao(2023, 'CRU', 'felipe machado', 0, 0, 0, 0, cruzeiro),
        },
        {
          jogadorSaiu: criarEscalacao(2023, 'CRU', 'mateus vital', 0, 0, 0, 0, cruzeiro),
          jogadorEntrou: criarEscalacao(2023, 'CRU', 'neto moura', 0, 0, 0, 0, cruzeiro),
        },
        {
          jogadorSaiu: criarEscalacao(2023, 'CRU', 'gilberto', 0, 0, 0, 0, cruzeiro),
          jogadorEntrou: criarEscalacao(2023, 'CRU', 'h. dourado', 0, 0, 1, 0, cruzeiro),
        },
        {
          jogadorSaiu: criarEscalacao(2023, 'CRU', 'rafael bilu', 0, 0, 0, 0, cruzeiro),
          jogadorEntrou: criarEscalacao(2023, 'CRU', 'wesley', 2, 0, 0, 0, cruzeiro),
        },
      ]
    },
    visitante: {
      esquemaTatico: '4-3-3',
      treinador: santos.treinador,
      escalacao: escalacaoVisitante,
      substituicoes: [
        {
          jogadorSaiu: criarEscalacao(2023, 'SAN', 'nathan', 0, 0, 0, 0, santos),
          jogadorEntrou: criarEscalacao(2023, 'SAN', 'gabriel inocêncio', 0, 0, 1, 0, santos),
        },
        {
          jogadorSaiu: criarEscalacao(2023, 'SAN', 'rodrigo fernandez', 0, 0, 0, 0, santos),
          jogadorEntrou: criarEscalacao(2023, 'SAN', 'ed carlos', 0, 0, 0, 0, santos),
        },
        {
          jogadorSaiu: criarEscalacao(2023, 'SAN', 'camacho', 0, 0, 0, 0, santos),
          jogadorEntrou: criarEscalacao(2023, 'SAN', 'd. washington', 0, 0, 0, 0, santos)
        },
        {
          jogadorSaiu: criarEscalacao(2023, 'SAN', 'lucas lima', 0, 0, 0, 0, santos),
          jogadorEntrou: criarEscalacao(2023, 'SAN', 'dani', 0, 0, 0, 0, santos)
        }
        ,
        {
          jogadorSaiu: criarEscalacao(2023, 'SAN', 'lucas braga', 0, 0, 0, 0, santos),
          jogadorEntrou: criarEscalacao(2023, 'SAN', 'ângelo', 1, 0, 0, 0, santos)
        }
      ],
    }
  };

  return detalheJogo;
}

const criarDetalheJogo37 = (): IDetalhesJogo => {

  const gremio = getElenco(2023, 'GRE');
  const bragantino = getElenco(2023, 'RBB');

  const escalacaoMandante: IEscalacao[] = [
    criarEscalacao(2023, 'GRE', 'gabriel grando', 0, 0, 0, 0, gremio),
    criarEscalacao(2023, 'GRE', 'thomas luciano', 0, 0, 0, 0, gremio),
    criarEscalacao(2023, 'GRE', 'bruno alves', 0, 0, 0, 0, gremio),
    criarEscalacao(2023, 'GRE', 'bruno uvini', 0, 0, 1, 0, gremio),
    criarEscalacao(2023, 'GRE', 'diogo barbosa', 0, 0, 0, 0, gremio),
    criarEscalacao(2023, 'GRE', 'lucas silva', 0, 0, 0, 0, gremio),
    criarEscalacao(2023, 'GRE', 'mila', 0, 0, 0, 0, gremio),
    criarEscalacao(2023, 'GRE', 'bitello', 0, 0, 0, 0, gremio),
    criarEscalacao(2023, 'GRE', 'cristaldo', 1, 0, 0, 0, gremio),
    criarEscalacao(2023, 'GRE', 'vina', 0, 0, 1, 0, gremio),
    criarEscalacao(2023, 'GRE', 'luis suárez', 1, 0, 0, 0, gremio),
  ];

  const escalacaoVisitante: IEscalacao[] = [
    criarEscalacao(2023, 'RBB', 'lucão', 0, 0, 0, 0, bragantino),
    criarEscalacao(2023, 'RBB', 'andrés hurtado', 0, 0, 0, 0, bragantino),
    criarEscalacao(2023, 'RBB', 'eduardo santos', 0, 0, 0, 0, bragantino),
    criarEscalacao(2023, 'RBB', 'natan', 0, 0, 0, 0, bragantino),
    criarEscalacao(2023, 'RBB', 'juninho capixaba', 0, 0, 0, 0, bragantino),
    criarEscalacao(2023, 'RBB', 'matheus fernandes', 1, 0, 1, 0, bragantino),
    criarEscalacao(2023, 'RBB', 'jadsom silva', 0, 0, 0, 0, bragantino),
    criarEscalacao(2023, 'RBB', 'lucas evangelista', 0, 0, 0, 0, bragantino),
    criarEscalacao(2023, 'RBB', 'bruninho', 0, 0, 0, 0, bragantino),
    criarEscalacao(2023, 'RBB', 'eduardo sasha', 1, 0, 0, 0, bragantino),
    criarEscalacao(2023, 'RBB', 'helinho', 0, 0, 0, 0, bragantino),
  ];

  const detalheJogo: IDetalhesJogo = {
    ano: 2023,
    idJogo: 37,
    idRodada: 4,
    mandante: {
      esquemaTatico: '4-3-3',
      treinador: gremio.treinador,
      escalacao: escalacaoMandante,
      substituicoes: [
        {
          jogadorSaiu: criarEscalacao(2023, 'GRE', 'lucas silva', 0, 0, 0, 0, gremio),
          jogadorEntrou: criarEscalacao(2023, 'GRE', 'zinho', 0, 0, 0, 0, gremio),
        },
        {
          jogadorSaiu: criarEscalacao(2023, 'GRE', 'mila', 0, 0, 0, 0, gremio),
          jogadorEntrou: criarEscalacao(2023, 'GRE', 'gustavinho', 0, 0, 1, 0, gremio),
        },
        {
          jogadorSaiu: criarEscalacao(2023, 'GRE', 'cristaldo', 0, 0, 0, 0, gremio),
          jogadorEntrou: criarEscalacao(2023, 'GRE', 'nathan', 0, 0, 1, 0, gremio),
        },
        {
          jogadorSaiu: criarEscalacao(2023, 'GRE', 'luis suárez', 1, 0, 0, 0, gremio),
          jogadorEntrou: criarEscalacao(2023, 'GRE', 'andré henrique', 0, 0, 0, 0, gremio),
        },
        {
          jogadorSaiu: criarEscalacao(2023, 'GRE', 'vina', 0, 0, 0, 0, gremio),
          jogadorEntrou: criarEscalacao(2023, 'GRE', 'everton galdino', 0, 0, 1, 0, gremio),
        }
      ]
    },
    visitante: {
      esquemaTatico: '4-3-3',
      treinador: bragantino.treinador,
      escalacao: escalacaoVisitante,
      substituicoes: [
        {
          jogadorSaiu: criarEscalacao(2023, 'RBB', 'matheus fernandes', 0, 0, 0, 0, bragantino),
          jogadorEntrou: criarEscalacao(2023, 'RBB', 'thiago borbas', 1, 0, 0, 0, bragantino),
        },
        {
          jogadorSaiu: criarEscalacao(2023, 'RBB', 'bruninho', 0, 0, 0, 0, bragantino),
          jogadorEntrou: criarEscalacao(2023, 'RBB', 'vitinho', 0, 0, 1, 0, bragantino),
        },
        {
          jogadorSaiu: criarEscalacao(2023, 'RBB', 'helinho', 0, 0, 0, 0, bragantino),
          jogadorEntrou: criarEscalacao(2023, 'RBB', 'henry mosquera', 0, 0, 0, 0, bragantino),
        },
      ],
    }
  };

  return detalheJogo;
}

const criarDetalheJogo38 = (): IDetalhesJogo => {

  const athletico = getElenco(2023, 'CAP');
  const flamengo = getElenco(2023, 'FLA');

  const escalacaoMandante: IEscalacao[] = [
    criarEscalacao(2023, 'CAP', 'bento', 0, 0, 0, 0, athletico),
    criarEscalacao(2023, 'CAP', 'khellven', 0, 0, 0, 0, athletico),
    criarEscalacao(2023, 'CAP', 'pedro henrique', 0, 0, 0, 0, athletico),
    criarEscalacao(2023, 'CAP', 'thiago heleno', 0, 0, 0, 0, athletico),
    criarEscalacao(2023, 'CAP', 'pedrinho', 0, 0, 0, 0, athletico),
    criarEscalacao(2023, 'CAP', 'fernandinho', 0, 0, 1, 0, athletico),
    criarEscalacao(2023, 'CAP', 'erick', 1, 0, 1, 0, athletico),
    criarEscalacao(2023, 'CAP', 'rômulo', 0, 0, 0, 0, athletico),
    criarEscalacao(2023, 'CAP', 'christian', 0, 0, 0, 0, athletico),
    criarEscalacao(2023, 'CAP', 'david terans', 0, 0, 0, 0, athletico),
    criarEscalacao(2023, 'CAP', 'vitor roque', 1, 0, 0, 0, athletico),
  ];

  const escalacaoVisitante: IEscalacao[] = [
    criarEscalacao(2023, 'FLA', 'santos', 0, 0, 0, 0, flamengo),
    criarEscalacao(2023, 'FLA', 'wesley', 0, 0, 0, 0, flamengo),
    criarEscalacao(2023, 'FLA', 'fabricio bruno', 0, 0, 0, 0, flamengo),
    criarEscalacao(2023, 'FLA', 'léo pereira', 0, 0, 0, 0, flamengo),
    criarEscalacao(2023, 'FLA', 'ayrton lucas', 0, 0, 0, 0, flamengo),
    criarEscalacao(2023, 'FLA', 'erick pulgar', 0, 0, 1, 0, flamengo),
    criarEscalacao(2023, 'FLA', 'thiago maia', 0, 0, 0, 0, flamengo),
    criarEscalacao(2023, 'FLA', 'everton ribeiro', 0, 0, 0, 0, flamengo),
    criarEscalacao(2023, 'FLA', 'everton cebolinha', 0, 0, 0, 0, flamengo),
    criarEscalacao(2023, 'FLA', 'matheus frança', 0, 0, 0, 0, flamengo),
    criarEscalacao(2023, 'FLA', 'gabriel barbosa', 1, 0, 1, 0, flamengo),
  ];

  const detalheJogo: IDetalhesJogo = {
    ano: 2023,
    idJogo: 38,
    idRodada: 4,
    mandante: {
      esquemaTatico: '4-4-2',
      treinador: athletico.treinador,
      escalacao: escalacaoMandante,
      substituicoes: [
        {
          jogadorSaiu: criarEscalacao(2023, 'CAP', 'erick', 0, 0, 0, 0, athletico),
          jogadorEntrou: criarEscalacao(2023, 'CAP', 'hugo moura', 0, 0, 0, 0, athletico),
        },
        {
          jogadorSaiu: criarEscalacao(2023, 'CAP', 'christian', 0, 0, 0, 0, athletico),
          jogadorEntrou: criarEscalacao(2023, 'CAP', 'bryan garcia', 0, 0, 0, 0, athletico),
        },
        {
          jogadorSaiu: criarEscalacao(2023, 'CAP', 'rômulo', 0, 0, 0, 0, athletico),
          jogadorEntrou: criarEscalacao(2023, 'CAP', 'thiago andrade', 0, 0, 0, 0, athletico),
        },
        {
          jogadorSaiu: criarEscalacao(2023, 'CAP', 'david terans', 0, 0, 0, 0, athletico),
          jogadorEntrou: criarEscalacao(2023, 'CAP', 'pablo', 0, 0, 0, 0, athletico),
        },
        {
          jogadorSaiu: criarEscalacao(2023, 'CAP', 'vitor roque', 0, 0, 0, 0, athletico),
          jogadorEntrou: criarEscalacao(2023, 'CAP', 'canobbio', 0, 0, 0, 0, athletico),
        },
      ]
    },
    visitante: {
      esquemaTatico: '4-4-2',
      treinador: flamengo.treinador,
      escalacao: escalacaoVisitante,
      substituicoes: [
        {
          jogadorSaiu: criarEscalacao(2023, 'FLA', 'santos', 0, 0, 0, 0, flamengo),
          jogadorEntrou: criarEscalacao(2023, 'FLA', 'matheus cunha', 0, 0, 0, 0, flamengo),
        },
        {
          jogadorSaiu: criarEscalacao(2023, 'FLA', 'thiago maia', 0, 0, 0, 0, flamengo),
          jogadorEntrou: criarEscalacao(2023, 'FLA', 'victor hugo', 0, 0, 0, 0, flamengo),
        },
        {
          jogadorSaiu: criarEscalacao(2023, 'FLA', 'everton ribeiro', 0, 0, 0, 0, flamengo),
          jogadorEntrou: criarEscalacao(2023, 'FLA', 'arrascaeta', 0, 0, 0, 0, flamengo),
        },
        {
          jogadorSaiu: criarEscalacao(2023, 'FLA', 'matheus frança', 0, 0, 0, 0, flamengo),
          jogadorEntrou: criarEscalacao(2023, 'FLA', 'marinho', 0, 0, 0, 0, flamengo),
        },
      ],
    }
  };

  return detalheJogo;
}

const criarDetalheJogo40 = (): IDetalhesJogo => {

  const america = getElenco(2023, 'AME');
  const cuiaba = getElenco(2023, 'CUI');

  const escalacaoMandante: IEscalacao[] = [
    criarEscalacao(2023, 'AME', 'matheus cavichioli', 0, 0, 0, 1, america),
    criarEscalacao(2023, 'AME', 'marcinho', 0, 0, 0, 0, america),
    criarEscalacao(2023, 'AME', 'iago maidana', 0, 0, 0, 0, america),
    criarEscalacao(2023, 'AME', 'danilo avelar', 0, 0, 0, 0, america),
    criarEscalacao(2023, 'AME', 'marlon', 0, 1, 1, 0, america),
    criarEscalacao(2023, 'AME', 'juninho', 0, 0, 0, 0, america),
    criarEscalacao(2023, 'AME', 'alê', 0, 0, 1, 0, america),
    criarEscalacao(2023, 'AME', 'benitez', 0, 0, 0, 0, america),
    criarEscalacao(2023, 'AME', 'felipe azevedo', 0, 0, 0, 0, america),
    criarEscalacao(2023, 'AME', 'aloísio', 1, 0, 0, 0, america),
    criarEscalacao(2023, 'AME', 'everaldo', 0, 0, 0, 0, america),
  ];

  const escalacaoVisitante: IEscalacao[] = [
    criarEscalacao(2023, 'CUI', 'walter', 0, 0, 0, 0, cuiaba),
    criarEscalacao(2023, 'CUI', 'matheus alexandre', 0, 0, 0, 0, cuiaba),
    criarEscalacao(2023, 'CUI', 'marllon', 0, 0, 0, 0, cuiaba),
    criarEscalacao(2023, 'CUI', 'alan empereur', 0, 0, 1, 0, cuiaba),
    criarEscalacao(2023, 'CUI', 'matheusinho', 0, 0, 0, 0, cuiaba),
    criarEscalacao(2023, 'CUI', 'filipe augusto', 0, 0, 0, 0, cuiaba),
    criarEscalacao(2023, 'CUI', 'raniele', 0, 0, 0, 0, cuiaba),
    criarEscalacao(2023, 'CUI', 'ceppelini', 0, 0, 1, 0, cuiaba),
    criarEscalacao(2023, 'CUI', 'emerson', 0, 0, 0, 0, cuiaba),
    criarEscalacao(2023, 'CUI', 'deyverson', 0, 0, 0, 0, cuiaba),
    criarEscalacao(2023, 'CUI', 'iury castilho', 0, 0, 0, 0, cuiaba),
  ];

  const detalheJogo: IDetalhesJogo = {
    ano: 2023,
    idJogo: 40,
    idRodada: 4,
    mandante: {
      esquemaTatico: '4-3-3',
      treinador: america.treinador,
      escalacao: escalacaoMandante,
      substituicoes: [
        {
          jogadorSaiu: criarEscalacao(2023, 'AME', 'marcinho', 0, 0, 0, 0, america),
          jogadorEntrou: criarEscalacao(2023, 'AME', 'nino paraiba', 0, 0, 0, 0, america),
        },
        {
          jogadorSaiu: criarEscalacao(2023, 'AME', 'benitez', 0, 0, 0, 0, america),
          jogadorEntrou: criarEscalacao(2023, 'AME', 'lucas kal', 0, 0, 0, 0, america),
        },
        {
          jogadorSaiu: criarEscalacao(2023, 'AME', 'felipe azevedo', 0, 0, 0, 0, america),
          jogadorEntrou: criarEscalacao(2023, 'AME', 'mateus gonçalves', 0, 0, 1, 0, america),
        },
        {
          jogadorSaiu: criarEscalacao(2023, 'AME', 'aloísio', 0, 0, 0, 0, america),
          jogadorEntrou: criarEscalacao(2023, 'AME', 'mikael', 0, 0, 0, 0, america),
        },
        {
          jogadorSaiu: criarEscalacao(2023, 'AME', 'everaldo', 0, 0, 0, 0, america),
          jogadorEntrou: criarEscalacao(2023, 'AME', 'martinez', 0, 0, 0, 0, america),
        }
      ]
    },
    visitante: {
      esquemaTatico: '4-3-3',
      treinador: cuiaba.treinador,
      escalacao: escalacaoVisitante,
      substituicoes: [
        {
          jogadorSaiu: criarEscalacao(2023, 'CUI', 'raniele', 0, 0, 0, 0, cuiaba),
          jogadorEntrou: criarEscalacao(2023, 'CUI', 'ronald lopes', 1, 0, 0, 0, cuiaba),
        },
        {
          jogadorSaiu: criarEscalacao(2023, 'CUI', 'ceppelini', 0, 0, 0, 0, cuiaba),
          jogadorEntrou: criarEscalacao(2023, 'CUI', 'quagliata', 0, 0, 0, 0, cuiaba),
        },
        {
          jogadorSaiu: criarEscalacao(2023, 'CUI', 'emerson', 0, 0, 0, 0, cuiaba),
          jogadorEntrou: criarEscalacao(2023, 'CUI', 'jonathan cafu', 0, 0, 0, 0, cuiaba),
        },
        {
          jogadorSaiu: criarEscalacao(2023, 'CUI', 'deyverson', 0, 0, 0, 0, cuiaba),
          jogadorEntrou: criarEscalacao(2023, 'CUI', 'pitta', 0, 0, 0, 0, cuiaba),
        },
        {
          jogadorSaiu: criarEscalacao(2023, 'CUI', 'iury castilho', 0, 0, 0, 0, cuiaba),
          jogadorEntrou: criarEscalacao(2023, 'CUI', 'wellington silva', 0, 0, 0, 0, cuiaba),
        },
      ],
    }
  };

  return detalheJogo;
}

const criarDetalheJogo45 = (): IDetalhesJogo => {

  const bragantino = getElenco(2023, 'RBB');
  const america = getElenco(2023, 'AME');

  const escalacaoMandante: IEscalacao[] = [
    criarEscalacao(2023, 'RBB', 'cleiton', 0, 0, 0, 0, bragantino),
    criarEscalacao(2023, 'RBB', 'aderlan', 0, 0, 0, 0, bragantino),
    criarEscalacao(2023, 'RBB', 'eduardo santos', 0, 0, 1, 0, bragantino),
    criarEscalacao(2023, 'RBB', 'natan', 0, 0, 0, 0, bragantino),
    criarEscalacao(2023, 'RBB', 'juninho capixaba', 0, 0, 0, 0, bragantino),
    criarEscalacao(2023, 'RBB', 'matheus fernandes', 0, 0, 0, 0, bragantino),
    criarEscalacao(2023, 'RBB', 'lucas evangelista', 0, 0, 0, 0, bragantino),
    criarEscalacao(2023, 'RBB', 'bruninho', 0, 0, 0, 0, bragantino),
    criarEscalacao(2023, 'RBB', 'helinho', 2, 0, 0, 0, bragantino),
    criarEscalacao(2023, 'RBB', 'eduardo sasha', 0, 0, 1, 0, bragantino),
    criarEscalacao(2023, 'RBB', 'vitinho', 0, 0, 1, 0, bragantino),
  ];

  const escalacaoVisitante: IEscalacao[] = [
    criarEscalacao(2023, 'AME', 'mateus pasinato', 0, 0, 0, 0, america),
    criarEscalacao(2023, 'AME', 'marcinho', 0, 0, 1, 0, america),
    criarEscalacao(2023, 'AME', 'éder', 0, 0, 1, 0, america),
    criarEscalacao(2023, 'AME', 'ricardo silva', 0, 0, 0, 0, america),
    criarEscalacao(2023, 'AME', 'nicolas', 0, 0, 0, 0, america),
    criarEscalacao(2023, 'AME', 'juninho', 0, 0, 0, 0, america),
    criarEscalacao(2023, 'AME', 'alê', 0, 0, 0, 0, america),
    criarEscalacao(2023, 'AME', 'benitez', 0, 0, 0, 0, america),
    criarEscalacao(2023, 'AME', 'felipe azevedo', 0, 0, 0, 0, america),
    criarEscalacao(2023, 'AME', 'aloísio', 2, 0, 0, 0, america),
    criarEscalacao(2023, 'AME', 'everaldo', 0, 0, 1, 0, america),
  ];

  const detalheJogo: IDetalhesJogo = {
    ano: 2023,
    idJogo: 45,
    idRodada: 5,
    mandante: {
      esquemaTatico: '4-3-3',
      treinador: bragantino.treinador,
      escalacao: escalacaoMandante,
      substituicoes: [
        {
          jogadorSaiu: criarEscalacao(2023, 'RBB', 'juninho capixaba', 0, 0, 0, 0, bragantino),
          jogadorEntrou: criarEscalacao(2023, 'RBB', 'guilherme lopes', 0, 0, 0, 0, bragantino),
        },
        {
          jogadorSaiu: criarEscalacao(2023, 'RBB', 'lucas evangelista', 0, 0, 0, 0, bragantino),
          jogadorEntrou: criarEscalacao(2023, 'RBB', 'jadsom silva', 0, 0, 1, 0, bragantino),
        },
        {
          jogadorSaiu: criarEscalacao(2023, 'RBB', 'bruninho', 0, 0, 0, 0, bragantino),
          jogadorEntrou: criarEscalacao(2023, 'RBB', 'gustavinho', 0, 0, 0, 0, bragantino),
        },
        {
          jogadorSaiu: criarEscalacao(2023, 'RBB', 'helinho', 2, 0, 0, 0, bragantino),
          jogadorEntrou: criarEscalacao(2023, 'RBB', 'sorriso', 0, 0, 0, 0, bragantino),
        },
        {
          jogadorSaiu: criarEscalacao(2023, 'RBB', 'eduardo sasha', 0, 0, 1, 0, bragantino),
          jogadorEntrou: criarEscalacao(2023, 'RBB', 'thiago borbas', 0, 0, 1, 0, bragantino),
        },
      ]
    },
    visitante: {
      esquemaTatico: '4-3-3',
      treinador: america.treinador,
      escalacao: escalacaoVisitante,
      substituicoes: [
        {
          jogadorSaiu: criarEscalacao(2023, 'AME', 'marcinho', 0, 0, 0, 0, america),
          jogadorEntrou: criarEscalacao(2023, 'AME', 'iago maidana', 0, 0, 0, 0, america),
        },
        {
          jogadorSaiu: criarEscalacao(2023, 'AME', 'nicolas', 0, 0, 0, 0, america),
          jogadorEntrou: criarEscalacao(2023, 'AME', 'danilo avelar', 0, 0, 0, 0, america),
        },
        {
          jogadorSaiu: criarEscalacao(2023, 'AME', 'alê', 0, 0, 0, 0, america),
          jogadorEntrou: criarEscalacao(2023, 'AME', 'martinez', 0, 0, 0, 0, america),
        },
        {
          jogadorSaiu: criarEscalacao(2023, 'AME', 'everaldo', 0, 0, 0, 0, america),
          jogadorEntrou: criarEscalacao(2023, 'AME', 'renato marques', 0, 0, 0, 0, america),
        },
        {
          jogadorSaiu: criarEscalacao(2023, 'AME', 'felipe azevedo', 0, 0, 0, 0, america),
          jogadorEntrou: criarEscalacao(2023, 'AME', 'mikael', 0, 0, 0, 0, america),
        },
      ],
    }
  };

  return detalheJogo;
}

export const criarEscalacao = (ano: number, apelidoClube: string, nomeJogador: string,
  gols: number = 0,
  golsContra: number = 0,
  cartoesAmarelos: number = 0,
  cartoesVermelhos: number = 0,
  elenco: IEquipe) => {

  const escalacao: IEscalacao = {
    jogadorElenco: elenco.elenco?.filter(ele => ele.jogador && ele.jogador.apelido.toLowerCase() === nomeJogador.toLowerCase())[0],
    gols,
    golsContra,
    cartoesAmarelos,
    cartoesVermelhos
  };

  return escalacao;
}

const getJogosLocalStorage = (idRodada: number): IJogo[] => {
  let jogosLocalStorage = localStorage.getItem('jogos_rodada_' + idRodada.toString());

  let jogos: IJogo[] = [];

  if (jogosLocalStorage)
    jogos = JSON.parse(jogosLocalStorage);

  return jogos;
}

export const getDetallheJogo = (idJogo: number, idRodada: number): IDetalhesJogo | undefined => {

  const jogos = getJogosLocalStorage(idRodada);

  if (jogos) {
    const jogo = jogos.filter(j => j.id === idJogo)[0];
    if (jogo)
      return jogo.detalhesJogo;
  }

  return detalhesJogos().filter(dj => dj.idJogo === idJogo && dj.idRodada === idRodada)[0];
}

export const gravarJogosLocalStorage = (jogo: IJogo) => {
  let jogos = getJogosLocalStorage(jogo.numeroRodada);

  if (jogos && jogos.length > 0) {

    const jogoMap = jogos.filter(j => j.id === jogo.id)[0];

    if (jogoMap !== undefined && jogoMap !== null) {
      const index = jogos.indexOf(jogoMap);
      jogos.splice(index, 1, jogo);
    }
    else
      jogos.push(jogo);
  }

  else {
    jogos = [
      jogo
    ]
  }

  localStorage.setItem('jogos_rodada_' + jogo.numeroRodada.toString(), JSON.stringify(jogos));

}