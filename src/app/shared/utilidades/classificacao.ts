import { IClassificacao, IClube, IJogo, IRodada } from "../interfaces/brasileirao/brasileirao.interface";

export const getClassificacao = (rodadas: IRodada[]): IClassificacao[] => {

  let classificacao: IClassificacao[] = [];

  rodadas.map((rodada, index) => {

    rodada.jogos.map(jogo => {

      const estatisticasCLubeMandante = calcularEstatisticasClube(jogo.clubeMandante, rodadas);

      let classificacaoMandante: IClassificacao =
        classificacao.filter(tabela => {
          return tabela.clube.apelido === jogo.clubeMandante.apelido
        })[0];

      if (classificacaoMandante === undefined || classificacaoMandante === null) {

        classificacaoMandante = {
          id: index.toString(),
          posicao: 0,
          clube: jogo.clubeMandante,
          jogos: 0,
          pontos: 0,
          aproveitamento: 0,
          cartoesAmarelos: 0,
          cartoesVermelhos: 0,
          derrotas: 0,
          empates: 0,
          golsContra: 0,
          golsPro: 0,
          saldoGols: 0,
          vitorias: 0,
          proximoJogo: proximoJogo(jogo.clubeMandante, rodada.numero, rodadas)
        };

        classificacao.push(classificacaoMandante);
      }

      classificacaoMandante.jogos = estatisticasCLubeMandante[0];
      classificacaoMandante.pontos = estatisticasCLubeMandante[1];
      classificacaoMandante.vitorias = estatisticasCLubeMandante[2];
      classificacaoMandante.empates = estatisticasCLubeMandante[3];
      classificacaoMandante.derrotas = estatisticasCLubeMandante[4];
      classificacaoMandante.golsPro = estatisticasCLubeMandante[5];
      classificacaoMandante.golsContra = estatisticasCLubeMandante[6];
      classificacaoMandante.saldoGols = estatisticasCLubeMandante[7];
      classificacaoMandante.cartoesVermelhos = estatisticasCLubeMandante[8];
      classificacaoMandante.cartoesAmarelos = estatisticasCLubeMandante[9];
      classificacaoMandante.aproveitamento = estatisticasCLubeMandante[10];

      const estatisticasCLubeVisitante = calcularEstatisticasClube(jogo.clubeVisitante, rodadas);

      let classificacaoVisitante: IClassificacao =
        classificacao.filter(tabela => {
          return tabela.clube.apelido === jogo.clubeVisitante.apelido
        })[0];

      if (classificacaoVisitante === undefined || classificacaoVisitante === null) {

        classificacaoVisitante = {
          id: index.toString(),
          posicao: 0,
          clube: jogo.clubeVisitante,
          jogos: 0,
          pontos: 0,
          aproveitamento: 0,
          cartoesAmarelos: 0,
          cartoesVermelhos: 0,
          derrotas: 0,
          empates: 0,
          golsContra: 0,
          golsPro: 0,
          saldoGols: 0,
          vitorias: 0,
          proximoJogo: proximoJogo(jogo.clubeVisitante, rodada.numero, rodadas)
        };
        classificacao.push(classificacaoVisitante);
      }

      classificacaoVisitante.jogos = estatisticasCLubeVisitante[0];
      classificacaoVisitante.pontos = estatisticasCLubeVisitante[1];
      classificacaoVisitante.vitorias = estatisticasCLubeVisitante[2];
      classificacaoVisitante.empates = estatisticasCLubeVisitante[3];
      classificacaoVisitante.derrotas = estatisticasCLubeVisitante[4];
      classificacaoVisitante.golsPro = estatisticasCLubeVisitante[5];
      classificacaoVisitante.golsContra = estatisticasCLubeVisitante[6];
      classificacaoVisitante.saldoGols = estatisticasCLubeVisitante[7];
      classificacaoVisitante.cartoesVermelhos = estatisticasCLubeVisitante[8];
      classificacaoVisitante.cartoesAmarelos = estatisticasCLubeVisitante[9];
      classificacaoVisitante.aproveitamento = estatisticasCLubeVisitante[10];
    })
  });

  return classificacao;
}

export const jogoEmAndamento = (jogo: IJogo) => {
  const dataJogo = new Date(jogo.data);
  const dataAtual: Date = new Date();

  var diffMs = Math.abs(dataAtual.getTime() - dataJogo.getTime());

  var diffDays = Math.floor(diffMs / 86400000); // days
  var diffHrs = Math.floor((diffMs % 86400000) / 3600000); // hours

  if (!jogo.finalizado && diffDays === 0 && dataAtual.getHours() >= dataJogo.getHours() && diffHrs < 3)
    return true;
  else
    return false;

}

export const getClassificar = (classificacao: IClassificacao[]): IClassificacao[] => {
  classificacao.sort(classificarClubes);

  classificacao.map((clube, index) => {
    clube.posicao = index + 1;

    if (clube.posicao <= 4)
      clube.cssClasse = 'borda-azul';
    else if (clube.posicao === 5 || clube.posicao === 6)
      clube.cssClasse = 'borda-laranja';
    else if (clube.posicao > 6 && clube.posicao <= 12)
      clube.cssClasse = 'borda-verde';
    else if (clube.posicao >= 17)
      clube.cssClasse = 'borda-vermelho';
  });
  return classificacao;
}

const classificarClubes = (a: IClassificacao, b: IClassificacao): number => {

  if (a.pontos > b.pontos)
    return -1;
  else if (a.pontos < b.pontos)
    return 1;
  else {
    if (a.vitorias > b.vitorias)
      return -1;
    else if (a.vitorias < b.vitorias)
      return 1;
    else {
      if (a.saldoGols > b.saldoGols)
        return -1;
      else if (a.saldoGols < b.saldoGols)
        return 1;
      else {
        if (a.golsPro > b.golsPro)
          return -1;
        else if (a.golsPro < b.golsPro)
          return 1;
        else {
          if (a.cartoesVermelhos < b.cartoesVermelhos)
            return -1
          else if (a.cartoesVermelhos > b.cartoesVermelhos)
            return 1;
          else {
            if (a.cartoesAmarelos < b.cartoesAmarelos)
              return -1;
            else if (a.cartoesAmarelos > b.cartoesAmarelos)
              return 1
          }
        }
      }
    }
  }
  return -1;
}

const proximoJogo = (clube: IClube, numeroRodada: number, rodadas: IRodada[]): IClube => {
  const rodadasAbertas = rodadas.filter(rodada => rodada.numero !== numeroRodada &&
    !rodada.finalizada);

  if (rodadasAbertas) {

    let proximoAdversario!: IClube;
    let indice: number = 1;

    while (indice > -1) {
      const proxRodada = rodadasAbertas.filter(rodada => rodada.numero === numeroRodada + indice)[0];
      if (proxRodada) {
        const proxJogo = proxRodada.jogos.filter(jogo => {
          return (!jogo.finalizado && new Date().getTime() <= new Date(jogo.data).getTime() &&
            (jogo.clubeMandante.apelido === clube.apelido || jogo.clubeVisitante.apelido === clube.apelido)
          )
        })[0];

        if (proxJogo) {
          if (clube.apelido === proxJogo.clubeMandante.apelido)
            proximoAdversario = proxJogo.clubeVisitante;
          else
            proximoAdversario = proxJogo.clubeMandante;

          indice = -1;
        }
      }
      indice++;

      if (indice === 21 || proximoAdversario) {
        indice = -1;
      }
    }
    return proximoAdversario;
  }
  return clube;
}

const calcularEstatisticasClube = (clube: IClube, rodadas: IRodada[]): any[] => {

  let jogosMandantes: IJogo[] = [];
  let jogosVisitantes: IJogo[] = [];

  rodadas.map(rodada => {
    rodada.jogos.map(jogo => {
      if (jogo.finalizado || jogoEmAndamento(jogo)) {
        if (jogo.clubeMandante.apelido === clube.apelido) {
          jogosMandantes.push(jogo);
        }
        if (jogo.clubeVisitante.apelido === clube.apelido) {
          jogosVisitantes.push(jogo);
        }
      }
    })
  });

  let estatisticas: any[] = [];

  let jogos: number = 0;
  let pontos: number = 0;
  let vitorias: number = 0;
  let empates: number = 0;
  let derrotas: number = 0;
  let golsPro: number = 0;
  let golsContra: number = 0;
  let saldoGols: number = 0;
  let cartoesVermelhos: number = 0;
  let cartoesAmarelos: number = 0;
  let aproveitamento: number = 0;

  jogosMandantes.map(jogo => {
    jogos += 1;
    pontos += getPontos(jogo.golsClubeMandante, jogo.golsClubeVisitante);
    vitorias += getVitorias(jogo.golsClubeMandante, jogo.golsClubeVisitante);
    empates += getEmpates(jogo.golsClubeMandante, jogo.golsClubeVisitante);
    derrotas += getDerrotas(jogo.golsClubeMandante, jogo.golsClubeVisitante);
    golsPro += jogo.golsClubeMandante;
    golsContra += jogo.golsClubeVisitante;
    cartoesVermelhos += jogo.cartoesVermelhosClubeMandante;
    cartoesAmarelos += jogo.cartoesAmarelosClubeMandante;
  });

  jogosVisitantes.map(jogo => {
    jogos += 1;
    pontos += getPontos(jogo.golsClubeVisitante, jogo.golsClubeMandante);
    vitorias += getVitorias(jogo.golsClubeVisitante, jogo.golsClubeMandante);
    empates += getEmpates(jogo.golsClubeVisitante, jogo.golsClubeMandante);
    derrotas += getDerrotas(jogo.golsClubeVisitante, jogo.golsClubeMandante);
    golsPro += jogo.golsClubeVisitante;
    golsContra += jogo.golsClubeMandante;
    cartoesVermelhos += jogo.cartoesVermelhosClubeVisitante;
    cartoesAmarelos += jogo.cartoesAmarelosClubeVisitante;
  });

  saldoGols += golsPro - golsContra;
  aproveitamento = calcularAproveitamento(pontos, jogos);

  estatisticas.push(jogos);
  estatisticas.push(pontos);
  estatisticas.push(vitorias);
  estatisticas.push(empates);
  estatisticas.push(derrotas);
  estatisticas.push(golsPro);
  estatisticas.push(golsContra);
  estatisticas.push(saldoGols);
  estatisticas.push(cartoesVermelhos);
  estatisticas.push(cartoesAmarelos);
  estatisticas.push(aproveitamento);

  return estatisticas;
}

const getPontos = (golsClube1: number, golsclubeVisitante: number) => {
  if (golsClube1 === golsclubeVisitante)
    return 1;
  else if (golsClube1 > golsclubeVisitante)
    return 3;
  else
    return 0;
}

const getVitorias = (golsClube1: number, golsclubeVisitante: number): number => {
  if (golsClube1 > golsclubeVisitante)
    return 1;
  else
    return 0;
}

const getEmpates = (golsClube1: number, golsclubeVisitante: number): number => {
  if (golsClube1 === golsclubeVisitante)
    return 1;
  else
    return 0;
}

const getDerrotas = (golsClube1: number, golsclubeVisitante: number): number => {
  if (golsClube1 < golsclubeVisitante)
    return 1;
  else
    return 0;
}

const calcularAproveitamento = (pontos: number, jogos: number): number => {
  return Math.trunc(((pontos / (jogos * 3))) * 100);
}

