import { IJogadorElenco } from "../interfaces/brasileirao/brasileirao.interface";
import { criarJogador } from "./jogadores";

export const criarElenco = (apelidoClube: string): IJogadorElenco[] => {

  switch (apelidoClube) {
    case 'AME':
      return criarElencoAmerica();
    case 'CAM':
      return criarElencoAtletico();
    case 'CAP':
      return criarElencoAthletico();
    case 'BAH':
      return criarElencoBahia();
    case 'BOT':
      return criarElencoBotafogo();
    case 'RBB':
      return criarElencoBragantino();
    case 'COR':
      return criarElencoCorinhians();
    case 'CFC':
      return criarElencoCoritiba();
    case 'CRU':
      return criarElencoCruzeiro();
    case 'CUI':
      return criarElencoCuiaba();
    case 'FLA':
      return criarElencoFlamengo();
    case 'FLU':
      return criarElencoFluminense();
    case 'FOR':
      return criarElencoFortaleza();
    case 'GOI':
      return criarElencoGoias();
    case 'GRE':
      return criarElencoGremio();
    case 'INT':
      return criarElencoInternacional();
    case 'PAL':
      return criarElencoPalmeiras();
    case 'SAN':
      return criarElencoSantos();
    case 'SAO':
      return criarElencoSaoPaulo();
    case 'VAS':
      return criarElencoVasco();
  };

  return [];
}

const criarElencoAmerica = (): IJogadorElenco[] => {

  const elenco: IJogadorElenco[] = [
    criarJogadorElenco('Matheus Cavichioli', 1),
    criarJogadorElenco('nino paraiba', 2),
    criarJogadorElenco('iago maidana', 3),
    criarJogadorElenco('Wanderson', 4),
    criarJogadorElenco('martinez', 5),
    criarJogadorElenco('marlon', 6),
    criarJogadorElenco('matheusinho', 7),
    criarJogadorElenco('juninho', 8),
    criarJogadorElenco('w. paulista', 9),
    criarJogadorElenco('benitez', 10),
    criarJogadorElenco('felipe azevedo', 11),
    criarJogadorElenco('arthur', 13),
    criarJogadorElenco('mateus pasinato', 14),
    criarJogadorElenco('alê', 16),
    criarJogadorElenco('mastriani', 17),
    criarJogadorElenco('h. almeida', 19),
    criarJogadorElenco('jori', 20),
    criarJogadorElenco('lucas kal', 21),
    criarJogadorElenco('danilo avelar', 22),
    criarJogadorElenco('robson', 23),
    criarJogadorElenco('marcinho', 25),
    criarJogadorElenco('mateus gonçalves', 27),
    criarJogadorElenco('breno cascardo', 28),
    criarJogadorElenco('nicolas', 30),
    criarJogadorElenco('éder', 33),
    criarJogadorElenco('mateus henrique', 36),
    criarJogadorElenco('everaldo', 37),
    criarJogadorElenco('adyson', 44),
    criarJogadorElenco('ricardo silva', 45),
    criarJogadorElenco('rodriguinho', 75),
    criarJogadorElenco('dadá belmonte', 77),
    criarJogadorElenco('renato marques', 78),
    criarJogadorElenco('luan campos', 80),
    criarJogadorElenco('mikael', 87),
    criarJogadorElenco('aloísio', 99),
  ];

  return elenco;

}

const criarElencoAtletico = (): IJogadorElenco[] => {

  const elenco: IJogadorElenco[] = [
    criarJogadorElenco('Gabriel delfim', 1),
    criarJogadorElenco('bruno fuchs', 3),
    criarJogadorElenco('réver', 4),
    criarJogadorElenco('otávio', 5),
    criarJogadorElenco('dodô', 6),
    criarJogadorElenco('hulk', 7),
    criarJogadorElenco('edenilson', 8),
    criarJogadorElenco('cristian pavón', 9),
    criarJogadorElenco('paulinho', 10),
    criarJogadorElenco('eduardo vargas', 11),
    criarJogadorElenco('guilherme arana', 13),
    criarJogadorElenco('alan kardec', 14),
    criarJogadorElenco('matías zaracho', 15),
    criarJogadorElenco('igor rabello', 16),
    criarJogadorElenco('igor gomes', 17),
    criarJogadorElenco('hyoran', 20),
    criarJogadorElenco('rodrigo battaglia', 21),
    criarJogadorElenco('everson', 22),
    criarJogadorElenco('mariano', 25),
    criarJogadorElenco('renzo saravia', 26),
    criarJogadorElenco('paulo vitor', 27),
    criarJogadorElenco('mauricio lemos', 28),
    criarJogadorElenco('allan', 29),
    criarJogadorElenco('matheus mendes', 31),
    criarJogadorElenco('jemerson', 35),
    criarJogadorElenco('pedrinho', 38),
    criarJogadorElenco('nathan silva', 40),
    criarJogadorElenco('isaac', 41),
    criarJogadorElenco('cadu', 42),
    criarJogadorElenco('rubens', 44),
    criarJogadorElenco('patrick', 49),
  ];

  return elenco;

}

const criarElencoAthletico = (): IJogadorElenco[] => {

  const elenco: IJogadorElenco[] = [
    criarJogadorElenco('bento', 1),
    criarJogadorElenco('khellven', 2),
    criarJogadorElenco('zé ivaldo', 3),
    criarJogadorElenco('kaique rocha', 4),
    criarJogadorElenco('fernandinho', 5),
    criarJogadorElenco('fernando', 6),
    criarJogadorElenco('marcelo cirino', 7),
    criarJogadorElenco('vitor bueno', 8),
    criarJogadorElenco('vitor roque', 9),
    criarJogadorElenco('david terans', 10),
    criarJogadorElenco('willian bigode', 11),
    criarJogadorElenco('khellven', 13),
    criarJogadorElenco('canobbio', 14),
    criarJogadorElenco('hugo moura', 17),
    criarJogadorElenco('léo cittadini', 18),
    criarJogadorElenco('thiago andrade', 19),
    criarJogadorElenco('reinaldo', 20),
    criarJogadorElenco('madson', 22),
    criarJogadorElenco('léo linck', 23),
    criarJogadorElenco('erick', 26),
    criarJogadorElenco('tomás cuello', 28),
    criarJogadorElenco('bryan garcia', 30),
    criarJogadorElenco('luciano arriagada', 32),
    criarJogadorElenco('pedro henrique', 34),
    criarJogadorElenco('rômulo', 35),

    criarJogadorElenco('mycal', 41),
    criarJogadorElenco('matheus felipe', 42),
    criarJogadorElenco('gabriel pereira', 43),
    criarJogadorElenco('thiago heleno', 44),
    criarJogadorElenco('pedrinho', 48),
    criarJogadorElenco('alex santana', 80),
    criarJogadorElenco('christian', 88),
    criarJogadorElenco('emersonn', 90),
    criarJogadorElenco('pablo', 92)
  ];

  return elenco;

}

const criarElencoBahia = (): IJogadorElenco[] => {

  const elenco: IJogadorElenco[] = [
    criarJogadorElenco('danilo fernandes', 1),
    criarJogadorElenco('gabriel xavier', 3),
    criarJogadorElenco('kanu', 4),
    criarJogadorElenco('rezende', 5),
    criarJogadorElenco('jhoanner chávez', 6),
    criarJogadorElenco('ademir', 7),
    criarJogadorElenco('cauly', 8),
    criarJogadorElenco('everaldo', 9),
    criarJogadorElenco('daniel', 10),
    criarJogadorElenco('biel', 11),
    criarJogadorElenco('andré', 13),
    criarJogadorElenco('arthur sales', 14),
    criarJogadorElenco('thaciano', 16),
    criarJogadorElenco('diego rosa', 17),
    criarJogadorElenco('everton', 18),
    criarJogadorElenco('lucas mugni', 19),
    criarJogadorElenco('yago felipe', 20),
    criarJogadorElenco('vinicius mingotti', 21),
    criarJogadorElenco('marcos felipe', 22),
    criarJogadorElenco('patrick verhon', 23),
    criarJogadorElenco('nicolás acevedo', 26),
    criarJogadorElenco('vitor jacaré', 29),
    criarJogadorElenco('vitor hugo', 31),
    criarJogadorElenco('david duarte', 33),
    criarJogadorElenco('kayky', 37),
    criarJogadorElenco('cicinho', 40),
    criarJogadorElenco('marcos victor', 44),
    criarJogadorElenco('ryan carlos', 66),
    criarJogadorElenco('mateus claus', 77),
    criarJogadorElenco('matheus bahia', 79),
  ];

  return elenco;

}

const criarElencoBotafogo = (): IJogadorElenco[] => {

  const elenco: IJogadorElenco[] = [
    criarJogadorElenco('gatito fernandez', 1),
    criarJogadorElenco('rafael', 2),
    criarJogadorElenco('joel carli', 3),
    criarJogadorElenco('luis segovia', 4),
    criarJogadorElenco('danilo barbosa', 5),
    criarJogadorElenco('tchê tchê', 6),
    criarJogadorElenco('victor sá', 7),
    criarJogadorElenco('patrick de paula', 8),
    criarJogadorElenco('tiquinho soares', 9),
    criarJogadorElenco('gustavo sauer', 10),
    criarJogadorElenco('luis henrique', 11),
    criarJogadorElenco('lucas perri', 12),
    criarJogadorElenco('gabriel pires', 14),
    criarJogadorElenco('victor cuesta', 15),
    criarJogadorElenco('hugo', 16),
    criarJogadorElenco('marlon freitas', 17),
    criarJogadorElenco('lucas fernandes', 18),
    criarJogadorElenco('matías segovia', 19),
    criarJogadorElenco('daniel borges', 20),
    criarJogadorElenco('marçal', 21),
    criarJogadorElenco('douglas borges', 22),
    criarJogadorElenco('di placido', 24),
    criarJogadorElenco('carlos alberto', 27),
    criarJogadorElenco('jacob montes', 32),
    criarJogadorElenco('eduardo', 33),
    criarJogadorElenco('adryelson', 34),
    criarJogadorElenco('breno', 35),
    criarJogadorElenco('júnior santos', 37),
    criarJogadorElenco('janderson', 39),
    criarJogadorElenco('lucas mezenga', 40),
    criarJogadorElenco('lucas piazon', 43),
    criarJogadorElenco('igo gabriel', 52),
    criarJogadorElenco('kayque', 62),
    criarJogadorElenco('raí', 75),
    criarJogadorElenco('m. nascimento', 90),
    criarJogadorElenco('philipe sampaio', 94),
    criarJogadorElenco('luis henrique', 99),
  ];

  return elenco;

}

const criarElencoBragantino = (): IJogadorElenco[] => {

  const elenco: IJogadorElenco[] = [
    criarJogadorElenco('Cleiton', 1),
    criarJogadorElenco('Leonardo Realpe', 2),
    criarJogadorElenco('léo ortiz', 3),
    criarJogadorElenco('natan', 4),
    criarJogadorElenco('jadsom silva', 5),
    criarJogadorElenco('eric ramires', 7),
    criarJogadorElenco('lucas evangelista', 8),
    criarJogadorElenco('alerrandro', 9),
    criarJogadorElenco('helinho', 11),
    criarJogadorElenco('maycon', 12),
    criarJogadorElenco('aderlan', 13),
    criarJogadorElenco('kevin', 14),
    criarJogadorElenco('henry mosquera', 16),
    criarJogadorElenco('bruninho', 17),
    criarJogadorElenco('thiago borbas', 18),
    criarJogadorElenco('eduardo sasha', 19),
    criarJogadorElenco('talisson', 21),
    criarJogadorElenco('gustavinho', 22),
    criarJogadorElenco('raul', 23),
    criarJogadorElenco('praxedes', 25),
    criarJogadorElenco('eduardo santos', 26),
    criarJogadorElenco('sorriso', 27),
    criarJogadorElenco('vitinho', 28),
    criarJogadorElenco('juninho capixaba', 29),
    criarJogadorElenco('luan patrick', 30),
    criarJogadorElenco('guilherme lopes', 31),
    criarJogadorElenco('andrés hurtado', 34),
    criarJogadorElenco('matheus fernandes', 35),
    criarJogadorElenco('luan cândido', 36),
    criarJogadorElenco('kawê', 39),
    criarJogadorElenco('lucão', 40),
    criarJogadorElenco('ignacio laquintana', 44),
    criarJogadorElenco('popó', 45),
  ];

  return elenco;

}

const criarElencoCorinhians = (): IJogadorElenco[] => {

  const elenco: IJogadorElenco[] = [
    criarJogadorElenco('rafael ramos', 2),
    criarJogadorElenco('gil', 4),
    criarJogadorElenco('fausto vera', 5),
    criarJogadorElenco('fábio santos', 6),
    criarJogadorElenco('maycon', 7),
    criarJogadorElenco('renato augusto', 8),
    criarJogadorElenco('yuri alberto', 9),
    criarJogadorElenco('róger guedes', 10),
    criarJogadorElenco('romero', 11),
    criarJogadorElenco('cássio', 12),
    criarJogadorElenco('paulinho', 15),
    criarJogadorElenco('giovane', 17),
    criarJogadorElenco('júnior moraes', 18),
    criarJogadorElenco('giuliano', 20),
    criarJogadorElenco('matheus bidu', 21),
    criarJogadorElenco('carlos miguel', 22),
    criarJogadorElenco('fagner', 23),
    criarJogadorElenco('cantillo', 24),
    criarJogadorElenco('bruno méndez', 25),
    criarJogadorElenco('guilherme biro', 26),
    criarJogadorElenco('pedrinho', 27),
    criarJogadorElenco('adson', 28),
    criarJogadorElenco('roni', 29),
    criarJogadorElenco('matheus araújo', 30),
    criarJogadorElenco('balbuena', 31),
    criarJogadorElenco('rafael bilu', 31),
    criarJogadorElenco('matheus donelli', 32),
    criarJogadorElenco('murillo', 34),
    criarJogadorElenco('wesley', 36),
    criarJogadorElenco('du queiroz', 37),
    criarJogadorElenco('barletta', 77),
  ];

  return elenco;

}

const criarElencoCoritiba = (): IJogadorElenco[] => {

  const elenco: IJogadorElenco[] = [
    criarJogadorElenco('gabriel', 1),
    criarJogadorElenco('henrique', 3),
    criarJogadorElenco('jhon chancellor', 4),
    criarJogadorElenco('bruno viana', 5),
    criarJogadorElenco('bruno gomes', 6),
    criarJogadorElenco('andrey', 7),
    criarJogadorElenco('willian farias', 8),
    criarJogadorElenco('rodrigo pinho', 9),
    criarJogadorElenco('marcelino moreno', 10),
    criarJogadorElenco('alef manga', 11),
    criarJogadorElenco('marcão', 12),
    criarJogadorElenco('benjamín kuscevic', 13),
    criarJogadorElenco('natanael', 16),
    criarJogadorElenco('matheus bianqui', 17),
    criarJogadorElenco('zé roberto', 18),
    criarJogadorElenco('gabriel silva', 20),
    criarJogadorElenco('marcos vinícius', 22),
    criarJogadorElenco('júnior urso', 23),
    criarJogadorElenco('victor luis', 26),
    criarJogadorElenco('luan polli', 27),
    criarJogadorElenco('vilar', 28),
    criarJogadorElenco('diogo batista', 29),
    criarJogadorElenco('robson', 30),
    criarJogadorElenco('liziero', 31),
    criarJogadorElenco('boschilia', 35),
    criarJogadorElenco('kaio césar', 37),
    criarJogadorElenco('jean pedroso', 47),
    criarJogadorElenco('jesús trindade', 50),
    criarJogadorElenco('wesley pomba', 57),
    criarJogadorElenco('sidnei', 64),
    criarJogadorElenco('jamerson', 83),
    criarJogadorElenco('willian pottker', 90),
    criarJogadorElenco('matheus cadorini', 99),
  ];

  return elenco;

}

const criarElencoCruzeiro = (): IJogadorElenco[] => {

  const elenco: IJogadorElenco[] = [
    criarJogadorElenco('rafael cabral', 1),
    criarJogadorElenco('wesley gasolina', 2),
    criarJogadorElenco('marlon', 3),
    criarJogadorElenco('luciano castan', 4),
    criarJogadorElenco('wallison', 5),
    criarJogadorElenco('oliveira', 6),
    criarJogadorElenco('mateus vital', 7),
    criarJogadorElenco('neto moura', 8),
    criarJogadorElenco('bruno rodrigues', 9),
    criarJogadorElenco('nikão', 10),
    criarJogadorElenco('wesley', 11),
    criarJogadorElenco('willian', 12),
    criarJogadorElenco('fernando henrique', 15),
    criarJogadorElenco('kaike', 16),
    criarJogadorElenco('ramiro', 17),
    criarJogadorElenco('matheus jussa', 18),
    criarJogadorElenco('ian lucas', 20),
    criarJogadorElenco('gilberto', 21),
    criarJogadorElenco('Stênio', 22),
    criarJogadorElenco('felipe machado', 23),
    criarJogadorElenco('richard', 25),
    criarJogadorElenco('neris', 27),
    criarJogadorElenco('reynaldo', 29),
    criarJogadorElenco('rafael bilu', 31),
    criarJogadorElenco('igor formiga', 33),
    criarJogadorElenco('rodrigo basilio', 41),
    criarJogadorElenco('daniel jr', 48),
    criarJogadorElenco('juan christian', 70),
    criarJogadorElenco('japa', 77),
    criarJogadorElenco('anderson', 98),
    criarJogadorElenco('h. dourado', 99)
  ];

  return elenco;

}

const criarElencoCuiaba = (): IJogadorElenco[] => {

  const elenco: IJogadorElenco[] = [
    criarJogadorElenco('walter', 1),
    criarJogadorElenco('matheus alexandre', 2),
    criarJogadorElenco('vitão', 3),
    criarJogadorElenco('marllon', 4),
    criarJogadorElenco('filipe augusto', 5),
    criarJogadorElenco('uendel', 6),
    criarJogadorElenco('jonathan cafu', 7),
    criarJogadorElenco('ronald lopes', 8),
    criarJogadorElenco('pitta', 9),
    criarJogadorElenco('ceppelini', 10),
    criarJogadorElenco('wellington silva', 11),
    criarJogadorElenco('rikelme', 13),
    criarJogadorElenco('raniele', 14),
    criarJogadorElenco('deyverson', 16),
    criarJogadorElenco('emerson', 17),
    criarJogadorElenco('rikelme', 20),
    criarJogadorElenco('joão carlos', 21),
    criarJogadorElenco('quagliata', 25),
    criarJogadorElenco('v. barreta', 26),
    criarJogadorElenco('denilson', 27),
    criarJogadorElenco('rafael gava', 28),
    criarJogadorElenco('joão maranini', 30),
    criarJogadorElenco('alan empereur', 33),
    criarJogadorElenco('allyson', 34),
    criarJogadorElenco('ricardo cerqueira', 54),
    criarJogadorElenco('gabryel freitas', 84),
    criarJogadorElenco('fernando sobral', 88),
    criarJogadorElenco('patric calmon', 94),
    criarJogadorElenco('matheusinho', 98),
    criarJogadorElenco('iury castilho', 99),
  ];

  return elenco;

}

const criarElencoFlamengo = (): IJogadorElenco[] => {

  const elenco: IJogadorElenco[] = [
    criarJogadorElenco('santos', 1),
    criarJogadorElenco('varela', 2),
    criarJogadorElenco('rodrigo caio', 2),
    criarJogadorElenco('léo pereira', 4),
    criarJogadorElenco('erick pulgar', 5),
    criarJogadorElenco('ayrton lucas', 6),
    criarJogadorElenco('everton ribeiro', 7),
    criarJogadorElenco('thiago maia', 8),
    criarJogadorElenco('pedro', 9),
    criarJogadorElenco('gabriel barbosa', 10),
    criarJogadorElenco('everton cebolinha', 11),
    criarJogadorElenco('arrascaeta', 14),
    criarJogadorElenco('fabricio bruno', 15),
    criarJogadorElenco('filipe luís', 16),
    criarJogadorElenco('gerson', 20),
    criarJogadorElenco('david luiz', 23),
    criarJogadorElenco('matheus cunha', 25),
    criarJogadorElenco('bruno henrique', 27),
    criarJogadorElenco('victor hugo', 29),
    criarJogadorElenco('pablo', 30),
    criarJogadorElenco('marinho', 31),
    criarJogadorElenco('arturo vidal', 32),
    criarJogadorElenco('cleiton', 33),
    criarJogadorElenco('matheuzinho', 34),
    criarJogadorElenco('matheus gonçalves', 40),
    criarJogadorElenco('gabriel noga', 41),
    criarJogadorElenco('matheus frança', 42),
    criarJogadorElenco('wesley', 43),
    criarJogadorElenco('hugo souza', 45),
    criarJogadorElenco('matheusão', 46),
    criarJogadorElenco('igor jesus', 48),
  ];

  return elenco;

}

const criarElencoFluminense = (): IJogadorElenco[] => {

  const elenco: IJogadorElenco[] = [
    criarJogadorElenco('fábio', 1),
    criarJogadorElenco('samuel xavier', 2),
    criarJogadorElenco('vitor mendes', 4),
    criarJogadorElenco('alexsander', 5),
    criarJogadorElenco('jorge', 6),
    criarJogadorElenco('andré', 7),
    criarJogadorElenco('martinelli', 8),
    criarJogadorElenco('john kennedy', 9),
    criarJogadorElenco('ganso', 10),
    criarJogadorElenco('keno', 11),
    criarJogadorElenco('marcelo', 12),
    criarJogadorElenco('germán cano', 14),
    criarJogadorElenco('alan', 18),
    criarJogadorElenco('alexandre jesus', 19),
    criarJogadorElenco('gabriel pirani', 20),
    criarJogadorElenco('j. arias', 21),
    criarJogadorElenco('pedro rangel', 22),
    criarJogadorElenco('guga', 23),
    criarJogadorElenco('manoel', 26),
    criarJogadorElenco('thiago santos', 29),
    criarJogadorElenco('felipe melo', 30),
    criarJogadorElenco('isaac', 32),
    criarJogadorElenco('nino', 33),
    criarJogadorElenco('giovanni', 37),
    criarJogadorElenco('marrony', 38),
    criarJogadorElenco('luan freitas', 40),
    criarJogadorElenco('david braz', 44),
    criarJogadorElenco('lima', 45),
    criarJogadorElenco('vitor eudes', 98),
    criarJogadorElenco('lelê', 99),
  ];

  return elenco;

}

const criarElencoFortaleza = (): IJogadorElenco[] => {

  const elenco: IJogadorElenco[] = [
    criarJogadorElenco('joão ricardo', 1),
    criarJogadorElenco('tinga', 2),
    criarJogadorElenco('ceballos', 3),
    criarJogadorElenco('titi', 4),
    criarJogadorElenco('m. benevenuto', 5),
    criarJogadorElenco('bruno pacheco', 6),
    criarJogadorElenco('pochettino', 7),
    criarJogadorElenco('caio alexandre', 8),
    criarJogadorElenco('lucero', 9),
    criarJogadorElenco('lucas crispin', 10),
    criarJogadorElenco('romarinho', 11),
    criarJogadorElenco('lucas esteves', 13),
    criarJogadorElenco('bernardo schappo', 14),
    criarJogadorElenco('fernando miguel', 16),
    criarJogadorElenco('zé welison', 17),
    criarJogadorElenco('silvio romero', 18),
    criarJogadorElenco('brítez', 19),
    criarJogadorElenco('dudu', 20),
    criarJogadorElenco('moisés', 21),
    criarJogadorElenco('iago pikachu', 22),
    criarJogadorElenco('zanocelo', 25),
    criarJogadorElenco('sammuel', 26),
    criarJogadorElenco('calebe', 27),
    criarJogadorElenco('guilherme', 29),
    criarJogadorElenco('mauricio kozlinski', 30),
    criarJogadorElenco('wesley braga', 31),
    criarJogadorElenco('pedro rocha', 32),
    criarJogadorElenco('hércules', 35),
    criarJogadorElenco('lucas sasha', 88),
    criarJogadorElenco('thiago galhardo', 91)
  ];

  return elenco;

}

const criarElencoGoias = (): IJogadorElenco[] => {

  const elenco: IJogadorElenco[] = [
    criarJogadorElenco('maguinho', 2),
    criarJogadorElenco('lucas halter', 3),
    criarJogadorElenco('sidimar', 4),
    criarJogadorElenco('zé ricardo', 5),
    criarJogadorElenco('sander', 6),
    criarJogadorElenco('vinicius', 7),
    criarJogadorElenco('fellipe bastos', 8),
    criarJogadorElenco('gabriel novaes', 9),
    criarJogadorElenco('julián palacios', 10),
    criarJogadorElenco('diego gonçalves', 11),
    criarJogadorElenco('willian oliveira', 12),
    criarJogadorElenco('bruno santos', 13),
    criarJogadorElenco('felipe', 15),
    criarJogadorElenco('matheus peixoto', 17),
    criarJogadorElenco('ariel', 18),
    criarJogadorElenco('bruno melo', 19),
    criarJogadorElenco('diego', 20),
    criarJogadorElenco('matheus alves', 21),
    criarJogadorElenco('apodI', 22),
    criarJogadorElenco('tadeu', 23),
    criarJogadorElenco('breno herculano', 25),
    criarJogadorElenco('nathan melo', 26),
    criarJogadorElenco('alesson', 27),
    criarJogadorElenco('matheus santos', 30),
    criarJogadorElenco('everton morelli', 40),
    criarJogadorElenco('edu', 43),
    criarJogadorElenco('guilherme', 60),
    criarJogadorElenco('hugo', 66),
    criarJogadorElenco('jhonny lucas silva', 70),
    criarJogadorElenco('marcelo rangel', 88),
    criarJogadorElenco('philippe costa', 90),
    criarJogadorElenco('dodô', 95),
  ];

  return elenco;

}

const criarElencoGremio = (): IJogadorElenco[] => {

  const elenco: IJogadorElenco[] = [
    criarJogadorElenco('brenno', 1),
    criarJogadorElenco('fábio', 2),
    criarJogadorElenco('geromel', 3),
    criarJogadorElenco('kannemann', 4),
    criarJogadorElenco('diogo barbosa', 6),
    criarJogadorElenco('nathan', 7),
    criarJogadorElenco('felipe carballo', 8),
    criarJogadorElenco('luis suárez', 9),
    criarJogadorElenco('ferreira', 10),
    criarJogadorElenco('vina', 11),
    criarJogadorElenco('gabriel grando', 12),
    criarJogadorElenco('everton galdino', 13),
    criarJogadorElenco('bruno uvini', 15),
    criarJogadorElenco('lucas silva', 16),
    criarJogadorElenco('gustavinho', 17),
    criarJogadorElenco('joão pedro', 18),
    criarJogadorElenco('cristaldo', 19),
    criarJogadorElenco('villasanti', 20),
    criarJogadorElenco('reinaldo', 22),
    criarJogadorElenco('pepê', 23),
    criarJogadorElenco('jhonata robert', 25),
    criarJogadorElenco('diego souza', 29),
    criarJogadorElenco('adriel', 31),
    criarJogadorElenco('bruno alves', 34),
    criarJogadorElenco('natã', 36),
    criarJogadorElenco('darlan', 37),
    criarJogadorElenco('bitello', 39),
    criarJogadorElenco('mila', 45),
    criarJogadorElenco('zinho', 48),
    criarJogadorElenco('thomas luciano', 48),
    criarJogadorElenco('gustavo martins', 53),
    criarJogadorElenco('cuiabano', 54),
    criarJogadorElenco('thomas luciano', 58),
    criarJogadorElenco('andré henrique', 77),
  ];

  return elenco;

}

const criarElencoInternacional = (): IJogadorElenco[] => {

  const elenco: IJogadorElenco[] = [
    criarJogadorElenco('keiller', 1),
    criarJogadorElenco('rodrigo moledo', 4),
    criarJogadorElenco('renê', 6),
    criarJogadorElenco('luiz adriano', 9),
    criarJogadorElenco('alan patrick', 10),
    criarJogadorElenco('wanderson', 11),
    criarJogadorElenco('emerson junior', 12),
    criarJogadorElenco('carlos de pena', 14),
    criarJogadorElenco('lucas ramos', 15),
    criarJogadorElenco('fabricio bustos', 16),
    criarJogadorElenco('campanharo', 17),
    criarJogadorElenco('charles aránguiz', 20),
    criarJogadorElenco('igor gomes', 21),
    criarJogadorElenco('nicolás hernandéz', 22),
    criarJogadorElenco('gabriel', 23),
    criarJogadorElenco('anthoni', 24),
    criarJogadorElenco('gabriel mercado', 25),
    criarJogadorElenco('estevão', 26),
    criarJogadorElenco('maurício', 27),
    criarJogadorElenco('pedro henrique', 28),
    criarJogadorElenco('jhonny', 30),
    criarJogadorElenco('jhon', 31),
    criarJogadorElenco('baralhas', 33),
    criarJogadorElenco('alemão', 35),
    criarJogadorElenco('thauan lara', 36),
    criarJogadorElenco('jean dias', 38),
    criarJogadorElenco('gabriel barros', 40),
    criarJogadorElenco('matheus dias', 41),
    criarJogadorElenco('rômulo', 42),
    criarJogadorElenco('vitão', 44),
    criarJogadorElenco('lucca', 45),
  ];

  return elenco;

}

const criarElencoPalmeiras = (): IJogadorElenco[] => {

  const elenco: IJogadorElenco[] = [
    criarJogadorElenco('vinicius silvestre', 1),
    criarJogadorElenco('Marcos rocha', 2),
    criarJogadorElenco('vanderlan', 6),
    criarJogadorElenco('dudu', 7),
    criarJogadorElenco('zé rafael', 8),
    criarJogadorElenco('endrick', 9),
    criarJogadorElenco('rony', 10),
    criarJogadorElenco('bruno tabata', 11),
    criarJogadorElenco('mayke', 12),
    criarJogadorElenco('luan', 13),
    criarJogadorElenco('artur', 14),
    criarJogadorElenco('gustavo gómez', 15),
    criarJogadorElenco('giovani', 17),
    criarJogadorElenco('flaco lópez', 18),
    criarJogadorElenco('breno lopes', 19),
    criarJogadorElenco('eduardo atuesta', 20),
    criarJogadorElenco('weverton', 21),
    criarJogadorElenco('piquerez', 22),
    criarJogadorElenco('raphael veiga', 23),
    criarJogadorElenco('gabriel menino', 25),
    criarJogadorElenco('murilo', 26),
    criarJogadorElenco('richard rios', 27),
    criarJogadorElenco('rafael navarro', 29),
    criarJogadorElenco('jailson', 30),
    criarJogadorElenco('luis guilherme', 31),
    criarJogadorElenco('gustavo garcia', 32),
    criarJogadorElenco('naves', 34),
    criarJogadorElenco('fabinho', 35),
    criarJogadorElenco('jhon jhon', 40),
    criarJogadorElenco('marcelo lomba', 42),
  ];

  return elenco;

}

const criarElencoSantos = (): IJogadorElenco[] => {

  const elenco: IJogadorElenco[] = [
    criarJogadorElenco('vladimir', 1),
    criarJogadorElenco('luiz felipe', 2),
    criarJogadorElenco('felipe jonatan', 3),
    criarJogadorElenco('eduardo bauermann', 4),
    criarJogadorElenco('alison', 5),
    criarJogadorElenco('sandry', 6),
    criarJogadorElenco('dani', 7),
    criarJogadorElenco('marcos leonardo', 9),
    criarJogadorElenco('soteldo', 10),
    criarJogadorElenco('ângelo', 11),
    criarJogadorElenco('gabriel inocêncio', 12),
    criarJogadorElenco('joão lucas', 13),
    criarJogadorElenco('rodrigo fernandez', 14),
    criarJogadorElenco('ivonei', 15),
    criarJogadorElenco('nathan', 16),
    criarJogadorElenco('vinicius balieiro', 17),
    criarJogadorElenco('dodi', 19),
    criarJogadorElenco('mendoza', 20),
    criarJogadorElenco('lucas barbosa', 21),
    criarJogadorElenco('lucas lima', 23),
    criarJogadorElenco('messias', 24),
    criarJogadorElenco('joaquim', 28),
    criarJogadorElenco('camacho', 29),
    criarJogadorElenco('lucas braga', 30),
    criarJogadorElenco('alex', 31),
    criarJogadorElenco('maicon', 33),
    criarJogadorElenco('joão paulo', 34),
    criarJogadorElenco('d. washington', 36),
    criarJogadorElenco('ed carlos', 37),
    criarJogadorElenco('cadu', 40),
    criarJogadorElenco('lucas pires', 44),
    criarJogadorElenco('kevin malthus', 45),
    criarJogadorElenco('miguelito', 47),
    criarJogadorElenco('paulo mazoti', 50),
    criarJogadorElenco('diógenes', 52),
    criarJogadorElenco('bruno mezenga', 88),
    criarJogadorElenco('luan dias', 97),
  ];

  return elenco;

}

const criarElencoSaoPaulo = (): IJogadorElenco[] => {

  const elenco: IJogadorElenco[] = [
    criarJogadorElenco('felipe alves', 1),
    criarJogadorElenco('igor vinicius', 2),
    criarJogadorElenco('ferraresi', 3),
    criarJogadorElenco('diego costa', 4),
    criarJogadorElenco('arboleda', 5),
    criarJogadorElenco('welington', 6),
    criarJogadorElenco('alisson', 7),
    criarJogadorElenco('luan', 8),
    criarJogadorElenco('calleri', 9),
    criarJogadorElenco('luciano', 10),
    criarJogadorElenco('rodrigo nestor', 11),
    criarJogadorElenco('rafinha', 13),
    criarJogadorElenco('galoppo', 14),
    criarJogadorElenco('michel araujo', 15),
    criarJogadorElenco('orejuela', 17),
    criarJogadorElenco('gabriel neves', 20),
    criarJogadorElenco('méndez', 21),
    criarJogadorElenco('david', 22),
    criarJogadorElenco('rafael', 23),
    criarJogadorElenco('wellington rato', 27),
    criarJogadorElenco('alan franco', 28),
    criarJogadorElenco('pablo maia', 29),
    criarJogadorElenco('joão moreira', 30),
    criarJogadorElenco('juan', 31),
    criarJogadorElenco('marcos paulo', 32),
    criarJogadorElenco('caio', 33),
    criarJogadorElenco('raí ramos', 34),
    criarJogadorElenco('lucas beraldo', 35),
    criarJogadorElenco('patryck', 36),
    criarJogadorElenco('talles costa', 37),
    criarJogadorElenco('caio paulista', 38),
    criarJogadorElenco('matheus belém', 44),
    criarJogadorElenco('nathan mendes', 45),
    criarJogadorElenco('erison', 49),
    criarJogadorElenco('young', 50),
    criarJogadorElenco('jandrei', 93),
  ];

  return elenco;

}

const criarElencoVasco = (): IJogadorElenco[] => {

  const elenco: IJogadorElenco[] = [
    criarJogadorElenco('léo jardim', 1),
    criarJogadorElenco('puma rodriguez', 2),
    criarJogadorElenco('léo', 3),
    criarJogadorElenco('patrick de lucca', 5),
    criarJogadorElenco('lucas piton', 6),
    criarJogadorElenco('alex teixeira', 7),
    criarJogadorElenco('jair', 8),
    criarJogadorElenco('pedro raul', 9),
    criarJogadorElenco('gabriel pec', 11),
    criarJogadorElenco('rwan', 12),
    criarJogadorElenco('gabriel dias', 13),
    criarJogadorElenco('luca orellano', 14),
    criarJogadorElenco('figueiredo', 15),
    criarJogadorElenco('eric marcus', 15),
    criarJogadorElenco('vinicius paiva', 17),
    criarJogadorElenco('andrey santos', 18),
    criarJogadorElenco('matías galarza', 19),
    criarJogadorElenco('gabriel carabajal', 20),
    criarJogadorElenco('eguinaldo', 21),
    criarJogadorElenco('manuel capasso', 22),
    criarJogadorElenco('zé gabriel', 23),
    criarJogadorElenco('halls', 23),
    criarJogadorElenco('marlon gomes', 25),
    criarJogadorElenco('rodrigo', 26),
    criarJogadorElenco('paulinho', 29),
    criarJogadorElenco('robson', 30),
    criarJogadorElenco('miranda', 35),
    criarJogadorElenco('zé vitor', 44),
    criarJogadorElenco('riquelme', 45),
    criarJogadorElenco('paulo victor', 66),
    criarJogadorElenco('barros', 88),
    criarJogadorElenco('ivan', 97),
  ];

  return elenco;

}

const criarJogadorElenco = (nome: string, numero: number): IJogadorElenco => {
  const elenco: IJogadorElenco = {
    jogador: criarJogador(0, nome, nome),
    numero: numero
  };

  return elenco;
}