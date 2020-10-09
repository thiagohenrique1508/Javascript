let titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

let paciente = document.querySelector("#primeiro-paciente"); // tr
let tdPeso = paciente.querySelector(".info-peso"); // td
let peso = tdPeso.textContent;

let tdAltura = paciente.querySelector(".info-altura"); // td
let altura = tdAltura.textContent;

let imc = peso / (altura * altura); // 100 / (2.0 * 2.0) =>>> 25
