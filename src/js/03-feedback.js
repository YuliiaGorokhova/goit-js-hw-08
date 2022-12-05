import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';

const formEl = document.querySelector('.feedback-form');
const emailEl = document.querySelector('input');
const messageEl = document.querySelector('textarea');

formEl.addEventListener('input', throttle(inputHandler, 500));
formEl.addEventListener('submit', submitHandler);

function inputHandler(evt) {
  const email = emailEl.value;
  const message = messageEl.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify({ email, message }));
}

const storageParsed = JSON.parse(localStorage.getItem(STORAGE_KEY)); //можно зробити функцією

if (storageParsed) {
  emailEl.value = storageParsed.email;
  messageEl.value = storageParsed.message;
}

console.log(localStorage);

function submitHandler(evt) {
  evt.preventDefault();
  const dataEl = {
    email: emailEl.value,
    message: messageEl.value,
  };
  console.log(dataEl);
  formEl.reset();
  localStorage.removeItem(STORAGE_KEY);
  emailEl.value = '';
  messageEl.value = '';
}
