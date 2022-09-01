const username = document.getElementById('username');
const password = document.getElementById('password');
const login = document.querySelector('.login');
const url = '/api/v1/auth/login';

login.addEventListener('click', () => {
  const dataObj = {
    username: username.value,
    password: password.value,
  };
  fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(dataObj),
  }).then(data => data.json())
  .then(data => {
    location.href = `/api/v1/users/profile/${data}`;
  }).catch((err) => console.log(err));
});
