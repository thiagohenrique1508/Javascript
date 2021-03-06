// import {criaData} from './criaData.js';

export const criaData = (data) => {
    const tarefas = JSON.parse(localStorage.getItem('tarefas')) || [];
    const dataMoment = moment(data, 'DD/MM/YYYY');
    const datatopo = documento.createElement('li');
    const conteudo = `<P class="content-data">${dataMoment.format('DD/MM/YYYY')}</p>`;

    datatopo.innerHTML = conteudo;

    tarefas.forEach((tarefa => {
        const dia = moment(tarefa.dataFormatada, 'DD/MM/YYYY');
        const diff = dataMoment.diff(dia);
        if (diff == 0){
            datatopo.appendChild(Tarefa(tarefa));
        }
    }));

    return datatopo;
}