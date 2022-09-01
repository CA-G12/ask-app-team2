/* eslint-disable camelcase */

const replyButtons = document.querySelectorAll('.reply');
const xIcon = document.querySelector('.x-icon');
const icon = document.querySelector('.icon');
const greeting = document.querySelector('.app');
const post = document.querySelector('.post');
const replyBox = document.getElementById('reply');
const logo = document.getElementById('logo');

const getURL = () => {
  const url = window.location.href;
  const username = url.split('=')[1];
  return username;
};

const showReplyBox = () => {
  const replyBox = document.querySelector('.reply-box');
  replyBox.style.display = 'flex';
};

const hideReplyBox = () => {
  const replyBox = document.querySelector('.reply-box');
  replyBox.style.display = 'none';
};

const getTime = () => {
  const date = new Date();
  return `${date.getHours()}:${date.getMinutes()}:${date.getSeconds}`;
};

const createQuestionBox = (obj) => {
  const questionsSection = document.querySelector('.questions');

  const questionReply = document.createElement('section');
  questionReply.classList.add('question-reply');
  questionReply.setAttribute('data-id', obj.id);
  questionsSection.appendChild(questionReply);

  const userInfoSection = document.createElement('section');
  userInfoSection.classList.add('user-info');
  questionReply.appendChild(userInfoSection);

  const textDiv = document.createElement('div');
  textDiv.classList.add('text');
  userInfoSection.appendChild(textDiv);

  const anonymousPara = document.createElement('p');
  anonymousPara.classList.add('anonymous');
  anonymousPara.textContent = 'Anonymous';
  textDiv.appendChild(anonymousPara);

  const questionPara = document.createElement('p');
  questionPara.classList.add('question');
  questionPara.textContent = obj.content;
  userInfoSection.appendChild(questionPara);
  const replyButton = document.createElement('button');
  replyButton.classList.add('reply');
  replyButton.addEventListener('click', showReplyBox);
  replyButton.textContent = 'reply';
  replyButton.type = 'button';
  userInfoSection.appendChild(replyButton);
};

fetch(`/api/v1/questions/load-questions?q=${getURL()}`).then((jsonData) => jsonData.json())
  .then((data) => {
    for (let i = data.length - 1; i >= 0; i--) {
      createQuestionBox(data[i]);
    }
  })
  .catch((err) => console.log(err));

replyButtons.forEach((btn) => {
  btn.addEventListener('click', showReplyBox);
});

xIcon.addEventListener('click', hideReplyBox);

icon.href = `/api/v1/users/profile/${getURL()}`;
greeting.textContent = getURL();
const questionReply = document.querySelector('.question-reply');

post.addEventListener('click', () => {
  const questionReplyd = document.querySelector('.question-reply').getAttribute('data-id');
  fetch('/api/v1/questions/send-reply', {
    method: 'post',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify({
      username: getURL(),
      contnet: replyBox.value,
      questionID: questionReplyd,
    }),
  }).then((data) => window.location.reload(true))
    .catch(err);
});
