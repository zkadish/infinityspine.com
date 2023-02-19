import handleErrors from './utils/fetch';
import documentFrag from './utils/html';

const schedule = document.querySelector('.schedule');

console.log('directions loaded');

// Directions
fetch('https://wp.infinityspine.com/wp-json/wp/v2/pages/2522')
  .then(handleErrors)
  .then((response) => response.json())
  .then((res) => {
    const frag = documentFrag(res.content.rendered);
    schedule.appendChild(frag);
  })
  .then(() => {
    schedule.classList.add('fade-in');
  })
  .catch((err) => {
    console.error(err);
  });
