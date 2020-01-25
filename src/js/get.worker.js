import getAllPosts from './wp-api';

getAllPosts()
  .then((posts) => {
    console.log(posts);
    debugger
    postMessage(posts);
  })
  .catch((err) => {
    console.log(err);
  });
