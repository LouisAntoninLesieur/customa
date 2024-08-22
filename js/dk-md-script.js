
const switchBtnEl = document.querySelector('.toggle');
const bodyEl = document.querySelector('body');
const containerEl = document.querySelector('.container');
const tbodyEl = document.querySelector('tbody');

function toggleDarkMode() {
  bodyEl.classList.toggle('dark-mode');
  containerEl.classList.toggle('container-dm');
  switchBtnEl.classList.toggle('swhitchBtn-dm');
  tbodyEl.classList.toggle('tbody-dm');
}

switchBtnEl.addEventListener('click', () => {
  toggleDarkMode();
});