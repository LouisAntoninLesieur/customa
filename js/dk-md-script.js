
const switchBtnEl = document.querySelector('.toggle');
const bodyEl = document.querySelector('body');
const containerEl = document.querySelector('.container');

function toggleDarkMode() {
  bodyEl.classList.toggle('dark-mode');
  containerEl.classList.toggle('container-dm');
  switchBtnEl.classList.toggle('swhitchBtn-dm');
}

switchBtnEl.addEventListener('click', () => {
  toggleDarkMode();
});