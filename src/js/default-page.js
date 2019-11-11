console.log('Default Page loaded!');

const hash = window.location.hash.split('?')[0];
const title = hash.replace('#', '').split('-').join(' ');
const page = window.location.hash.split('?')[1].split('=')[1];

const h2 = document.querySelector('.default-page .call-to-action__title');
h2.innerHTML = title;
const pageCopy = document.querySelector('.default-page .page__copy');
pageCopy.innerHTML = '';

debugger

fetch(`http://infinityspine.com/wp-json/wp/v2/pages/${page}`)
  .then(response => response.json())
  .then((res) => {
    console.log(res);
    debugger
    pageCopy.innerHTML = res.content.rendered;
  });
