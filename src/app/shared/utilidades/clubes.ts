import { IClube } from "../interfaces/brasileirao/brasileirao.interface";
import { getEstadio } from './estadios';
import { getTemporadasClube } from "./temporadas";

export const getClubePorApelido = (apelido: string, carregarTemporadas: boolean): IClube => {
  return getClubes(carregarTemporadas).filter(clube => clube.apelido === apelido)[0];
}

export const getClubes = (carregarTemporadas: boolean = false): IClube[] => {

  let clubesLocalStorage = localStorage.getItem('clubes');

  let clubes: IClube[] = [];

  if (clubesLocalStorage) {
    clubes = JSON.parse(clubesLocalStorage);
  }
  else {
    clubes = [
      criarClube('1', 'América-MG', 'AME', 'america-MG', 'independência', 'green', 'white', carregarTemporadas),
      criarClube('2', 'Athletico-PR', 'CAP', 'athletico-PR', 'arena da baixada', 'red', 'black', carregarTemporadas),
      criarClube('3', 'Atlético-MG', 'CAM', 'atletico-MG', 'arena mrv', 'black', 'white', carregarTemporadas),
      criarClube('4', 'Bahia', 'BAH', 'bahia', 'arena fonte nova', 'red', 'blue', carregarTemporadas),
      criarClube('5', 'Botafogo', 'BOT', 'botafogo', 'nilton santos', 'black', 'white', carregarTemporadas),
      criarClube('6', 'Bragantino', 'RBB', 'bragantino', 'nabi abi chedid', 'red', 'white', carregarTemporadas),
      criarClube('7', 'Corinthians', 'COR', 'corinthians', 'neo química arena', 'white', 'black', carregarTemporadas),
      criarClube('8', 'Coritiba', 'CFC', 'coritiba', 'couto pereira', 'green', 'white', carregarTemporadas),
      criarClube('9', 'Cruzeiro', 'CRU', 'cruzeiro', 'mineirão', 'blue', 'white', carregarTemporadas),
      criarClube('10', 'Cuiabá', 'CUI', 'cuiaba', 'arena pantanal', 'green', 'white', carregarTemporadas),
      criarClube('11', 'Flamengo', 'FLA', 'flamengo', 'maracanã', 'red', 'white', carregarTemporadas),
      criarClube('12', 'Fluminense', 'FLU', 'fluminense', 'maracanã', 'green', 'red', carregarTemporadas),
      criarClube('13', 'Fortaleza', 'FOR', 'fortaleza', 'arena castelão', 'red', 'blue', carregarTemporadas),
      criarClube('14', 'Goiás', 'GOI', 'goias', 'Hailé Pinheiro', 'green', 'white', carregarTemporadas),
      criarClube('15', 'Grêmio', 'GRE', 'gremio', 'arena do grêmio', 'blue', 'white', carregarTemporadas),
      criarClube('16', 'Internacional', 'INT', 'internacional', 'beira rio', 'red', 'white', carregarTemporadas),
      criarClube('17', 'Palmeiras', 'PAL', 'palmeiras', 'allianz parque', 'green', 'white', carregarTemporadas),
      criarClube('18', 'Santos', 'SAN', 'santos', 'vila belmiro', 'white', 'black', carregarTemporadas),
      criarClube('19', 'São Paulo', 'SAO', 'saopaulo', 'morumbi', 'white', 'red', carregarTemporadas),
      criarClube('20', 'Vasco', 'VAS', 'vasco', 'são januario', 'white', 'black', carregarTemporadas)
    ];
    localStorage.setItem('clubes', JSON.stringify(clubes))
  }
  return clubes;
}

const criarClube = (id: string,
  nome: string,
  apelido: string,
  logo: string,
  estadio: string = '',
  corPrimeiroUniforme: string,
  corSegundoUniforme: string,
  carregarTemporadas: boolean = false): IClube => {

  let clube: IClube = {
    id,
    nome,
    logo,
    apelido,
    estadio: getEstadio(estadio),
    temporadas: [],
    corPrimeiroUniforme,
    corSegundoUniforme,
  }

  if (carregarTemporadas)
    clube.temporadas = getTemporadasClube(2023, apelido);

  return clube;
}