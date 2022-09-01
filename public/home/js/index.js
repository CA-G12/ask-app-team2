const searchInput = document.querySelector('.search-input');
const searchBtn = document.querySelector('.search-btn');

searchBtn.addEventListener('click', () => {
  const username = searchInput.value;
  location.href = `/pages/profile/user?username=${username}`;
});
