const articleTitle = document.querySelector('.article-title h1');
const thomaArticle = document.querySelector('.thoma-articles');
const { hash } = window.location;
const params = hash.split('?')[1];
const articleNum = params.slice(params.indexOf('article') + 8);
// debugger;

fetch('http://infinityspine.com/wp-json/wp/v2/posts?per_page=2')
  .then(response => response.json())
  .then((posts) => {
    thomaArticle.innerHTML = posts[articleNum].content.rendered;
    articleTitle.innerHTML = posts[articleNum].title.rendered;
  });
