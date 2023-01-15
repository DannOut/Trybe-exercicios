import Clube from './Clube';
import QuadraBasquete from './QuadraBasquete';
import QuadraFutebol from './QuadraFutebol';
import QuadraTenis from './QuadraTenis';

const trybeClubeFutebol = new Clube();
const trybeClubeTenis = new Clube();
const trybeCludeBasquete = new Clube();

const quadraFutebol = new QuadraFutebol();
const quadraTenis = new QuadraTenis();
const quadraBasquete = new QuadraBasquete();

const reservaQuadra = new Date('2022-12-28');

trybeClubeFutebol.adicionarQuadra(quadraFutebol);
const reservaFutebol = trybeClubeFutebol
  .buscarQuadra<QuadraFutebol>(0)
  .reservar(reservaQuadra);

console.log(reservaFutebol);

trybeClubeTenis.adicionarQuadra(quadraTenis);
const reservaTenis = trybeClubeTenis.buscarQuadra(0).reservar(reservaQuadra);
console.log(reservaTenis);

trybeCludeBasquete.adicionarQuadra(quadraBasquete);
const reservaBasquete = trybeCludeBasquete
  .buscarQuadra(0)
  .reservar(reservaQuadra);
console.log(reservaBasquete);
