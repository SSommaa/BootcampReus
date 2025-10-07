var array = [];
var arrayDisplay = document.getElementById("arrayDisplay");
var pushBtn = document.getElementById("pushBtn");
var unshiftBtn = document.getElementById("unshiftBtn");
var insertBtn = document.getElementById("insertBtn");
var insertIndex = document.getElementById("insertIndex");
var popBtn = document.getElementById("popBtn");
var shiftBtn = document.getElementById("shiftBtn");
var removeBtn = document.getElementById("removeBtn");
var removeIndex = document.getElementById("removeIndex");
function updateDisplay() {
    arrayDisplay.textContent = JSON.stringify(array, null, 2);
}
function promptElement() {
    var value = prompt("Introduce el valor del elemento:");
    return value !== null && value.trim() !== "" ? value : null;
}
pushBtn.addEventListener("click", function () {
    var value = promptElement();
    if (value !== null) {
        array.push(value);
        updateDisplay();
    }
});
unshiftBtn.addEventListener("click", function () {
    var value = promptElement();
    if (value !== null) {
        array.unshift(value);
        updateDisplay();
    }
});
insertBtn.addEventListener("click", function () {
    var value = promptElement();
    if (value !== null) {
        var idx = parseInt(insertIndex.value, 10);
        if (!isNaN(idx) && idx >= 0 && idx <= array.length) {
            array.splice(idx, 0, value);
            updateDisplay();
        }
        else {
            alert("Índice no válido");
        }
    }
});
popBtn.addEventListener("click", function () {
    if (array.length > 0) {
        array.pop();
        updateDisplay();
    }
});
shiftBtn.addEventListener("click", function () {
    if (array.length > 0) {
        array.shift();
        updateDisplay();
    }
});
removeBtn.addEventListener("click", function () {
    var idx = parseInt(removeIndex.value, 10);
    if (!isNaN(idx) && idx >= 0 && idx < array.length) {
        array.splice(idx, 1);
        updateDisplay();
    }
    else {
        alert("Índice no válido");
    }
});
updateDisplay();
