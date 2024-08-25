
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

    //? add special behaviours
    let writtenContent = tdEl.textContent.trim().toUpperCase();

    if (writtenContent === 'USER' || writtenContent === 'UTILISATEUR') {
      tdEl.classList.add('user');
    } else if (writtenContent === 'ADMIN' || writtenContent === 'ADMINISTRATEUR') {
      tdEl.classList.add('admin');
    } else if (writtenContent === 'VISITOR' || writtenContent === "VISITEUR") {
      tdEl.classList.add('visitor')
    }
    
    tdEl.addEventListener('input', () => {
      const textContent = tdEl.textContent.trim().toUpperCase();
      if (textContent === 'USER' || textContent === 'UTILISATEUR') {
        tdEl.classList.add('user');
      } else if (textContent === 'ADMIN' || textContent === 'ADMINISTRATEUR') {
        tdEl.classList.add('admin');
      } else if (textContent === 'VISITOR' || textContent === "VISITEUR") {
        tdEl.classList.add('visitor')
      } else {
        tdEl.classList.remove('user', 'admin', 'visitor');
      }
    });
    
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