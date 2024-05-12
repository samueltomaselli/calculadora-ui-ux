const result = document.querySelector(".result");

function handleError() {
  const currentResult = result.innerHTML.trim();
  if (currentResult === "Erro") {
    result.innerHTML = "";
  }
}

function add(valor) {
  const operators = ["/", "+", "-", "*"];
  handleError();
  const currentResult = result.innerHTML.trim();

  if (
    (operators.includes(valor) && currentResult === "" && valor !== "-") ||
    (operators.includes(valor) && operators.includes(currentResult.slice(-1)))
  ) {
    return;
  }

  result.innerHTML += valor;
}

function clean() {
  result.innerHTML = "";
}

function backspace() {
  handleError();

  if (result.innerHTML) {
    result.innerHTML = result.innerHTML.trim().slice(0, -1);
  }
}

function confirm() {
  try {
    result.innerHTML = eval(result.innerHTML) || "";
  } catch (e) {
    result.innerHTML = "Erro";
  }
}
