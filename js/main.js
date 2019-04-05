'use strict';

let preQuestion = '';       // 前回の設問
let currentQuestion = '';   // 現在のの設問
let currentAnswer = '';     // 今表示している回答

const startBtn = document.getElementById('start');
const retryBtn = document.querySelectorAll('.retry');

const sections = document.querySelectorAll('section');
const descriptionSection = document.querySelector('.content-description');

// MacかWindowsか
const question1 = document.querySelector('.question1');
const answer1A = document.querySelector('.answer1-a');
const answer1B = document.querySelector('.answer1-b');

// 何から勉強？
const question2 = document.querySelector('.question2');
const answer2A = document.querySelector('.answer2-a');
const answer2B = document.querySelector('.answer2-b');

// 教材
const question3 = document.querySelector('.question3');
const answer3A = document.querySelector('.answer3-a');
const answer3B = document.querySelector('.answer3-b');

// 勉強方法
const question4 = document.querySelector('.question4');
const answer4A = document.querySelector('.answer4-a');
const answer4B = document.querySelector('.answer4-b');

// スクール行くべき？
const question5 = document.querySelector('.question5');
const answer5A = document.querySelector('.answer5-a');
const answer5B = document.querySelector('.answer5-b');

const home = document.querySelector('.home');
const paging = document.querySelector('.paging');

const choices = document.querySelectorAll('.choices li');

// スタートボタン
startBtn.addEventListener('click', () => {
  descriptionSection.classList.add('hidden');
  question1.classList.remove('hidden');
  home.classList.remove('hidden');

  currentQuestion = question1;
  //questionHistory.push(question1);
});

// 選択肢クリック
choices.forEach(choice => {
  choice.addEventListener('click', () => {
    // 問題を非表示
    currentQuestion.classList.add('hidden');
    // 次へ・戻る表示
    paging.classList.remove('hidden');

    switch (choice.textContent) {
      case 'Mac':
        answer1A.classList.remove('hidden');
        currentAnswer = answer1A;
        currentQuestion = question2;
        preQuestion = question1;
        break;
      
      case 'Windows':
        answer1B.classList.remove('hidden');
        currentAnswer = answer1B;
        currentQuestion = question2;
        preQuestion = question1;
        break;
      
      case 'HTML/CSS':
        answer2A.classList.remove('hidden');
        currentAnswer = answer2A;
        currentQuestion = question3;
        preQuestion = question2;
        break;
      
      case 'FX':
        answer2B.classList.remove('hidden');
        currentAnswer = answer2B;
        currentQuestion = question3;
        preQuestion = question2;

        paging.classList.add('hidden');
        break;
      
      case 'Web学習サイト':
        answer3A.classList.remove('hidden');
        currentAnswer = answer3A;
        currentQuestion = question4;
        preQuestion = question3;
        break;
      
      case '書籍':
        answer3B.classList.remove('hidden');
        currentAnswer = answer3B;
        currentQuestion = question4;
        preQuestion = question3;
        break;
      
      case '変数、配列、ループ文…プログラミング知識をひたすら習得':
        answer4A.classList.remove('hidden');
        currentAnswer = answer4A;
        currentQuestion = question5;
        preQuestion = question4;
        break;
      
      case '簡単なアプリや機能を作ってみる':
        answer4A.classList.remove('hidden');
        currentAnswer = answer4B;
        currentQuestion = question5;
        preQuestion = question4;
        break;
    }
  });
});

// 戻る
paging.children[0].addEventListener('click', () => {
  currentAnswer.classList.add('hidden');
  preQuestion.classList.remove('hidden');
  paging.classList.add('hidden');

  currentQuestion = preQuestion;
});

// やり直し
retryBtn.forEach(btn => {
  btn.addEventListener('click', () => {
    currentAnswer.classList.add('hidden');
    preQuestion.classList.remove('hidden');

    currentQuestion = preQuestion;
  });
});

// 次へ
paging.children[1].addEventListener('click', () => {
  currentAnswer.classList.add('hidden');
  currentQuestion.classList.remove('hidden');

  paging.classList.add('hidden');
});

// TOPへ戻る
home.addEventListener('click', () => {
  window.location.reload();
});



