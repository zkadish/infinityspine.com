export const injectScripts = (scripts, parentNode) => {
  // setTimeout(() => {
  for (let i = 0; i < scripts.length; i += 1) {
    if (scripts[i].innerHTML) {
      parentNode.appendChild(scripts[i]);
    }
  }
  // }, 1000);
};

const filterScriptTags = (frag, callback) => {
  const scriptTags = frag.querySelectorAll('script');
  const fragScriptTags = [];
  const jsScriptTags = [];
  // mutate the original nodeList
  // remove script tags with inner JS
  for (let i = 0; i < scriptTags.length; i += 1) {
    if (!scriptTags[i].innerHTML) {
      fragScriptTags.push(scriptTags[i]);
    }
    if (scriptTags[i].innerHTML) {
      jsScriptTags.push(scriptTags[i]);
      scriptTags[i].parentNode.removeChild(scriptTags[i]);
    }
  }

  if (fragScriptTags.length > 0) {
    fragScriptTags[fragScriptTags.length - 1].onload = () => {
      callback(jsScriptTags, 'scripts have loaded');
    };
    return;
  }

  callback(jsScriptTags);
};

export default filterScriptTags;
