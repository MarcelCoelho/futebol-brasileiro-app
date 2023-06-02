import { IEstadio } from "../interfaces/brasileirao/brasileirao.interface";

export const getEstadios = (): IEstadio[] => {

  let estadiosLocalStorage = localStorage.getItem('estadios');

  let estadios: IEstadio[] = [];

  if (estadiosLocalStorage)
    estadios = JSON.parse(estadiosLocalStorage);
  else {
    estadios = [
      criarEstadio('1', 'Governador Magalhães Pinto', 'Mineirão', 'CRU'),
      criarEstadio('2', 'Arena Independência', 'Independência', 'AME'),
      criarEstadio('3', 'Arena Corinthians', 'Neo Química Arena', 'COR'),
      criarEstadio('4', 'Cícero Pompeu de Toledo', 'Morumbi', 'SAO'),
      criarEstadio('5', 'Vila Belmiro', 'Vila Belmiro', 'SAN'),
      criarEstadio('6', 'Arena Palmeiras', 'Allianz Parque', 'PAL'),
      criarEstadio('7', 'Beira Rio', 'Beira Rio', 'INT'),
      criarEstadio('8', 'Arena do Grêmio', 'Arena do Grêmio', 'GRE'),
      criarEstadio('10', 'Estádio Jornalista Mário Filho', 'Maracanã', 'FLA'),
      criarEstadio('11', 'São Januario', 'São Januario', 'VAS'),
      criarEstadio('12', 'Estádio Nilton Santos', 'Nilton Santos', 'BOT'),
      criarEstadio('13', 'Nabi Abi Chedid', 'Nabi Abi Chedid', 'RBB'),
      criarEstadio('14', 'Arena Castelão', 'Arena Castelão', 'FOR'),
      criarEstadio('15', 'Arena da Baixada', 'Arena da Baixada', 'CAP'),
      criarEstadio('16', 'Arena Pantanal', 'Arena Pantanal', 'CUI'),
      criarEstadio('17', 'Couto Pereira', 'Couto Pereira', 'CFC'),
      criarEstadio('18', 'Arena Fonte Nova', 'Arena Fonte Nova', 'BAH'),
      criarEstadio('19', 'Hailé Pinheiro', 'Hailé Pinheiro', 'GOI'),
      criarEstadio('20', 'Arena MRV', 'Arena MRV', 'CAM'),
      criarEstadio('21', 'Alfredo Jaconi', 'Alfredo Jaconi', 'JUV'),
      criarEstadio('22', 'Arena do Jacaré', 'Arena do Jacaré', 'DEM'),
      criarEstadio('23', 'Parque do Sabiá', 'Parque do Sabiá', 'UBE'),
    ];

    localStorage.setItem('estadios', JSON.stringify(estadios));
  }
  return estadios;
}

const criarEstadio = (id: string,
  nome: string,
  apelido: string,
  apelidoClube: string,
  anoFundacao: number = 0,
  capacidade: number = 0,
  recordePublico: number = 0) => {

  return {
    id,
    nome,
    apelido,
    anoFundacao,
    capacidade,
    recordePublico
  };
}

export const getEstadio = (apelido?: string): IEstadio => {
  return getEstadios().filter(estadio => estadio.apelido.toUpperCase() === apelido?.toUpperCase())[0];
}