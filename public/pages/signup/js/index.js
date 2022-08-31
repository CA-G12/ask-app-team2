const username = document.getElementById('username');
const firstname = document.getElementById('firstname');
const lastname = document.getElementById('lastname');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirmpassword');
const phone = document.getElementById('phone');
const url = '/api/v1/auth/signup';
fetch(url, {
  method: 'POST',

  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    // eslint-disable-next-line max-len
    username: username.value, firstname: firstname.value, lastname: lastname.value, password: password.value, confirmpassword: confirmPassword.value, phone: phone.value,
  }),
})
  .then((data) => console.log(data));
