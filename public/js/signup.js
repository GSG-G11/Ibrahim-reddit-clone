const formSignup = document.querySelector('.form_signup');

formSignup.addEventListener('submit', (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  const {
    username, password, email, confirm,
  } = Object.fromEntries(formData.entries());
  const data = { username, password, email };
  if (password === confirm) {
    fetch('/signup', {
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
  } else {
    swal('Error', 'Password and Confirm Password should be matched', 'error');
  }
});
