import { ITemporada, IEquipe } from '../interfaces/brasileirao/brasileirao.interface';
import { getTreinador } from "./treinadores";
import { getClubePorApelido } from './clubes';
import { criarElenco } from './elencos';

export const getTemporadasClube = (ano: number, apelidoClube: string): ITemporada[] => {
  return getTemporadas(ano).filter(temporada => '' === apelidoClube);
}

const getTemporadas = (ano: number): ITemporada[] => {

  const temporadas: ITemporada[] = [
    {
      ano,
      equipes: [
        criarEquipe(ano, 'AME'),
        criarEquipe(ano, 'CAM'),
        criarEquipe(ano, 'CAP'),
        criarEquipe(ano, 'BAH'),
        criarEquipe(ano, 'BOT'),
        criarEquipe(ano, 'COR'),
        criarEquipe(ano, 'CFC'),
        criarEquipe(ano, 'CRU'),
        criarEquipe(ano, 'CUI'),
        criarEquipe(ano, 'FLA'),
        criarEquipe(ano, 'FLU'),
        criarEquipe(ano, 'FOR'),
        criarEquipe(ano, 'GOI'),
        criarEquipe(ano, 'GRE'),
        criarEquipe(ano, 'INT'),
        criarEquipe(ano, 'PAL'),
        criarEquipe(ano, 'RBB'),
        criarEquipe(ano, 'SAN'),
        criarEquipe(ano, 'SAO'),
        criarEquipe(ano, 'VAS'),
      ]
    }
  ];

  return temporadas;
}

const criarEquipe = (ano: number, apelidoClube: string): IEquipe => {

  const nomeTreinador = definirTreinador(apelidoClube);

  const equipe: IEquipe = {
    ano,
    clube: getClubePorApelido(apelidoClube, false),
    treinador: getTreinador(nomeTreinador),
    elenco: criarElenco(apelidoClube)
  };

  return equipe;
}

const definirTreinador = (apelidoClube: string): string => {

  switch (apelidoClube) {
    case 'AME':
      return 'vagner mancine';
    case 'CAM':
      return 'Eduardo Coudet';
    case 'CAP':
      return 'Paulo Turra';
    case 'BOT':
      return 'Luís Castro';
    case 'COR':
      return 'Vanderlei Luxemburgo';
    case 'CRU':
      return 'Pepa';
    case 'CUI':
      return 'Ivo Vieira';
    case 'FLA':
      return 'Jorge Sampaoli';
    case 'FLU':
      return 'Fernando Diniz';
    case 'FOR':
      return 'Juan Vojvoda';
    case 'GOI':
      return 'Emerson Ávila';
    case 'GRE':
      return 'Renato Gaúcho';
    case 'INT':
      return 'Mano Menezes';
    case 'PAL':
      return 'Abel Ferreira';
    case 'RBB':
      return 'Pedro Caixinha';
    case 'SAN':
      return 'Odair Hellmann';
    case 'SAO':
      return 'Dorival Júnior';
    case 'VAS':
      return 'Mauricio Barbieri';
  }

  return 'Nao cadastrado ainda!'
}

export const getElenco = (ano: number, apelidoClube: string): IEquipe => {

  const equipeAno: IEquipe[] = getTemporadas(ano).map(tmp => {
    return (tmp.equipes.filter(eq => eq.ano === ano && eq.clube.apelido === apelidoClube))[0];
  });

  return equipeAno[0];

}