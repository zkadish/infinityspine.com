const articleTitle = document.querySelector('.article-title h1');
const thomaArticle = document.querySelector('.thoma-articles');

fetch('http://infinityspine.com/wp-json/wp/v2/posts?per_page=10')
  .then(response => response.json())
  .then((posts) => {
    const { hash } = window.location;
    const params = hash.split('?')[1];
    const articleNum = params.slice(params.indexOf('article') + 8);

    thomaArticle.innerHTML = posts[articleNum].content.rendered;
    articleTitle.innerHTML = posts[articleNum].title.rendered;
    return posts;
  });
