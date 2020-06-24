import { filterScriptTags, injectScripts } from './utils/script-tag-injection';
import documentFrag from './utils/html';

const hash = window.location.hash.split('?')[0];
const title = hash.replace('#', '').split('-').join(' ');
const page = window.location.hash.split('?')[1].split('=')[1];

const h2 = document.querySelector('.default-page .call-to-action__title');
h2.innerHTML = title;
const pageCopy = document.querySelector('.default-page .page__copy');
pageCopy.innerHTML = '';

fetch(`http://wp.infinityspine.com/wp-json/wp/v2/pages/${page}`)
  .then((response) => {
    if (!response.ok) {
      throw new Error('Response failed!');
    }
    return response.json();
  })
  .then((json) => {
    pageCopy.innerHTML = '';
    const { rendered } = json.content;
    const frag = documentFrag(rendered);

    // This magic tests for <script> tags in the content...
    // pulls them out rebuilds them and appends them back
    // into the page... only if there is a <script> tag
    // that has innerHTML content... those tags have to be
    // re-injected back onto the page or they will be ignored
    // by the browser...
    const onload = (scripts, message) => {
      // if there are scripts once the last one has loaded
      console.log(message);
      injectScripts(scripts, pageCopy);
    };
    // prepare page content
    filterScriptTags(frag, onload);

    // add page content
    pageCopy.appendChild(frag);
  })
  .catch((err) => {
    console.error(err);
  });
