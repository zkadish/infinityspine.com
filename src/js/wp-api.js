import handleErrors from './utils/fetch';

function getAllPosts() {
  return fetch('http://wp.infinityspine.com/wp-json/wp/v2/posts?per_page=100')
    .then(handleErrors)
    .then((response) => response.json())
    .then((json) => json);
}

export default getAllPosts;
