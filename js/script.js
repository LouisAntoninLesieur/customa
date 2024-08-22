const asEl = document.getElementById('input-as');
const iWantToEl = document.getElementById('input-i-want-to');
const soThatEl = document.getElementById('input-so-that');
const btnEl = document.getElementById('add');

btnEl.addEventListener('click', () => {
  let asValue = asEl.value;
  let iWantToValue = iWantToEl.value;
  let soThatValue = soThatEl.value;

  //   console.log(asValue, iWantToValue, soThatValue);

  if (asValue === '' || iWantToValue === '' || soThatValue === '') {
    alert('Please enter all the fields');
    return;
  }

  if (asEl && iWantToEl && soThatEl) {
    asEl.value = '';
    iWantToEl.value = '';
    soThatEl.value = '';

    //? create a new table row
    const tbodyEl = document.getElementById('tbody');
    //? create table rows
    const trEl = document.createElement('tr');
    const tdEl = document.createElement('td');
    const tdEl2 = document.createElement('td');
    const tdEl3 = document.createElement('td');

    //? add class
    tbodyEl.classList.add('tbody');
    tdEl.classList.add('td');
    tdEl2.classList.add('td');
    tdEl3.classList.add('td');

    //? add content to table rows
    tdEl.textContent = asValue.toUpperCase();
    tdEl2.textContent = iWantToValue.toUpperCase();
    tdEl3.textContent = soThatValue.toUpperCase();

    //? make table rows editable
    tdEl.contentEditable = true;
    tdEl2.contentEditable = true;
    tdEl3.contentEditable = true;

    //? append table rows
    trEl.appendChild(tdEl);
    trEl.appendChild(tdEl2);
    trEl.appendChild(tdEl3);
    tbodyEl.appendChild(trEl);

    //? add special behaviour
    if (tdEl.textContent.trim().toUpperCase() === 'USER') {
      tdEl.classList.add('user');
    } else if (tdEl.textContent.trim().toUpperCase() === 'ADMIN') {
      tdEl.classList.add('admin');
    }

    //? create a delete button
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'X';
    deleteBtn.classList.add('deleteBtn');
    trEl.appendChild(deleteBtn);
    
    //? add event listener
    deleteBtn.addEventListener('click', () => {
      tbodyEl.removeChild(trEl);
    });
  }
});