export default interface Reserva {
  codItemReserva: string,
  situacao: string,
  nomeItemReserva: string,
  numExemplar: string,
  tipoItemReserva: string,
  localizacao: string,
  codLeitor: string,
  nomeLeitor: string,
  dataReserva: Date,
  prazoReserva: Date
};
