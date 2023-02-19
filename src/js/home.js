
import { ROUTES } from './constants';
import onRouterEventHandler from './router';
import handleErrors from './utils/fetch';
import documentFrag from './utils/html';
import storageAvailable from './utils/localStorage';

const treatmentRoutes = ROUTES.slice(0, 4);
const treatmentBtns = document.querySelectorAll('.treatment__btn button');
const treatments = document.querySelectorAll('.treatment');
const testimonialsBtn = document.querySelector('.testimonials__btn button');
const articlePreviewBtns = document.querySelectorAll('.articles-preview__btn');
const blogPreviewImages = document.querySelectorAll('.articles-preview-image img');
const blogPreviewTitles = document.querySelectorAll('.articles-preview__post h2');
const blogPreviewExcerpts = document.querySelectorAll('.articles-preview__excerpt');
const splashContentLeft = document.querySelector('.splash__content--left');
const aboutInfinitySpine = document.querySelectorAll('.about-copy');

// splash page content
fetch('https://wp.infinityspine.com/wp-json/wp/v2/pages/2509')
  .then(handleErrors)
  .then((response) => response.json())
  .then((res) => {
    splashContentLeft.innerHTML = res.content.rendered;
  })
  .then(() => {
    splashContentLeft.classList.add('fade-in');
  })
  .catch((err) => {
    console.error(err);
  });

// selling-points/about - wp.infinityspine.com/welcome page content
fetch('https://wp.infinityspine.com/wp-json/wp/v2/pages/2543')
  .then(handleErrors)
  .then((response) => response.json())
  .then((res) => {
    const frag = documentFrag(res.content.rendered);
    const about = frag.querySelectorAll('.selling-points__copy');
    const [a, b] = about;
    aboutInfinitySpine[0].appendChild(a);
    aboutInfinitySpine[1].appendChild(b);
  })
  .then(() => {
    aboutInfinitySpine[0].classList.add('fade-in');
    aboutInfinitySpine[1].classList.add('fade-in');
  })
  .catch((err) => {
    console.error(err);
  });

// treatments page
fetch('https://wp.infinityspine.com/wp-json/wp/v2/pages/2550')
  .then(handleErrors)
  .then((response) => response.json())
  .then((res) => {
    const frag = documentFrag(res.content.rendered);
    const copy = frag.querySelectorAll('div');
    treatments.forEach((treatment, i) => {
      if (treatment.children[0].children.length === 0) {
        treatment.children[0].appendChild(copy[i]);
      }
    });
  })
  .then(() => {
    treatments.forEach((treatment) => {
      if (!treatment.classList.contains('fade-in')) {
        treatment.classList.add('fade-in');
      }
    });
  })
  .catch((err) => {
    console.error(err);
  });

// get last 3 articles
fetch('https://wp.infinityspine.com/wp-json/wp/v2/posts?per_page=3')
  .then(handleErrors)
  .then((response) => response.json())
  .then((posts) => {
    const featuredMedia = posts.filter((post) => post.featured_media);

    const blogTitles = posts.map((post) => post.title.rendered);
    const blogExcerpt = posts.map((post) => post.excerpt.rendered);

    blogPreviewTitles.forEach((t, i) => {
      const title = t;
      if (!blogTitles[i]) return;
      title.innerHTML = blogTitles[i];
    });

    blogPreviewExcerpts.forEach((e, i) => {
      const excerpt = e;
      if (!blogExcerpt[i]) return;
      const index = blogExcerpt[i].indexOf('</p>');
      const html = `${blogExcerpt[i].slice(0, index)}</p>`;
      excerpt.innerHTML = html;
    });

    // get images for article preview if available
    Promise.all(
      featuredMedia.map((media) => fetch(`https://wp.infinityspine.com/wp-json/wp/v2/media/${media}`)
        .then(handleErrors)
        .then((response) => response.json())
        .then((data) => {
          if (data.media_details) return false;
          return data.media_details.sizes.medium;
        })),
    ).then((arr) => {
      blogPreviewImages.forEach((img, i) => {
        if (!arr[i]) return undefined;
        return img.setAttribute('src', arr[i].source_url);
      });
    }).catch((err) => {
      console.error(err); // eslint-disable-line
    });
  });

// treatments read-more buttons
treatmentBtns.forEach((btn, i) => {
  function treatmentBtnsClickHandler() {
    window.history.pushState(null, null, treatmentRoutes[i]);
    // TODO: look into weather or not this is needed
    // or maybe there should be one function that handles
    // routes for click events window.load.event and event.urlhaschnaged...
    onRouterEventHandler();
  }
  btn.addEventListener('click', treatmentBtnsClickHandler);
});

articlePreviewBtns.forEach((btn, i) => {
  function onArticlePreviewBtnHandler(e) {
    let articleNum = null;
    if (!storageAvailable('localStorage')) {
      // TODO: get from window
    } else {
      articleNum = JSON.parse(localStorage.posts).length - i;
    }
    window.history.pushState(null, null, `#articles?article=${articleNum}`);
    /**
     * onRouterEventHandler()
     * @param [{object}, number] - event object, article uri param value '?article=1'
     */
    // Why pass the click event?
    // const articleNum = i + 1;
    onRouterEventHandler(e, articleNum);
  }
  btn.addEventListener('click', onArticlePreviewBtnHandler);
});

// testimonials more button
function testimonialsBtnClickHandler() {
  window.history.pushState(null, null, '#more-testimonials');
  onRouterEventHandler();
}
testimonialsBtn.addEventListener('click', testimonialsBtnClickHandler);

/**
 * matchMedia - this function allows for execution of JavaScript
 * on a screen size bases...
 */
const splash01 = document.querySelector('#splash-01');
function matchMedia() {
  if (window.matchMedia('(min-width: 1920px)').matches) {
    // console.log('home.js - desk1920');
    // initMainNavButtons();
    splash01.setAttribute('src', 'img/splash-01.png');
  }

  if (window.matchMedia('(max-width: 1919px) and (min-width: 1600px)').matches) {
    // console.log('home.js - desk1600');
    // initMainNavButtons();
    splash01.setAttribute('src', 'img/splash-01.png');
  }

  if (window.matchMedia('(max-width: 1599px) and (min-width: 1440px)').matches) {
    // console.log('home.js - desk1440');
    // initMainNavButtons();
    splash01.setAttribute('src', 'img/splash-01.png');
  }

  if (window.matchMedia('(max-width: 1439px) and (min-width: 1280px)').matches) {
    // console.log('home.js - desk1280');
    // initMainNavButtons();
    splash01.setAttribute('src', 'img/splash-01.png');
  }

  if (window.matchMedia('(max-width: 1279px) and (min-width: 1024px)').matches) {
    // console.log('home.js - desk1024');
    // initMainNavButtons();
    splash01.setAttribute('src', 'img/splash-01.png');
  }

  if (window.matchMedia('(max-width: 1023px) and (min-width: 864px)').matches) {
    // console.log('home.js - tab864');
    // initMainNavButtons();
    splash01.setAttribute('src', 'img/splash-01.png');
  }

  if (window.matchMedia('(max-width: 863px) and (min-width: 480px)').matches) {
    // console.log('home.js - pho480');
    // initMobileNavButtons();
    splash01.setAttribute('src', 'img/pho480/splash-01-pho480.png');
  }

  if (window.matchMedia('(max-width: 479px) and (min-width: 0px)').matches) {
    // console.log('home.js - phone');
    // initMobileNavButtons();
    splash01.setAttribute('src', 'img/phone/splash-01-phone.png');
  }
}
matchMedia();

// allows for updates as browser is being resized
window.onresize = () => {
  matchMedia();
};
