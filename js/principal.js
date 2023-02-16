var titulo = document.querySelector(".titulo");

titulo.textContent = "Matheus"; 

var paciente = document.querySelector("#primeiro-paciente");
var tdPeso = paciente.querySelector(".info-peso");

var peso = tdPeso.textContent;

var tdAltura = paciente.querySelector(".info-altura");
var altura = tdAltura.textContent;

var infoImc = paciente.querySelector(".info-imc");

var imc = peso / (altura * altura);

infoImc.textContent = imc;


console.log(imc)