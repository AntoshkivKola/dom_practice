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


form.addEventListener('submit', (e) => {
  e.preventDefault();
  const {
    target: { email },
  } = e; // target === form;


  validateEmailInput(email.value);

  array.push(email.value);

  createMessage(array[array.length - 1]);
  
  e.target.reset(); // очищаем значение формы после сабмита
});


function validateEmailInput(value) {
  if (![...value].includes('@') || value === '') {
    throw new Error('-(.H.)-');
  }
}

function createMessage(value) {
  const li = document.createElement('li');
  li.append(document.createTextNode(value));
  li.addEventListener('dblclick', removeSelf); // возможность удальть елемент
  messageContainer.append(li);
}

function removeSelf({target}){
  array.splice(findLiIndex(target), 1);
  target.remove();
}

function findLiIndex(li){
 return [...li.parentElement.children].findIndex((elem)=> elem.textContent === li.textContent);
}
