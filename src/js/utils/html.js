/**
 * @param {string} token
 * There are 2 tokens in the constants file
 * testimonialTags - builds the necessary html for the reviews
 * and testimonials on the home page and testimonials page
 */
export function testimonialTags(token) {
  const scriptToken = document.createElement('script');
  scriptToken.setAttribute('type', 'text/javascript');
  scriptToken.innerHTML = (`
    var review_token = "${token}"; 
    var review_target = 'review-container';
  `);

  const scriptReview = document.createElement('script');
  scriptReview.setAttribute('type', 'text/javascript');
  scriptReview.setAttribute('src', 'https://reviewsonmywebsite.com/js/embed.js?v=7');

  const reviewContainer = document.createElement('div');
  reviewContainer.id = 'review-container';

  return [scriptToken, scriptReview, reviewContainer];
}

/**
 * @param [string] - a string of html tags
 * documentFrag takes a string and returns it as a node element fragment
 */
const documentFrag = (string) => (
  document.createRange().createContextualFragment(string)
);

export default documentFrag;

