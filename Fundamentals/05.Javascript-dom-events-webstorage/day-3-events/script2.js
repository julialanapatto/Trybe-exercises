function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');

    for (let index = 0; index < weekDays.length; index += 1) {
        const days = weekDays[index];
        const dayListItem = document.createElement('li');
        dayListItem.innerHTML = days;

        weekDaysList.appendChild(dayListItem);
    };
};

createDaysOfTheWeek();

// Escreva seu código abaixo.
//1 - O array dezDaysList contém os dois últimos dias de novembro e os dias do mês de dezembro. Desenvolva uma função que crie dinamicamente cada dia do calendário e os adicione como filhos/filhas da tag <ul> com ID "days" . Note que os dias 29 e 30 de novembro estão no array pois representam respectivamente Domingo e Segunda-feira.
//Os dias devem estar contidos em uma tag <li> , e todos devem ter a classe day . Ex: <li class="day">3</li>
//Os dias 24, 25 e 31 são feriados e, além da classe day , devem conter também a classe holiday . Ex: <li class="day holiday">24</li>
//Os dias 4, 11, 18 e 25 são Sexta-feira. Eles devem conter a classe day e a classe friday . Ex: <li class="day friday">4</li>

let dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

function createDaysOfTheMonth() {
    let getDaysList = document.querySelector('#days');

    for (let index = 0; index < dezDaysList.length; index += 1) {
        let day = dezDaysList[index];
        let dayItem = document.createElement('li');

        if (day === 24 | day === 31) {
            dayItem.className = 'day holiday';
            dayItem.innerHTML = day;
            getDaysList.appendChild(dayItem);
        } else if (day === 4 | day === 11 | day === 18) {
            dayItem.className = 'day friday';
            dayItem.innerHTML = day;
            getDaysList.appendChild(dayItem);
        } else if (day === 25) {
            dayItem.className = 'day holiday friday';
            dayItem.innerHTML = day;
            getDaysList.appendChild(dayItem);
        } else {
            dayItem.innerHTML = day;
            dayItem.className = 'day';
            getDaysList.appendChild(dayItem);
        }
    };
};
createDaysOfTheMonth();

//2 - Implemente uma função que receba como parâmetro a string "Feriados" e crie dinamicamente um botão com o nome "Feriados". Adicione a este botão a ID "btn-holiday" .
//Adicione este botão como filho/filha da tag <div> com classe "buttons-container" .
function createHolidayButton(buttonName) {
    let buttonContainer = document.querySelector('.buttons-container');
    let newButton = document.createElement('button');
    let newButtonID = 'btn-holiday';

    newButton.innerText = buttonName;
    newButton.id = newButtonID;
    buttonContainer.appendChild(newButton);
};

createHolidayButton('Feriados');
//3 - Implemente uma função que adicione ao botão "Feriados" um evento de "click" que muda a cor de fundo dos dias que possuem a classe "holiday" .
//É interessante que este botão possua também a lógica inversa. Ao ser clicado novamente ele retorna à configuração inicial com a cor "rgb(238,238,238)" .

function displayHolidays() {
    let getHolidayButton = document.querySelector('#btn-holiday');
    let getHolidays = document.querySelectorAll('.holiday')
    let backgroundColor = 'rgb(238,238,238)';
    let setNewColor = 'pink';

    getHolidayButton.addEventListener('click', function () {
        for (let index = 0; index < getHolidays.length; index += 1) {
            if (getHolidays[index].style.backgroundColor === setNewColor) {
                getHolidays[index].style.backgroundColor = backgroundColor;
            } else {
                getHolidays[index].style.backgroundColor = setNewColor;
            }
        }
    })
};

displayHolidays();
//4 - Implemente uma função que receba como parâmetro a string "Sexta-feira" e crie dinamicamente um botão com o nome "Sexta-feira".
//Adicione a este botão o ID "btn-friday" .
//Adicione este botão como filho/filha da tag <div> com classe "buttons-container" .
function createFriday(buttonName) {
    let buttonContainer = document.querySelector('.buttons-container');
    let newButton = document.createElement('button');
    let newButtonID = 'btn-friday';

    newButton.innerText = buttonName;
    newButton.id = newButtonID;
    buttonContainer.appendChild(newButton);
}
createFriday('Sexta-Feira')


//5- Implemente uma função que adicione ao botão "Sexta-feira" um evento de "click" que modifica o texto exibido nos dias que são Sexta-feira.
//É interessante que este botão possua também a lógica inversa. Ao ser clicado novamente ele retorna à configuração inicial exibindo os dias.

function displayFriday(fridayArray) {
    let getFriday = document.querySelector('#btn-friday');
    let friday = document.getElementsByClassName('friday')
    let text = 'thank god';

    getFriday.addEventListener('click', function () {
        for (let index = 0; index < friday.length; index += 1) {
            if (friday[index].innerText !== text) {
                friday[index].innerText = text;
            } else {
                friday[index].innerText = fridayArray[index];
            }
        }
    })
};
let dezFridays = [4, 11, 18, 25];
displayFriday(dezFridays);

//6 - Implemente duas funções que criem um efeito de "zoom". Ao passar o ponteiro do mouse em um dia do mês no calendário, o texto desse dia deve aumentar e, quando o ponteiro do mouse sair do dia, o texto deve retornar ao tamanho original.

function zoomIn() {
    let day = document.querySelector('#days');

    day.addEventListener('mouseover', function (event) {
        event.target.style.fontSize = '70px';
        event.target.style.fontWeight = '600';


    })
}
function zoomOut() {
    let day = document.querySelector('#days');
    day.addEventListener('mouseout', function (event) {
        event.target.style.fontSize = '20px';
        event.target.style.fontWeight = '200';
    })
};
zoomIn();
zoomOut();


//7 - Implemente uma função que adiciona uma tarefa personalizada ao calendário. A função deve receber como parâmetro a string com o nome da tarefa (ex: "cozinhar") e criar dinamicamente um elemento com a tag <span> contendo a tarefa.
//O elemento criado deverá ser adicionado como filho/filha da tag <div> que possui a classe "my-tasks" .


function tarefa(string) {

    let pegaContainer = document.querySelector('.my-tasks');
    let taskName = document.createElement('span');

    taskName.innerText = string;
    pegaContainer.appendChild(taskName);
};
tarefa('Tarefa: passar raiva')

//8 - Implemente uma função que adiciona uma legenda com cor para a tarefa criada no exercício anterior. Esta função deverá receber como parâmetro uma string ("cor") e criar dinamicamente um elemento de tag <div> com a classe task .
//O parâmetro cor deverá ser utilizado como cor de fundo da <div> criada.
//O elemento criado deverá ser adicionado como filho/filha da tag <div> que possui a classe "my-tasks" .

function adicionaLegenda(cor) {
    let taskContainer = document.querySelector('.my-tasks');
    let novaTask = document.createElement('div');
    novaTask.className = 'task'
    novaTask.style.backgroundColor = cor;
    taskContainer.appendChild(novaTask);
};

adicionaLegenda('green');



// 9 - Implemente uma função que adiciona um evento que ao clicar no elemento com a tag <div> referente a cor da sua tarefa, atribua a este elemento a classe task selected , ou seja, quando sua tarefa possuir a classe task selected ela estará selecionada.
//Ao clicar novamente no elemento a sua classe deverá voltar a ser somente task , ou seja, esta tarefa está deixando de ser uma tarefa selecionada.

function addEvent() {
    let tarefa = document.querySelector('.task')

    tarefa.addEventListener('click', function (event) {
        if (event.target.className === 'task') {
            event.target.className = 'task selected';
        } else {
            event.target.className = 'task;'
        }
    })
};
addEvent();

//10 - Implemente uma função que adiciona um evento que ao clicar em um dia do mês no calendário, atribua a este dia a cor da legenda da sua tarefa selecionada.
//Ao clicar novamente no dia com a cor da legenda, a sua cor deverá voltar à configuração inicial rgb(119,119,119) .
let setCor = 'green'
days.addEventListener ('click', colorDay)
function colorDay(event) {
    if (event.target.style.color === setCor) {
        event.target.style.color = 'rgb(119,119,199)'
    } else {
        event.target.style.color = setCor
    }
}



//Vamos adicionar compromissos ao seu calendário? Implemente uma função que, ao digitar um compromisso na caixa de texto "COMPROMISSOS", adiciona o item à lista "MEUS COMPROMISSOS" ao clicar no botão "ADICIONAR".
//Se nenhum caractere for inserido no campo input , a função deve retornar um alert com uma mensagem de erro ao clicar em "ADICIONAR".
//Ao pressionar a tecla "enter" o evento também deverá ser disparado.


function criaCompromisso () {
let getInputField = document.querySelector('#task-input')
let input = document.querySelector('#task-input')
let taskList = document.querySelector('.task-list')
days.addEventListener('click', function(event) {


 })
}
criaCompromisso();