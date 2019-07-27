import { onRouterEventHandler } from './router';

const articleTitle = document.querySelector('.article-title h1');
const thomaArticle = document.querySelector('.thoma-articles');
const previousArticleBtns = document.querySelectorAll('.previous');
const nextArticleBtns = document.querySelectorAll('.next');

const getArticleNum = () => {
  const { hash } = window.location;
  const params = hash.split('?')[1];
  const articleNum = params.slice(params.indexOf('article') + 8);
  return Number(articleNum);
};

const getArticleValue = () => {
  const { hash } = window.location;
  const articleValue = Number(hash.split('=')[1]);
  return articleValue;
};
// debugger
if (getArticleNum() === 1) {
  nextArticleBtns.forEach((btn) => {
    btn.classList.add('btn-disabled');
  });
}

if (getArticleNum() === 10) {
  previousArticleBtns.forEach((btn) => {
    btn.classList.add('btn-disabled');
  });
}

fetch('http://infinityspine.com/wp-json/wp/v2/posts?page=1&per_page=10')
  .then(response => response.json())
  .then((posts) => {
    const articleIndex = getArticleNum() - 1;

    thomaArticle.innerHTML = posts[articleIndex].content.rendered;
    articleTitle.innerHTML = posts[articleIndex].title.rendered;
  });

previousArticleBtns.forEach((btn) => {
  function blogPreviewBtnsClickHandler(e) {
    let articleValue = getArticleValue() + 1;
    if (articleValue >= 11) {
      articleValue = 10;
      return;
    }
    window.history.pushState(null, null, '#dr-thoma-articles');
    onRouterEventHandler(e, articleValue);
  }
  btn.addEventListener('click', blogPreviewBtnsClickHandler);
});

nextArticleBtns.forEach((btn) => {
  function blogPreviewBtnsClickHandler(e) {
    let articleValue = getArticleValue() - 1;
    if (articleValue <= 0) {
      articleValue = 1;
      return;
    }

    // btn.classList.remove('btn-disabled');
    window.history.pushState(null, null, '#dr-thoma-articles');
    onRouterEventHandler(e, articleValue);
  }
  btn.addEventListener('click', blogPreviewBtnsClickHandler);
});
