document.getElementById("inputForm").addEventListener("submit", function (e
) {
  e.preventDefault();

  const firstNumber = parseFloat(document.getElementById("firstNumber").value);
  const secondNumber = parseFloat(document.getElementById("secondNumber").value);
  const operator = document.getElementById("operator").value;
  
  if (isNaN(firstNumber) || isNaN(secondNumber) || firstNumber < 0 || secondNumber < 0) {
    alert("Insira apenas números positivos!");
    return;
  }
  
  const result = calculate(firstNumber, secondNumber, operator);
  showResult(result);
});

function calculate(a, b, oper) {
  switch (oper) {
    case "+":
      return a + b;
    case "-":
      return a - b;
    case "*":
      return a * b;
    case "/":
      return b !== 0 ? a / b : "Não é possível dividir por zero";
    default:
      return "Operação inválida";
  }
}


function showResult(result) {
  const resultElement = document.getElementById("text-result");
  resultElement.textContent = `Resultado: ${result}`;

  const modalElement = document.getElementById("modal-result");
  modalElement.style.display = "block";

  modalElement.onclick = function (e) {
    if (e.target.classList.contains("modal")) {
      modalElement.style.display = "none";
    }
  };

  document.querySelector(".close-button").onclick = function () {
    modalElement.style.display = "none";
  };
}