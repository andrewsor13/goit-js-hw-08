import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
function handleFormInput() {
  const formData = {
    email: form.email.value,
    message: form.message.value,
  };

  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}
form.addEventListener('input', throttle(handleFormInput, 500));
window.addEventListener('DOMContentLoaded', () => {
  const storedFormData = localStorage.getItem('feedback-form-state');

  if (storedFormData) {
    const formData = JSON.parse(storedFormData);

    form.email.value = formData.email;
    form.message.value = formData.message;
  }
});
form.addEventListener('submit', event => {
  event.preventDefault();

  const formData = {
    email: form.email.value,
    message: form.message.value,
  };

  console.log('Form Data:', formData);

  localStorage.removeItem('feedback-form-state');
  form.reset();
});
