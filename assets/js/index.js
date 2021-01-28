'use strict';

/*
  При каждом сабмите формы - пушыть значение в массив.
  Очищать форму после каждого сабмита.
  Рендерить на странице то, что юыло введено в форму.
  Валидацыя значения в инпуте при сабмите формы.
*/


const array = [];
const form = document.getElementById('root-form');

const messageContainer = document.getElementById('root');
const btnDeleteLi = document.getElementById('delete-last-message');


form.addEventListener('submit', (e) => {
  e.preventDefault();
  const {
    target: { email },
  } = e; // target === form;


  validateEmailInput(email.value);

  array.push(email.value);

  createMessage(array[array.length - 1]);
  
  e.target.reset(); // очищаем значение формы после сабмита
  //email.value = ''; // очищаем значение формы после сабмита
});

btnDeleteLi.addEventListener('click', deleteLastLi);

function validateEmailInput(value) {
  if (![...value].includes('@') || value === '') {
    throw new Error('-(.H.)-');
  }
}

function createMessage(value) {
  const li = document.createElement('li');
  li.append(document.createTextNode(value));

  messageContainer.append(li);
}

function deleteLastLi(e){
  messageContainer.firstElementChild.remove();
  array.pop();
}