export interface IRodada {
  id: number;
  numero: number;
  jogos: IJogo[];
  finalizada: boolean;
}

export interface IJogo {
  id: number;
  numeroRodada: number;
  data: Date;
  hora: string;
  local?: IEstadio;
  arbitros?: IArbitro;
  canalTransmissao?: ICanalTransmissao;
  clubeMandante: IClube;
  clubeVisitante: IClube;
  golsClubeMandante: number;
  golsClubeVisitante: number;
  cartoesAmarelosClubeMandante: number;
  cartoesAmarelosClubeVisitante: number;
  cartoesVermelhosClubeMandante: number;
  cartoesVermelhosClubeVisitante: number;
  finalizado: boolean;
  cssClasseResultado?: string;
  detalhesJogo?: IDetalhesJogo;
}

export interface IDetalhesJogo {
  ano: number;
  idRodada: number;
  idJogo: number;
  mandante: IInfoJogo;
  visitante: IInfoJogo;
}

export interface IInfoJogo {
  esquemaTatico: string;
  treinador: ITreinador;
  escalacao: IEscalacao[];
  substituicoes: ISubstituicao[];
}

export interface IEscalacao {
  jogadorElenco: IJogadorElenco;
  gols: number;
  golsContra: number;
  cartoesVermelhos: number;
  cartoesAmarelos: number;
}

export interface ISubstituicao {
  jogadorEntrou: IEscalacao;
  jogadorSaiu: IEscalacao;
}

export interface IClassificacao {
  id?: string;
  idClube?: string;
  clube: IClube;
  posicao: number;
  pontos: number;
  jogos: number;
  vitorias: number;
  empates: number;
  derrotas: number;
  golsPro: number;
  golsContra: number;
  saldoGols: number;
  cartoesAmarelos: number;
  cartoesVermelhos: number;
  aproveitamento: number;
  cssClasse?: string;
  proximoJogo?: IClube;
}

export interface IClube {
  id: string;
  nome: string;
  apelido: string;
  mascote?: string;
  logo?: string;
  estadio?: IEstadio;
  temporadas?: ITemporada[];
  corPrimeiroUniforme: string;
  corSegundoUniforme: string;
}

export interface ITemporada {
  ano: number;
  equipes: IEquipe[];
}

export interface IEquipe {
  ano: number;
  clube: IClube;
  treinador: ITreinador;
  elenco: IJogadorElenco[];
}

export interface IJogadorElenco {
  jogador: IJogador;
  numero: number;
}

export interface IJogador {
  id: number;
  nome?: string;
  apelido: string;
  posicao?: string;
  idade?: number;
}

export interface ITreinador {
  id: string;
  nome: string;
  apelido: string;
}

export interface IEstadio {
  id: string;
  nome: string;
  apelido: string;
  clube?: IClube;
  anoFundacao: number;
  capacidade: number;
  recordePublico: number;
}

export interface IArbitro {
  id: string;
  nome: string;
  funcao: string;
}

export interface ICanalTransmissao {
  id: string;
  nome: string;
  valorPlano: number;
}