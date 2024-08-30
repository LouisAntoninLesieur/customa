
//? get elements from DOM
const aboutEl = document.getElementById('about');
const modalEl = document.getElementById('about-modal');
const closeBtnEl = document.querySelector('.close');

aboutEl.addEventListener('click', function() {
  showModal();
});

//? display the modal
function showModal() {
  modalEl.style.display = 'block';
}

//? hides the modal
function closeModal() {
  modalEl.style.display = 'none';
}

//? close the modal
document.addEventListener('click', function(event) {
  if (event.target === modalEl || event.target === closeBtnEl) {
    closeModal();
  }
});