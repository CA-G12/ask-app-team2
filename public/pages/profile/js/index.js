const questionCount = document.querySelector('.old-questions');

const createQuestion = () => {
  const questionSection = document.createElement('div');
  const questionForm = document.createElement('div');
  const questionContent = document.createElement('p');
  questionContent.textContent = 'What\'s your name?';

  const userTitle = document.createElement('p');
  userTitle.textContent = 'anonymous';

  questionForm.appendChild(questionContent);
  questionForm.appendChild(userTitle);
  questionForm.classList.add('question-from');
  questionSection.appendChild(questionForm);

  const answer = document.createElement('div');

  const img = document.createElement('img');
  img.src = 'https://pbs.twimg.com/profile_images/1559252590696828929/BsqrxPyi_400x400.jpg';
  answer.appendChild(img);

  const answerDetails = document.createElement('div');

  const username = document.createElement('p');
  username.textContent = 'fadezak100';
  const date = document.createElement('p');
  date.textContent = '27/8/2022';
  answerDetails.classList.add('answer-details');
  answerDetails.appendChild(username);
  answerDetails.appendChild(date);
  answer.appendChild(answerDetails);
  answer.classList.add('answer');

  questionSection.appendChild(answer);

  const response = document.createElement('div');
  response.classList.add('response');
  const responseContent = document.createElement('p');
  responseContent.textContent = 'My Name is Fadi';
  response.appendChild(responseContent);
  questionSection.appendChild(response);

  const line = document.createElement('hr');
  questionSection.appendChild(line);

  const reactions = document.createElement('reactions');
  reactions.classList.add('reactions');
  const love = document.createElement('a');
  love.innerHTML = '<i class="fa-solid fa-heart"></i><span class="count"> 0</span>';
  const retweet = document.createElement('a');
  retweet.innerHTML = '<i class="fa-solid fa-retweet"></i>';
  const share = document.createElement('a');
  share.innerHTML = '<i class="fa-solid fa-share"></i>';
  reactions.appendChild(love);
  reactions.appendChild(retweet);
  reactions.appendChild(share);

  questionSection.appendChild(reactions);
  questionSection.classList.add('questions-count');
  questionCount.appendChild(questionSection);
};

createQuestion();
createQuestion();
