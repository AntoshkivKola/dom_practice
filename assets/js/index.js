'use strict';


const array = [];
const form = document.getElementById('root-form');

const messageContainer = document.getElementById('root');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const {
    target: { email },
  } = e; // target === form;
  array.push(email.value);
  console.dir(email.value);
  
  
  const li = document.createElement('li');
  li.append(document.createTextNode(email.value));

  messageContainer.append(li);

  email.value = ''; // очищаем значение формы после сабмита
});
