
import { routes, onRouterEventHandler } from './router';

const treatmentRoutes = routes.slice(0, 4);
const treatmentBtns = document.querySelectorAll('.treatments__btn');
const testimonialsBtn = document.querySelector('.testimonials__btn button');
const blogPreviewBtns = document.querySelectorAll('.articles-preview__btn');
const blogPreviewImages = document.querySelectorAll('.articles-preview-image img');
const blogPreviewTitles = document.querySelectorAll('.articles-preview__post h2');
const blogPreviewExcerpts = document.querySelectorAll('.articles-preview__excerpt');
const splashContentLeft = document.querySelector('.splash__content--left');

// get splash page content
fetch('http://wp.infinityspine.com/wp-json/wp/v2/pages/2509')
  .then((response) => response.json())
  .then((res) => {
    // console.log(res.content.rendered);
    // debugger;
    splashContentLeft.innerHTML = res.content.rendered;
  })
  .then(() => {
    splashContentLeft.classList.add('fade-in');
  })
  .catch((err) => {
    // console.log(err);
    // debugger;
  });

fetch('http://wp.infinityspine.com/wp-json/wp/v2/posts?per_page=3')
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

    Promise.all(
      featuredMedia.map((media) => fetch(`http://wp.infinityspine.com/wp-json/wp/v2/media/${media}`)
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
      console.log(err); // eslint-disable-line
      // blogPreviewImages.forEach((img) => {
      //   img.setAttribute('src', 'img/article-stand-in.png');
      // });
    });
  });

// treatments read-more buttons
treatmentBtns.forEach((btn, i) => {
  function treatmentBtnsClickHandler() {
    window.history.pushState(null, null, treatmentRoutes[i]);
    onRouterEventHandler();
  }
  btn.addEventListener('click', treatmentBtnsClickHandler);
});

blogPreviewBtns.forEach((btn, i) => {
  function blogPreviewBtnsClickHandler(e) {
    window.history.pushState(null, null, '#dr-thoma-articles');
    /**
     * onRouterEventHandler()
     * @param [{object}, number] - event object, article uri param value '?article=1'
     */
    const articleNum = i + 1;
    onRouterEventHandler(e, articleNum);
  }
  btn.addEventListener('click', blogPreviewBtnsClickHandler);
});

// testimonials more button
function testimonialsBtnClickHandler() {
  window.history.pushState(null, null, '#more-testimonials');
  onRouterEventHandler();
}
testimonialsBtn.addEventListener('click', testimonialsBtnClickHandler);

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

window.onresize = () => {
  matchMedia();
};
