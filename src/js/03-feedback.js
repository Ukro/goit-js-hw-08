import throttle from 'lodash.throttle';

const formEl = document.querySelector('form');
const STORAGE_KEY = 'feedback-form-state';
const alertEl = document.createElement('div');
alertEl.style.color = 'red';
alertEl.style.display = 'none';
alertEl.textContent = 'Дані не введено';
formEl.appendChild(alertEl);

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
}

function onSubmitForm(evt) {
  evt.preventDefault();
  const formData = new FormData(formEl);
  const objSubmit = {};
  formData.forEach((value, name) => (objSubmit[name] = value));

  // Проверка на незаполненные поля перед отправкой
  const isEmptyField = Object.values(objSubmit).some(value => value.trim() === '');
  if (isEmptyField) {
    alertEl.style.display = 'block';
  } else {
    alertEl.style.display = 'none';
    console.log(objSubmit);

    formEl.reset();
    localStorage.removeItem(STORAGE_KEY);
  }
}

function changeInput() {
  let inputObj = localStorage.getItem(STORAGE_KEY);
  if (inputObj) {
    inputObj = JSON.parse(inputObj);
    Object.entries(inputObj).forEach(([name, value]) => {
      formEl.elements[name].value = value;
    });
  }
}
