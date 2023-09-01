import throttle from 'lodash.throttle';

const formEl = document.querySelector('form');
const STORAGE_KEY = 'feedback-form-state';
const submitButton = document.querySelector('button[type="submit"]'); // Отримуємо кнопку submit

changeInput();
formEl.addEventListener('submit', onSubmitForm);
formEl.addEventListener('input', throttle(onChangeLocalStorage, 500));

function onChangeLocalStorage(evt) {
  let inputObj = localStorage.getItem(STORAGE_KEY);
  if (inputObj) {
    inputObj = JSON.parse(inputObj);
  } else {
    inputObj = {};
  }

  inputObj[evt.target.name] = evt.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(inputObj));

  // Перевірка заповненості полів і активація / деактивація кнопки
  checkFormCompletion();
}

function onSubmitForm(evt) {
  evt.preventDefault();
  const formData = new FormData(formEl);
  const objSubmit = {};
  formData.forEach((value, name) => (objSubmit[name] = value));
  console.log(objSubmit);

  formEl.reset();
  localStorage.removeItem(STORAGE_KEY);
  submitButton.disabled = true; // Після відправки форми деактивуємо кнопку
}

function changeInput() {
  let inputObj = localStorage.getItem(STORAGE_KEY);
  if (inputObj) {
    inputObj = JSON.parse(inputObj);
    Object.entries(inputObj).forEach(([name, value]) => {
      formEl.elements[name].value = value;
    });
  }

  // Перевірка заповненості полів і активація / деактивація кнопки
  checkFormCompletion();
}

function checkFormCompletion() {
  const formFields = formEl.elements;
  let isFormComplete = true;

  for (let i = 0; i < formFields.length; i++) {
    const field = formFields[i];
    if (field.type !== 'submit' && field.value.trim() === '') {
      isFormComplete = false;
      break;
    }
  }

  submitButton.disabled = !isFormComplete;
}
