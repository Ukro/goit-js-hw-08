import throttle from 'lodash.throttle';

const formEl = document.querySelector('form');
const STORAGE_KEY = 'feedback-form-state';
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
  let hasEmptyFields = false; //  флаг для перевірки наявності пустих полів

  formData.forEach((value, name) => {
    objSubmit[name] = value;
    if (!value.trim()) { // Перевіряємо, чи поле не є пустим
      hasEmptyFields = true;
    }
  });

  if (hasEmptyFields) { // Якщо є пусті поля, показати Alert
    alert("Дані не введено");
    return;
  }

  console.log(objSubmit);
  formEl.reset();
  localStorage.removeItem(STORAGE_KEY);
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
