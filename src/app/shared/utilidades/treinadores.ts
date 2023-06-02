import { ITreinador } from "../interfaces/brasileirao/brasileirao.interface";

const getTreinadores = (): ITreinador[] => {
  const treinadores: ITreinador[] = [
    criarTreinador('1', 'Pepa', 'Pepa'),
    criarTreinador('2', 'Eduardo Coudet', 'Eduardo Coudet'),
    criarTreinador('3', 'Vagner Mancine', 'Vagner Mancine'),
    criarTreinador('4', 'Cuca', 'Cuca'),
    criarTreinador('5', 'Dorival Júnior', 'Dorival Júnior'),
    criarTreinador('6', 'Jorge Sampaoli', 'Jorge Sampaoli'),
    criarTreinador('7', 'Abel Ferreira', 'Abel Ferreira'),
    criarTreinador('8', 'Renato Gaúcho', 'Renato Gaúcho'),
    criarTreinador('9', 'Vanderlei Luxemburgo', 'Vanderlei Luxemburgo'),
    criarTreinador('10', 'Mauricio Barbieri', 'Mauricio Barbieri'),
    criarTreinador('11', 'Pedro Caixinha', 'Pedro Caixinha'),
    criarTreinador('12', 'Fernando Lázaro', 'Fernando Lázaro'),
    criarTreinador('13', 'Danilo', 'Danilo'),
    criarTreinador('15', 'Odair Hellmann', 'Odair Hellmann'),
    criarTreinador('16', 'Ivo Vieira', 'Ivo Vieira'),
    criarTreinador('17', 'Juan Vojvoda', 'Juan Vojvoda'),
    criarTreinador('18', 'Emerson Ávila', 'Emerson Ávila'),
    criarTreinador('19', 'Mano Menezes', 'Mano Menezes'),

  ];
  return treinadores;
}

export const getTreinador = (apelido: string): ITreinador => {
  return getTreinadores().filter(treinador => treinador.apelido.toLowerCase() === apelido.toLowerCase())[0];
}

const criarTreinador = (id: string, nome: string, apelido: string): ITreinador => {
  const treinador: ITreinador = {
    id,
    nome,
    apelido
  };
  return treinador;
}