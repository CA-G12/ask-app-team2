const username = document.getElementById('username');
const email = document.getElementById('email');
const firstname = document.getElementById('firstname');
const lastname = document.getElementById('lastname');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirmpassword');
const phone = document.getElementById('phone');
const avatr = document.getElementById('avatar');
const cover = document.getElementById('cover');
const signup = document.querySelector('.signup');
const url = '/api/v1/auth/signup';

signup.addEventListener('click', () => {
  const dataObj = {
    username: username.value,
    email: email.value,
    fname: firstname.value,
    lname: lastname.value,
    password: password.value,
    confirmPassword: confirmPassword.value,
    phone: phone.value,
    cover: cover.value,
    avatar: avatr.value,
  };
  fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(dataObj),
  }).then((data) => data.json())
    .then((data) => location.href = '/pages/login/index.html')
    .catch((error) => alert('Try Again'));
});
