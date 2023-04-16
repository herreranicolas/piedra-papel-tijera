let movimientoUsuario = "";

let movimientoPC = "";

const obtenerMovimientoUsuario = (movimiento) => {
  movimientoUsuario = movimiento;
  obtenerMovimientoPC();
  mostrarGanador();
};

const obtenerMovimientoPC = () => {
  let numRandom = Math.floor(Math.random() * 3 + 1);

  switch (numRandom) {
    case 1:
      movimientoPC = "piedra";
      break;
    case 2:
      movimientoPC = "papel";
      break;
    case 3:
      movimientoPC = "tijera";
      break;
  }
};

const mostrarGanador = () => {
  if (
    (movimientoUsuario === "piedra" && movimientoPC === "tijera") ||
    (movimientoUsuario === "papel" && movimientoPC === "piedra") ||
    (movimientoUsuario === "tijera" && movimientoPC === "papel")
  ) {
    let scoreJugador = parseInt(
      document.getElementById("contenedorScoreJugador").innerHTML
    );
    scoreJugador++;
    contenedorScoreJugador.innerHTML = scoreJugador;
    escribirTexto(
      `Elegiste ${movimientoUsuario} y la PC eligió ${movimientoPC}. ¡Ganaste!`,
      "contenedorInfoMovimientos"
    );
  }

  if (
    (movimientoUsuario === "tijera" && movimientoPC === "piedra") ||
    (movimientoUsuario === "piedra" && movimientoPC === "papel") ||
    (movimientoUsuario === "papel" && movimientoPC === "tijera")
  ) {
    let scorePC = parseInt(
      document.getElementById("contenedorScorePC").innerHTML
    );
    scorePC++;
    contenedorScorePC.innerHTML = scorePC;
    escribirTexto(
      `Elegiste ${movimientoUsuario} y la PC eligió ${movimientoPC}. ¡Perdiste!`,
      "contenedorInfoMovimientos"
    );
  }

  if (movimientoUsuario === movimientoPC) {
    escribirTexto(
      `Elegiste ${movimientoUsuario} y la PC eligió ${movimientoPC}. ¡Es un empate!`,
      "contenedorInfoMovimientos"
    );
  }
};

const reiniciarJuego = () => {
  contenedorScoreJugador.innerHTML = 0;
  contenedorScorePC.innerHTML = 0;
  contenedorInfoMovimientos.innerHTML = "";
};

const escribirTexto = (texto, idElemento) => {
  document.getElementById(idElemento).innerHTML = texto;
};