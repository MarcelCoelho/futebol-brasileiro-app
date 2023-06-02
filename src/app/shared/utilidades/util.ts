export const getDiaSemana = (dataJogo: Date): string => {
  const dias = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];
  return dias[new Date(dataJogo).getDay()];
}

export const getDiaSemanaCompleto = (dataJogo: Date): string => {
  const dias = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];
  return dias[new Date(dataJogo).getDay()];
}

export const getHorarioJogo = (data: Date): string => {
  let horas = new Date(data).getHours().toString();
  let minutos = new Date(data).getMinutes().toString();

  if (horas.length === 1)
    horas = "0" + horas;

  if (minutos.length === 1)
    minutos = "0" + minutos;

  return horas + ":" + minutos;
}