// import {criaData} from './criaData.js';

export const criaData = (data) => {
    const tarefas = JSON.parse(localStorage.getItem('tarefas')) || [];
    const datatopo = documento.createElement('li');
    const conteudo = `<P class="content-data">${data.format('DD/MM/YYYY')}</p>`;

    datatopo.innerHTML = conteudo;

    tarefas.forEach((tarefa => {
        const dia = moment(tarefa.dataFormatada, 'DD/MM/YYYY');
        const diff = data.diff(dia);
        if (diff == 0){
            datatopo.appendChild(Tarefa(tarefa));
        }
    }));

    return datatopo;
}