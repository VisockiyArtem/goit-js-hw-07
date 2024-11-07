const inputName = document.getElementById('name-input');
const outputName = document.getElementById('name-output');

inputName.addEventListener('input',   
 () => {
  const inputValue = inputName.value.trim(); // Очищаємо значення від пробілів по краях

  if (inputValue !== '') {
    outputName.textContent = inputValue;
  } else {
    outputName.textContent = 'Anonymous';
  }
});