let keywordIndex = 0;

const colorInputEls = document.querySelectorAll('.color-input');
const colorPickerInputEls = document.querySelectorAll('.color-picker-input');
const addKeywordBtnEl = document.querySelector('.keywordBtn');

colorPickerInputEls.forEach((colorPicker, index) => {
  colorPicker.addEventListener('input', () => {
    colorInputEls[index].style.backgroundColor = colorPicker.value;
  });
});

addKeywordBtnEl.addEventListener('click', () => {
  const newKeyword = document.createElement('div');
  newKeyword.classList.add('input-container');
  newKeyword.innerHTML = `
      <input class="color-input" type="text" id="input-${keywordIndex}">
      <input class="color-picker-input" type="color" name="color-picker" id="color-picker-${keywordIndex}">
    `;
  
  const asideContent = document.querySelector('.aside-content');
  asideContent.insertBefore(newKeyword, addKeywordBtnEl);
  
  const colorPicker = newKeyword.querySelector('.color-picker-input');
  const colorInput = newKeyword.querySelector('.color-input');
  
  colorPicker.addEventListener('input', () => {
    colorInput.style.backgroundColor = colorPicker.value;
  });
  
  keywordIndex++;
});