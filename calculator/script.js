let resultInput = null;
let currentExpression = "";

window.onload = function () {
  resultInput = document.getElementById("result");
};

function append(value) {
  currentExpression += value;
  resultInput.value = currentExpression;
}

function clearLast() {
  currentExpression = currentExpression.slice(0, -1);
  resultInput.value = currentExpression;
}

function clearAll() {
  currentExpression = "";
  resultInput.value = "";
}

function calculate() {
  try {
    // Replace X with * just in case
    currentExpression = currentExpression.replace(/X/g, '*');
    let result = eval(currentExpression);
    resultInput.value = result;
    currentExpression = result.toString();
  } catch (e) {
    resultInput.value = "Error";
    currentExpression = "";
  }
}
