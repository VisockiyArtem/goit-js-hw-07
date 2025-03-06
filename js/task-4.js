
const form = document.querySelector('.login-form');

form.addEventListener('submit', (event) => {
  event.preventDefault(); // Запобігаємо перезавантаженню сторінки

  const { elements: { email, password } } = event.currentTarget; // Отримуємо доступ до елементів форми

  if (!email.value || !password.value) {
    alert('All form fields must be filled in'); // Виводимо попередження, якщо поля не заповнені
    return;
  }

  const formData = {
    email: email.value.trim(), // Отримуємо значення email, обрізаючи пробіли
    password: password.value.trim(), // Отримуємо значення password, обрізаючи пробіли
  };

  console.log(formData); // Виводимо об'єкт з даними в консоль
  event.currentTarget.reset(); // Очищаємо форму
});