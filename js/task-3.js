const nameInput = document.getElementById('name-input');
const nameOutput = document.getElementById('name-output');

nameInput.addEventListener('input',   
 () => {
  const name = nameInput.value.trim();   
 // Видаляємо пробіли на початку і кінці
  nameOutput.textContent = name ? `Hello, ${name}!` : 'Hello, Anonymous!';
});