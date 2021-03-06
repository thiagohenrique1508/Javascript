import { ordenaDatas, removeDatasRepetidas } from "../service/data.js";
import { criaData } from "./criaData.js";

export const carregaTarefa = () => {
    const lista = document.querySelector('[data-list]');

    const tarefasCadastradas = JSON.parse(localStorage.getItem('tarefas')) || [];

    lista.innerHTML = " ";

    const dataUnicas = removeDatasRepetidas(tarefasCadastradas);

    ordenaDatas(datasUnicas);

    dataUnicas.forEach((dia) => {
        
        const diff = data.diff(dia);

        if (diff == 0){
            lista.appendChild(criaData(dia));
        }
    })

}