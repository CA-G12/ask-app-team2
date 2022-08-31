const questionCount = document.querySelector('.old-questions');
const profileInfo = document.querySelector('.profile-info');

const createQuestion = (obj) => {
  console.log(obj);
  const questionSection = document.createElement('div');
  const questionForm = document.createElement('div');
  const questionContent = document.createElement('p');
  questionContent.textContent = obj.content;

  const userTitle = document.createElement('p');
  userTitle.textContent = 'anonymous';

  questionForm.appendChild(questionContent);
  questionForm.appendChild(userTitle);
  questionForm.classList.add('question-from');
  questionSection.appendChild(questionForm);

  const answer = document.createElement('div');

  const img = document.createElement('img');
  img.src = obj.avatar;
  answer.appendChild(img);

  const answerDetails = document.createElement('div');

  const username = document.createElement('p');
  username.textContent = obj.username;
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
  responseContent.textContent = obj.reply;
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
  love.classList.add('love');
  share.classList.add('share');
  retweet.classList.add('retweet');
  reactions.appendChild(love);
  reactions.appendChild(retweet);
  reactions.appendChild(share);

  questionSection.appendChild(reactions);
  questionSection.classList.add('questions-count');
  questionCount.appendChild(questionSection);
};

const getURL = () => {
  const url = location.href;
  const username = url.split('=')[1];
  return username;
};

const createProfile = (obj) => {
  console.log(obj);
  const profileSection = document.createElement('section');
  const cover = document.createElement('img');
  cover.src = obj.cover;
  cover.classList.add('cover');
  const avater = document.createElement('img');
  avater.src = obj.avatar;
  avater.classList.add('avatar');
  profileSection.appendChild(cover);
  profileSection.appendChild(avater);
  profileSection.classList.add('profile');
  profileInfo.appendChild(profileSection);

  const nickName = document.createElement('section');
  nickName.classList.add('nick-name');

  const nickNameParagraph = document.createElement('p');
  nickNameParagraph.textContent = obj.username;
  nickName.appendChild(nickNameParagraph);
  profileInfo.appendChild(nickName);

  const stats = document.createElement('section');
  stats.classList.add('stats');
  const followingDiv = document.createElement('div');
  const followingPara = document.createElement('p');
  followingPara.textContent = '0';
  const statsTitle = document.createElement('p');
  statsTitle.textContent = 'Following';
  statsTitle.classList.add('title');
  followingDiv.appendChild(followingPara);
  followingPara.appendChild(statsTitle);
  stats.appendChild(followingDiv);

  const followersDiv = document.createElement('div');
  const followersPara = document.createElement('p');
  followersPara.textContent = obj.count;
  const statsTitleFoll = document.createElement('p');
  statsTitleFoll.textContent = 'Questions';
  statsTitleFoll.classList.add('title');
  followersDiv.appendChild(followersPara);
  followersDiv.appendChild(statsTitleFoll);
  stats.appendChild(followersDiv);

  const questionsCount = document.createElement('div');
  const questionPar = document.createElement('p');
  questionPar.textContent = '0';
  const questCo = document.createElement('p');
  questCo.textContent = 'Followers';
  questCo.classList.add('title');
  questionsCount.appendChild(questionPar);
  questionsCount.appendChild(questCo);
  stats.appendChild(questionsCount);

  profileInfo.appendChild(stats);
};

fetch(`/api/v1/questions/users-question?username=${getURL()}`)
  .then((data) => data.json())
  .then((data) => {
    data.forEach((el) => {
      createQuestion(el);
    });
  })
  .catch(console.log);

fetch(`/api/v1/users/profile?username=${getURL()}`)
  .then((data) => data.json())
  .then((data) => {
    createProfile(data[0]);
  })
  .catch(console.log);
