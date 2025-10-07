function eleccionUsuario(eleccion) {
    document.getElementById("user-choice").textContent = eleccion;
}
function eleccionComputadora() {
    var opciones = ["Piedra", "Papel", "Tijeras"];
    var eleccion = opciones[Math.floor(Math.random() * opciones.length)];
    document.getElementById("computer-choice").textContent = eleccion;
}
function determinarGanador() {
    var userChoice = document.getElementById("user-choice").textContent;
    var computerChoice = document.getElementById("computer-choice").textContent;
    var resultado = "";
    if (userChoice === computerChoice) {
        resultado = "Empate!";
    }
    else if ((userChoice === "Piedra" && computerChoice === "Tijeras") ||
        (userChoice === "Papel" && computerChoice === "Piedra") ||
        (userChoice === "Tijeras" && computerChoice === "Papel")) {
        resultado = "¡Ganaste!";
    }
    else {
        resultado = "Perdiste!";
    }
    document.getElementById("winner").textContent = resultado;
}
document.getElementById("rock").addEventListener("click", function () {
    eleccionUsuario("Piedra");
    eleccionComputadora();
    determinarGanador();
});
document.getElementById("paper").addEventListener("click", function () {
    eleccionUsuario("Papel");
    eleccionComputadora();
    determinarGanador();
});
document.getElementById("scissors").addEventListener("click", function () {
    eleccionUsuario("Tijeras");
    eleccionComputadora();
    determinarGanador();
});
