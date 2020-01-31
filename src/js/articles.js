// import onRouterEventHandler from './router';
import storageAvailable from './utils/localStorage';
import paramValue from './utils/router';

import Worker from './get.worker';


const articleTitle = document.querySelector('.article-title h1');
const articleDate = document.querySelector('.page__article-nav--date');
const articleCopy = document.querySelector('.thoma-articles');
const nextArticleBtns = document.querySelectorAll('.next');
const previousArticleBtns = document.querySelectorAll('.previous');
let articles = null;

const currentArticle = () => {
  const articleNum = paramValue('article');
  // number - length * -1
  const articleIndex = (articleNum - articles.length) * -1;
  const article = articles[articleIndex];
  articleTitle.innerHTML = article.title.rendered;
  const [date] = article.date.split('T');
  articleDate.innerHTML = date;
  articleCopy.innerHTML = article.content.rendered;
};

if (!storageAvailable('localStorage')) {
  console.log('localStorage not available fall back to the window object.');
} else {
  const articleNum = paramValue('article');

  if (!localStorage.posts) {
    // TODO: if posts don't exist fetch the requested post
    const wpWorker = new Worker();
    wpWorker.onmessage = () => {
      articles = JSON.parse(localStorage.posts);
      currentArticle(articleNum);
    };
  } else {
    articles = JSON.parse(localStorage.posts);
    currentArticle(articleNum);
  }
}

function onPreviousBtnsHandler() {
  const articleNum = paramValue('article') - 1;
  nextArticleBtns.forEach((btn) => btn.classList.remove('btn-disabled'));

  if (articleNum === 0) {
    previousArticleBtns.forEach((btn) => btn.classList.add('btn-disabled'));
    return;
  }

  currentArticle(articleNum);

  window.history.pushState(null, null, `#articles?article=${articleNum}`);
  // onRouterEventHandler(e, articleValue);
}

previousArticleBtns.forEach((btn) => {
  btn.addEventListener('click', onPreviousBtnsHandler);
});

function onNextBtnsHandler() {
  const articleNum = paramValue('article') + 1;
  previousArticleBtns.forEach((btn) => btn.classList.remove('btn-disabled'));

  if (articleNum > articles.length) {
    nextArticleBtns.forEach((btn) => btn.classList.add('btn-disabled'));
    return;
  }

  currentArticle(articleNum);

  window.history.pushState(null, null, `#articles?article=${articleNum}`);
  // onRouterEventHandler(e, articleValue);
}

nextArticleBtns.forEach((btn) => {
  btn.addEventListener('click', onNextBtnsHandler);
});
