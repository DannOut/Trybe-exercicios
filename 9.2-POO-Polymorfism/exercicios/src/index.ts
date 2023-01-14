import Clube from './Clube';
import QuadraFutebol from './QuadraFutebol';
import QuadraTenis from './QuadraTenis';

const trybeClubeFutebol = new Clube();
const quadraFutebol = new QuadraFutebol();

trybeClubeFutebol.adicionarQuadra(quadraFutebol);

const reservaQuadra = new Date('2022-12-28');

const reservaFeita = trybeClubeFutebol
  .buscarQuadra<QuadraFutebol>(0)
  .reservar(reservaQuadra);
console.log(reservaFeita);

const trybeClubeTenis = new Clube();
const quadraTenis = new QuadraTenis();

trybeClubeTenis.adicionarQuadra(quadraTenis);
const reservaTenis = trybeClubeTenis.buscarQuadra(0).reservar(reservaQuadra);
console.log(reservaTenis);
