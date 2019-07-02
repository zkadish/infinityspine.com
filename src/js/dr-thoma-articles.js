
const articleTitle = document.querySelector('.article-title h1');
const thomaArticle = document.querySelector('.thoma-articles');

fetch('http://infinityspine.com/wp-json/wp/v2/posts?per_page=1')
  .then(response => response.json())
  .then((posts) => {
    thomaArticle.innerHTML = posts[0].content.rendered;
    articleTitle.innerHTML = posts[0].title.rendered;
  });
