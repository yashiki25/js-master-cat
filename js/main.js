'use strict';

// const data = ['Mac', 'Windows', 'HTML/CSS', 'FX', 'Web学習サイト', '書籍', '配列、条件分岐、オブジェクト指向…プログラミング知識をひたすら習得', '簡単なアプリや機能を作ってみる', 'プログラミングスクールに通う', '独学', '256times', 'その他のスクール', '粉もの大好き', 'JavaScriptは日々進化している', '検索のTOPに出た方を信じる', 'MDNや複数のサイトを確認して最新の情報を収集する', 'デベロッパーツールのConsoleでどこでエラーが出ているのか見る', '神社にお参りに行く', '集中力をあげるツボを押す', '開発仲間とオンラインもくもく会を開催', '英語圏の友達を作りに行く', 'OK！Google翻訳大先生！', '名詞を使う、配列など複数の値は複数形にすること', '好きな猫の毛柄からランダムに', 'グラフ描画職人を雇う', 'Google Chartsを使う'];

let nextQuestion = '';   // 現在のの設問
let currentAnswer = '';     // 今表示している回答

const startBtn = document.getElementById('start');
const retryBtn = document.querySelectorAll('.retry');
const nextBtn = document.getElementById('next');
const finishBtn = document.getElementById('finish');

const home = document.querySelector('.home'); // TOPへ戻る
const choices = document.querySelectorAll('.choices li'); // 選択肢
const questionNo = document.querySelector('.question-no'); // 問題番号

const sections = document.querySelectorAll('section');
const descriptionSection = document.querySelector('.content-description');

const header = document.querySelector('header');

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

// 256とその他
const question6 = document.querySelector('.question6');
const answer6A = document.querySelector('.answer6-a');
const answer6B = document.querySelector('.answer6-b');

// モダン
const question7 = document.querySelector('.question7');
const answer7A = document.querySelector('.answer7-a');
const answer7B = document.querySelector('.answer7-b');

// 調べ方
const question8 = document.querySelector('.question8');
const answer8A = document.querySelector('.answer8-a');
const answer8B = document.querySelector('.answer8-b');

// エラー対処方法
const question9 = document.querySelector('.question9');
const answer9A = document.querySelector('.answer9-a');
const answer9B = document.querySelector('.answer9-b');

// オンラインもくもく
const question10 = document.querySelector('.question10');
const answer10A = document.querySelector('.answer10-a');
const answer10B = document.querySelector('.answer10-b');

// 英語読めない
const question11 = document.querySelector('.question11');
const answer11A = document.querySelector('.answer11-a');
const answer11B = document.querySelector('.answer11-b');

// 変数名
const question12 = document.querySelector('.question12');
const answer12A = document.querySelector('.answer12-a');
const answer12B = document.querySelector('.answer12-b');

// GoogleChart
const question13 = document.querySelector('.question13');
const answer13A = document.querySelector('.answer13-a');
const answer13B = document.querySelector('.answer13-b');

// エピローグ
const epilogue = document.querySelector('.epilogue');

// スタートボタン
startBtn.addEventListener('click', () => {
  descriptionSection.classList.add('hidden');
  question1.classList.remove('hidden');
  questionNo.classList.remove('hidden');
  home.classList.remove('hidden');

  nextQuestion = question1;
});

// 選択肢クリック
choices.forEach(choice => {
  choice.addEventListener('click', () => {

    nextQuestion.classList.add('hidden');
    next.classList.remove('hidden');

    switch (choice.textContent) {
      case 'Mac':
        answer1A.classList.remove('hidden');
        currentAnswer = answer1A;
        nextQuestion = question2;
        break;
      
      case 'Windows':
        answer1B.classList.remove('hidden');
        currentAnswer = answer1B;
        nextQuestion = question2;
        break;
      
      case 'HTML/CSS':
        answer2A.classList.remove('hidden');
        currentAnswer = answer2A;
        nextQuestion = question3;
        break;
      
      case 'FX':
        answer2B.classList.remove('hidden');
        currentAnswer = answer2B;
        nextQuestion = question3;
        break;
      
      case 'Web学習サイト':
        answer3A.classList.remove('hidden');
        currentAnswer = answer3A;
        nextQuestion = question4;
        break;
      
      case '書籍':
        answer3B.classList.remove('hidden');
        currentAnswer = answer3B;
        nextQuestion = question4;
        break;
      
      case '配列、条件分岐、オブジェクト指向…プログラミング知識をひたすら習得':
        answer4A.classList.remove('hidden');
        currentAnswer = answer4A;
        nextQuestion = question5;
        break;
      
      case '簡単なアプリや機能を作ってみる':
        answer4B.classList.remove('hidden');
        currentAnswer = answer4B;
        nextQuestion = question5;
        break;
      
      case 'プログラミングスクールに通う':
        answer5A.classList.remove('hidden');
        currentAnswer = answer5A;
        nextQuestion = question6;
        break;
      
      case '独学':
        answer5B.classList.remove('hidden');
        currentAnswer = answer5B;
        nextQuestion = question6;
        break;
      
      case '256times':
        answer6A.classList.remove('hidden');
        currentAnswer = answer6A;
        nextQuestion = question7;
        break;
      
      case 'その他のスクール':
        answer6B.classList.remove('hidden');
        currentAnswer = answer6B;
        nextQuestion = question7;
        break;
      
      case '粉もの大好き':
        answer7A.classList.remove('hidden');
        currentAnswer = answer7A;
        nextQuestion = question8;
        break;
      
      case 'JavaScriptは日々進化している':
        answer7B.classList.remove('hidden');
        currentAnswer = answer7B;
        nextQuestion = question8;
        break;
      
      case '検索のTOPに出た方を信じる':
        answer8A.classList.remove('hidden');
        currentAnswer = answer8A;
        nextQuestion = question9;
        break;
      
      case 'MDNや複数のサイトを確認して最新の情報を収集する':
        answer8B.classList.remove('hidden');
        currentAnswer = answer8B;
        nextQuestion = question9;
        break;
      
      case 'デベロッパーツールのConsoleでどこでエラーが出ているのか見る':
        answer9A.classList.remove('hidden');
        currentAnswer = answer9A;
        nextQuestion = question10;
        break;
      
      case '神社にお参りに行く':
        answer9B.classList.remove('hidden');
        currentAnswer = answer9B;
        nextQuestion = question10;
        break;
      
      case '集中力をあげるツボを押す':
        answer10A.classList.remove('hidden');
        currentAnswer = answer10A;
        nextQuestion = question11;
        break;
      
      case '開発仲間とオンラインもくもく会を開催':
        answer10B.classList.remove('hidden');
        currentAnswer = answer10B;
        nextQuestion = question11;
        break;
      
      case '英語圏の友達を作りに行く':
        answer11A.classList.remove('hidden');
        currentAnswer = answer11A;
        nextQuestion = question12;
        break;
      
      case 'OK！Google翻訳大先生！':
        answer11B.classList.remove('hidden');
        currentAnswer = answer11B;
        nextQuestion = question12;
        break;
      
      case '名詞を使う、配列など複数の値は複数形にすること':
        answer12A.classList.remove('hidden');
        currentAnswer = answer12A;
        nextQuestion = question13;
        break;
      
      case '好きな猫の毛柄からランダムに':
        answer12B.classList.remove('hidden');
        currentAnswer = answer12B;
        nextQuestion = question13;
        break;
      
      // case 'グラフ描画職人を雇う':
      //   answer13A.classList.remove('hidden');
      //   currentAnswer = answer13A;
      //   currentQuestion = question14;
      //   preQuestion = question13;
      //   break;
      
      // case 'Google Chartsを使う':
      //   answer13B.classList.remove('hidden');
      //   currentAnswer = answer13B;
      //   currentQuestion = question14;
      //   preQuestion = question13;
      //   break;

      // 臨時エンドルート
      case 'グラフ描画職人を雇う':
        answer13A.classList.remove('hidden');
        currentAnswer = answer13A;
        nextQuestion = epilogue;

        nextBtn.textContent = 'ゴール！';
        break;

      case 'Google Chartsを使う':
        answer13B.classList.remove('hidden');
        currentAnswer = answer13B;
        nextQuestion = epilogue;
        
        nextBtn.textContent = 'ゴール！';
        break;
      
    }
  });
});

// 次へ
nextBtn.addEventListener('click', () => {
  currentAnswer.classList.add('hidden');
  nextQuestion.classList.remove('hidden');
  next.classList.add('hidden');

  if (nextQuestion === epilogue) {
    questionNo.textContent = 'Goooal!!';
    return;
  }

  questionNo.children[1].textContent = (questionNo.children[1].textContent * 1) + 1;
});

// TOPへ戻る
home.addEventListener('click', () => {
  window.location.reload();
});

finishBtn.addEventListener('click', () => {
  window.location.reload();
});

header.addEventListener('click', () => {
  window.location.reload();
});


