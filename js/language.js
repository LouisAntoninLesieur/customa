const thEl1 = document.getElementById('th-1');
const thEl2 = document.getElementById('th-2');
const thEl3 = document.getElementById('th-3');
const input1 = document.getElementById('input-as');
const input2 = document.getElementById('input-i-want-to');
const input3 = document.getElementById('input-so-that');
const langEl = document.querySelector('.lang');
const addBtn = document.getElementById('add');

thEl1.textContent = 'AS';
thEl2.textContent = 'I WANT TO';
thEl3.textContent = 'IN ORDER TO';
input1.placeholder = 'AS';
input2.placeholder = 'I WANT TO';
input3.placeholder = 'IN ORDER TO';
addBtn.textContent = 'ADD';

langEl.addEventListener('click', handleChangeLanguage);

function handleChangeLanguage() {
  thEl1.textContent = 'AS';
  thEl2.textContent = 'I WANT TO';
  thEl3.textContent = 'IN ORDER TO';
  input1.placeholder = 'AS';
  input2.placeholder = 'I WANT TO';
  input3.placeholder = 'IN ORDER TO';
  addBtn.textContent = 'ADD';

  if (langEl.textContent === 'ENG') {
    langEl.textContent = 'FRA';
    thEl1.textContent = 'EN TANT QUE';
    thEl2.textContent = 'JE VEUX';
    thEl3.textContent = 'AFIN DE';
    input1.placeholder = 'EN TANT QUE';
    input2.placeholder = 'JE VEUX';
    input3.placeholder = 'AFIN DE';
    addBtn.textContent = 'AJOUTER';
  } else {
    langEl.textContent = 'ENG';
  }
}