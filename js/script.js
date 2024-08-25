/* KEYWORDS BEHAVIOUR */
//* the logic for keywords layout's behaviour
//? initialize an index for keywords
let keywordIndex = 0;

//? get elements from DOM
const colorInputEls = document.querySelectorAll('.color-input');
const colorPickerInputEls = document.querySelectorAll('.color-picker-input');
const addKeywordBtnEl = document.querySelector('.keywordBtn');

//? initialize an array for recordingkeywords
let newKeywords = [];

//? add a new keyword input
addKeywordBtnEl.addEventListener('click', generateNewKeywordInput);

//? generate new keyword
function generateNewKeywordInput() {
  const newKeyword = document.createElement('div');
  newKeyword.classList.add('input-container');
  newKeyword.innerHTML = `
      <input class="color-input" type="text" id="input-${keywordIndex}">
      <input class="color-picker-input" type="color" name="color-picker" id="color-picker-${keywordIndex}">
      <button class="add-button">Add me to keywords</button>`;
  
  const asideContent = document.querySelector('.aside-content');
  asideContent.insertBefore(newKeyword, addKeywordBtnEl);
  
  const colorPicker = newKeyword.querySelector('.color-picker-input');
  const colorInput = newKeyword.querySelector('.color-input');
  const addButton = newKeyword.querySelector('.add-button');
  
  colorPicker.addEventListener('input', () => {
    colorInput.style.backgroundColor = colorPicker.value;
  });
  
  //? add the generated keyword to newKeywords array
  addButton.addEventListener('click', () => {
    const newKeywordValue = colorInput.value;
    const newKeywordColor = colorPicker.value;
    newKeywords.push({ text: newKeywordValue, color: newKeywordColor });
    console.log(newKeywords);
    addButton.remove();
    
    //? create delete button
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.classList.add('delete-button');
    
    //? add delete button
    newKeyword.appendChild(deleteButton);
    
    //? handle delete button click
    deleteButton.addEventListener('click', deleteKeyword);

    //? delete keyword from newKeywords array
    function deleteKeyword() {
      const index = newKeywords.findIndex((keyword) => keyword.text === newKeywordValue);
      if (index !== -1) {
        newKeywords.splice(index, 1);
      }
      newKeyword.remove();
    }
  });
  
  keywordIndex++;
};

//? apply color to input in keywords layout
colorPickerInputEls.forEach((colorPicker, index) => {
  colorPicker.addEventListener('input', () => {
    colorInputEls[index].style.backgroundColor = colorPicker.value;
  });
});


/* TABLE BEHAVIOUR */
//* the logic for table making / editing behaviour
//? get elements from DOM
const asEl = document.getElementById('input-as');
const iWantToEl = document.getElementById('input-i-want-to');
const soThatEl = document.getElementById('input-so-that');
const btnEl = document.getElementById('add');

//? add event listener
btnEl.addEventListener('click', handleNewRow);

//? here is the magic
function handleNewRow() {
  let asValue = asEl.value;
  let iWantToValue = iWantToEl.value;
  let soThatValue = soThatEl.value;

  if (asValue === '' || iWantToValue === '' || soThatValue === '') {
    alert('Please enter all the fields');
    return;
  }

  if (asEl && iWantToEl && soThatEl) {
    asEl.value = '';
    iWantToEl.value = '';
    soThatEl.value = '';

    //? get table body
    const tbodyEl = document.getElementById('tbody');
    //? create new table rows
    const trEl = document.createElement('tr');

    //? create table cells
    const tdEl = document.createElement('td');
    const tdEl2 = document.createElement('td');
    const tdEl3 = document.createElement('td');

    //? add class
    tbodyEl.classList.add('tbody');
    tdEl.classList.add('td');
    tdEl2.classList.add('td');
    tdEl3.classList.add('td');

    //? add content to table rows
    tdEl.textContent = asValue;
    tdEl2.textContent = iWantToValue;
    tdEl3.textContent = soThatValue;

    //? make table rows editable
    tdEl.contentEditable = true;
    tdEl2.contentEditable = true;
    tdEl3.contentEditable = true;

    //? append table rows
    trEl.appendChild(tdEl);
    trEl.appendChild(tdEl2);
    trEl.appendChild(tdEl3);
    tbodyEl.appendChild(trEl);

    
    //? create a delete button
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'X';
    deleteBtn.classList.add('deleteBtn');
    trEl.appendChild(deleteBtn);
    
    //? add event listener
    deleteBtn.addEventListener('click', () => {
      tbodyEl.removeChild(trEl);
    });

    //* add special behaviours
    //? display associtated color to keyword if exists at creating row
    let writtenContent = tdEl.textContent.trim().toUpperCase();

    if (writtenContent === 'USER' || writtenContent === 'UTILISATEUR') {
      tdEl.classList.add('user');
    } else if (writtenContent === 'ADMIN' || writtenContent === 'ADMINISTRATEUR') {
      tdEl.classList.add('admin');
    } else if (writtenContent === 'VISITOR' || writtenContent === "VISITEUR") {
      tdEl.classList.add('visitor')
    } else {
      const keyword = newKeywords.find(keyword => keyword.text.toUpperCase() === writtenContent);
      if (keyword) {
        tdEl.style.backgroundColor = keyword.color;
      } else {
        tdEl.classList.remove('user', 'admin', 'visitor');
        tdEl.style.backgroundColor = '';
      }
    }
    
    //? manage color display once the row exists, remove color if keyword doesn't exist OR change color if keyword exists
    tdEl.addEventListener('input', () => {
      const writtenContent = tdEl.textContent.trim().toUpperCase();
    
      if (writtenContent === 'USER' || writtenContent === 'UTILISATEUR') {
        tdEl.classList.add('user');
      } else if (writtenContent === 'ADMIN' || writtenContent === 'ADMINISTRATEUR') {
        tdEl.classList.add('admin');
      } else if (writtenContent === 'VISITOR' || writtenContent === "VISITEUR") {
        tdEl.classList.add('visitor')
      } else {
        const keyword = newKeywords.find(keyword => keyword.text.toUpperCase() === writtenContent);
        if (keyword) {
          tdEl.style.backgroundColor = keyword.color;
        } else {
          tdEl.classList.remove('user', 'admin', 'visitor');
          tdEl.style.backgroundColor = '';
        }
      }
    });
    
    //? check if the row is empty ? fill in red : remove red
    function checkEmptyFields() {
      let tdElText = tdEl.textContent.trim().toUpperCase();
      let tdEl2Text = tdEl2.textContent.trim().toUpperCase();
      let tdEl3Text = tdEl3.textContent.trim().toUpperCase();
      if (tdElText === '' || tdEl2Text === '' || tdEl3Text === '') {
        trEl.classList.add('must-be-filled');
      } else {
        trEl.classList.remove('must-be-filled');
      }
    }
    
    tdEl.addEventListener('input', checkEmptyFields);
    tdEl2.addEventListener('input', checkEmptyFields);
    tdEl3.addEventListener('input', checkEmptyFields);

  }

}