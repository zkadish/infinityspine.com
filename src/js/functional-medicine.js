import handleErrors from './utils/fetch';
import documentFrag from './utils/html';

const pageCopy = document.querySelector('.page-copy');

console.log('functional medicine loaded');

// Functional Medicine
fetch('https://wp.infinityspine.com/wp-json/wp/v2/pages/2562')
  .then(handleErrors)
  .then((response) => response.json())
  .then((res) => {
    const frag = documentFrag(res.content.rendered);
    pageCopy.appendChild(frag);
  })
  .then(() => {
    pageCopy.classList.add('fade-in');
  })
  .catch((err) => {
    console.error(err);
  });
