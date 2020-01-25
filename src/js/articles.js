import onRouterEventHandler from './router';

const articleTitle = document.querySelector('.article-title h1');
const thomaArticle = document.querySelector('.thoma-articles');
const articleDate = document.querySelector('.page__article-nav--date');
const nextArticleBtns = document.querySelectorAll('.next');
const previousArticleBtns = document.querySelectorAll('.previous');


const articles = localStorage.posts;
const getArticles = () => {
  debugger
  const route = window.location;
  console.log(route);
  debugger;
};
getArticles();
console.log('articles loaded');

const getArticleNum = () => {
  const { hash } = window.location;
  const params = hash.split('?')[1];
  const articleNum = params.slice(params.indexOf('article') + 8);
  return Number(articleNum);
};

const getArticleValue = () => {
  const { hash } = window.location;
  const articleValue = Number(hash.split('article=')[1]);
  return Number(articleValue);
};

// get the page number from the article number
const getPage = () => {
  let page = 1;
  let pageIndex = 0;
  const articleNum = getArticleNum();
  const articleAsIndex = (articleNum - 1).toString();
  if (articleAsIndex.length === 1) return page;
  pageIndex = Number(articleAsIndex.toString().slice(0, 1));
  page = pageIndex + 1;
  return page;
};

// get article index of page array
const getArticleIndex = () => {
  const articleValue = getArticleValue();
  const pageIndex = getPage() - 1;
  const articleIndex = ((articleValue) - (pageIndex * 10)) - 1;
  return articleIndex;
};

if (getArticleNum() === 1) {
  nextArticleBtns.forEach((btn) => {
    btn.classList.add('btn-disabled');
  });
}

// TODO: This is how the data for articles should be managed...
// Instead of getting 10 articles at a time and working with data and
// get another 10 when the user hits the end of current 10...
// First check to see if article is in localStorage... if not request
// the one article the user has arrived at...
// Done: Find an appropriate time to start downloading all articles with
// Done: a WebWorker. Most likely right after initial window.load event...
// if the current article is not in localStorage then request it...
// one request for one page... until all articles have downloaded...

// const getArticles = () => {
//   const page = getPage();
//   fetch(`http://wp.infinityspine.com/wp-json/wp/v2/posts?page=${page}&per_page=10`)
//     .then((response) => {
//       if (!response.ok) {
//         throw new Error('response.error');
//       }
//       return response.json();
//     })
//     .then((posts) => {
//       let articleNum = getArticleNum();
//       let articleIndex = getArticleIndex();
//       if (articleIndex + 1 >= posts.length) {
//         previousArticleBtns.forEach((btn) => {
//           btn.classList.add('btn-disabled');
//         });
//         articleNum -= 1;
//         articleIndex -= 1;
//         window.history.replaceState({}, '', `#dr-thoma-articles?article=${articleNum}`);
//       }
//       const date = posts[articleIndex].date.split('T')[0];
//       articleDate.innerHTML = date;
//       thomaArticle.innerHTML = posts[articleIndex].content.rendered;
//       articleTitle.innerHTML = posts[articleIndex].title.rendered;
//     })
//     .catch((err) => {
//       console.log(err);
//       // window.location = 'pages/404.html';
//     });
// };
// getArticles();

function blogPreviousBtnsClickHandler(e) {
  // increment articleNum
  const articleValue = getArticleValue() + 1;
  let page = getPage();

  // if (articleValue >= (page * 10) + 1) {
  if (articleValue === (page * 10)) {
    page += 1;
    getArticles();
  }

  window.history.pushState(null, null, '#dr-thoma-articles');
  onRouterEventHandler(e, articleValue);
}

previousArticleBtns.forEach((btn) => {
  btn.addEventListener('click', blogPreviousBtnsClickHandler);
});

function blogNextBtnsClickHandler(e) {
  // decrement articleNum
  let articleValue = getArticleValue() - 1;
  let page = getPage();

  if (articleValue <= 0) {
    articleValue = 1;
    return;
  }

  if (articleValue <= (page * 10) - 1) {
    page -= 1;
    getArticles();
  }

  window.history.pushState(null, null, '#dr-thoma-articles');
  onRouterEventHandler(e, articleValue);
}

nextArticleBtns.forEach((btn) => {
  btn.addEventListener('click', blogNextBtnsClickHandler);
});
