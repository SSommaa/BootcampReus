function eleccionUsuario(eleccion: string): void {
  document.getElementById("user-choice")!.textContent = eleccion;
}
function eleccionComputadora(): void {
  const opciones = ["Piedra", "Papel", "Tijeras"];
  const eleccion = opciones[Math.floor(Math.random() * opciones.length)];
  document.getElementById("computer-choice")!.textContent = eleccion;
}
function determinarGanador(): void {
  const userChoice = document.getElementById("user-choice")!.textContent;
  const computerChoice =
    document.getElementById("computer-choice")!.textContent;
  let resultado = "";
  if (userChoice === computerChoice) {
    resultado = "Empate!";
  } else if (
    (userChoice === "Piedra" && computerChoice === "Tijeras") ||
    (userChoice === "Papel" && computerChoice === "Piedra") ||
    (userChoice === "Tijeras" && computerChoice === "Papel")
  ) {
    resultado = "¡Ganaste!";
  } else {
    resultado = "Perdiste!";
  }
  document.getElementById("winner")!.textContent = resultado;
}
document.getElementById("rock")!.addEventListener("click", () => {
  eleccionUsuario("Piedra");
  eleccionComputadora();
  determinarGanador();
});
document.getElementById("paper")!.addEventListener("click", () => {
  eleccionUsuario("Papel");
  eleccionComputadora();
  determinarGanador();
});
document.getElementById("scissors")!.addEventListener("click", () => {
  eleccionUsuario("Tijeras");
  eleccionComputadora();
  determinarGanador();
});
