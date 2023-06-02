import { IJogador } from "../interfaces/brasileirao/brasileirao.interface";



export const criarJogador = (id: number, nome: string, apelido: string, posicao: string = '', idade: number = 0): IJogador => {
  const jogador: IJogador = {
    id,
    nome,
    apelido,
    posicao,
    idade
  };
  return jogador;
}