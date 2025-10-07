/*const array: string[] = [];

const arrayDisplay = document.getElementById("arrayDisplay") as HTMLPreElement;
const pushBtn = document.getElementById("pushBtn") as HTMLButtonElement;
const unshiftBtn = document.getElementById("unshiftBtn") as HTMLButtonElement;
const insertBtn = document.getElementById("insertBtn") as HTMLButtonElement;
const insertIndex = document.getElementById("insertIndex") as HTMLInputElement;

const popBtn = document.getElementById("popBtn") as HTMLButtonElement;
const shiftBtn = document.getElementById("shiftBtn") as HTMLButtonElement;
const removeBtn = document.getElementById("removeBtn") as HTMLButtonElement;
const removeIndex = document.getElementById("removeIndex") as HTMLInputElement;

function updateDisplay() {
  arrayDisplay.textContent = JSON.stringify(array, null, 2);
}

function promptElement(): string | null {
  const value = prompt("Introduce el valor del elemento:");
  return value !== null && value.trim() !== "" ? value : null;
}

pushBtn.addEventListener("click", () => {
  const value = promptElement();
  if (value !== null) {
    array.push(value);
    updateDisplay();
  }
});

unshiftBtn.addEventListener("click", () => {
  const value = promptElement();
  if (value !== null) {
    array.unshift(value);
    updateDisplay();
  }
});

insertBtn.addEventListener("click", () => {
  const value = promptElement();
  if (value !== null) {
    const idx = parseInt(insertIndex.value, 10);
    if (!isNaN(idx) && idx >= 0 && idx <= array.length) {
      array.splice(idx, 0, value);
      updateDisplay();
    } else {
      alert("Índice no válido");
    }
  }
});

popBtn.addEventListener("click", () => {
  if (array.length > 0) {
    array.pop();
    updateDisplay();
  }
});

shiftBtn.addEventListener("click", () => {
  if (array.length > 0) {
    array.shift();
    updateDisplay();
  }
});

removeBtn.addEventListener("click", () => {
  const idx = parseInt(removeIndex.value, 10);
  if (!isNaN(idx) && idx >= 0 && idx < array.length) {
    array.splice(idx, 1);
    updateDisplay();
  } else {
    alert("Índice no válido");
  }
});

updateDisplay();
*/
// El codigo anterior está comentado porque esta compilado en JavaScript y no es necesario para el funcionamiento de la web
// El codigo anterior es un ejemplo de como manipular arrays en TypeScript y mostrar los resultados en una pagina web
