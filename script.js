let tela = document.getElementById("tela");
let operacao = "";

function get(numero)
{
    if (tela.innerText === "0" || tela.innerText === "Erro") {
        tela.innerText = numero;
    } else {
        tela.innerText += numero;
    }
    operacao += numero;
}

function getOperador(operador){
    tela.innerText += " " + operador + " ";
    operacao += operador;
}

function calcular(){
    try {
        let resultado = eval(operacao.replace("x", "*").replace("÷", "/").replace("^", "**"));
        tela.innerText = resultado;
        operacao = resultado.toString();
    } catch (e) {
        tela.innerText = "Erro";
        operacao = "";
    }
}

function limpar(){
    tela.innerText = "0";
    operacao = ''
}