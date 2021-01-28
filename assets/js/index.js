'use strict';


const array = [];
const form = document.getElementById('root-form');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const {
    target: { email },
  } = e; // target === form;
  array.push(email.value);
  console.dir(email.value);

});
