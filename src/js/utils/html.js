/**
 * @param [string] - a string of html tags
 * nodeFrag takes a string and returns it as a node element fragment
 */
const nodeFrag = (string) => (
  document.createRange().createContextualFragment(string)
);

export default nodeFrag;
