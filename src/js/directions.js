import { handleErrors } from './utils/fetch';

const schedule = document.querySelector('.schedule');

console.log('directions loaded');

// fetch hours of operation
fetch('http://wp.infinityspine.com/wp-json/wp/v2/pages/2522')
  .then(handleErrors)
  .then((response) => response.json())
  .then((res) => {
    schedule.innerHTML = res.content.rendered;
  })
  .catch((err) => {
    console.error(err);
  });
