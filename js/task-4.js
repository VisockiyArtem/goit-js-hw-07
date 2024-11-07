const loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', (event) => {
  event.preventDefault(); // Запобігаємо перезавантаженню сторінки

  const formData = new FormData(loginForm);
  const formValues = {};

  for (const [key, value] of formData.entries()) {
    formValues[key] = value.trim();
  }

  if (Object.values(formValues).some(value => value === '')) {
    alert('All form fields must be filled in');
  } else {
    console.log('Form data:', formValues);
    loginForm.reset(); // Очищаємо форму
  }
});