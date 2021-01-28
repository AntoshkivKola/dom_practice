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

  if(![...email.value].includes('@') || email.value === '' ){
    throw new Error('-(.H.)-');
  }

  array.push(email.value);
  console.dir(email.value);
  
  const li = document.createElement('li');
  li.append(document.createTextNode(email.value));

  messageContainer.append(li);

  email.value = ''; // очищаем значение формы после сабмита
});
