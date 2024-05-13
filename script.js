document.getElementById("inputForm").addEventListener("submit", function (event) {
  event.preventDefault();
  const primeiroNumero = parseFloat(document.getElementById("primeiroNumero").value);
  const segundoNumero = parseFloat(document.getElementById("segundoNumero").value);
  const operacao = document.getElementById("operacao").value;
  if (isNaN(primeiroNumero) || isNaN(segundoNumero) || primeiroNumero < 0 || segundoNumero < 0) {
    alert("Por favor, insira números positivos.");
    return;
  }
  const resultado = calcular(primeiroNumero, segundoNumero, operacao);
  mostrarResultado(resultado);
  fecharModalEntrada();
});

function calcular(a, b, operacao) {
  switch (operacao) {
    case "+":
      return a + b;
    case "-":
      return a - b;
    case "*":
      return a * b;
    case "/":
      return b !== 0 ? a / b : "Não é possível  dividir por zero";
    default:
      return "Operação inválida";
  }
}

function abrirModalEntrada() {
  document.getElementById("entradaModal").style.display = "block";
}

function fecharModalEntrada() {
  document.getElementById("entradaModal").style.display = "none";
}

function mostrarResultado(resultado) {
  document.getElementById("resultadoTexto").textContent = `Resultado: ${resultado}`;
  document.getElementById("resultadoModal").style.display = "block";
}

window.onclick = function (event) {
  if (event.target.classList.contains("modal")) {
    event.target.style.display = "none";
  }
};

document.querySelectorAll(".close-button").forEach((button) => {
  button.onclick = function () {
    button.closest(".modal").style.display = "none";
  };
});
