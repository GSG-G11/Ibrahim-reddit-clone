const formLogin = document.querySelector('.form_login');

formLogin.addEventListener('submit', (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  const data = Object.fromEntries(formData.entries());
  fetch('/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  }).then((res) => res.json())
    .then(({ redirect, message }) => {
      if (redirect) {
        window.location.href = redirect;
      } else {
        swal('Error', message, 'error');
      }
    });
});
