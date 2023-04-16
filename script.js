'use strict';
/*console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent="🎇Correct Number";
console.log(document.querySelector('.message').textContent);

document.querySelector('.number').textContent=13;
document.querySelector('.score').textContent=10;

document.querySelector('.guess').value=44;*/
let correctNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
const outputmessage = function (message) {
  document.querySelector('.message').textContent = message;
};
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  //document.querySelector('.message').textContent="🎊Correct Number"
  console.log(guess, typeof guess);
  if (!guess) outputmessage('🛑Number not Entered');
  else if (guess === correctNumber) {
    outputmessage('🎉Correct Number');
    document.querySelector('.number').textContent = correctNumber;
    document.querySelector('body').style.backgroundColor = '#48c356';
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (score > 1) {
    outputmessage(
      guess > correctNumber
        ? '☝Your choicd is higher than the correct option'
        : '👇Your choice is lower than the correct option'
    );
    score--;
    document.querySelector('.score').textContent = score;
  } else {
    outputmessage('🧨You lost the game');
    document.querySelector('.score').textContent = 0;
  }
  // else if(guess<correctNumber)
  // {
  //     outputmessage("👇Your choice is lower than the correct option");
  // }
  // else{
  //     outputmessage("☝Your choicd is higher than the correct option");
  // }
});
document.querySelector('.again').addEventListener('click', function () {
  correctNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  outputmessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
