/* eslint-disable camelcase */

const replyButtons = document.querySelectorAll('.reply');
const xIcon = document.querySelector('.x-icon');
const icon = document.querySelector('.icon');
const greeting = document.querySelector('.app');

const getURL = () => {
  const url = location.href;
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
  console.log(obj);
  const questionsSection = document.querySelector('.questions');

  const questionReply = document.createElement('section');
  questionReply.classList.add('question-reply');
  questionReply.setAttribute('data-id', obj.user_id);
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
  replyButton.type = 'button';
  userInfoSection.appendChild(replyButton);
};

fetch(`/api/v1/questions/load-questions?q=${getURL()}`).then((jsonData) => jsonData.json())
  .then((data) => {
    data.forEach((row) => {
      createQuestionBox(row);
    }).catch((err) => console.log(err));
  });

replyButtons.forEach((btn) => {
  btn.addEventListener('click', showReplyBox);
});

xIcon.addEventListener('click', hideReplyBox);

icon.href = `/api/v1/users/profile/${getURL()}`;
greeting.textContent = getURL();
