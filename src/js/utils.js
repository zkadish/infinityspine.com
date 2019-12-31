export const injectScripts = (scripts, parentNode) => {
  for (let i = 0; i < scripts.length; i += 1) {
    if (scripts[i].innerHTML) {
      parentNode.appendChild(scripts[i]);
    }
  }
};

const filterScriptTags = (frag, callback) => {
  const scriptTags = frag.querySelectorAll('script');
  const fragScriptTags = [];
  const jsScriptTags = [];

  for (let i = 0; i < scriptTags.length; i += 1) {
    if (!scriptTags[i].innerHTML) {
      fragScriptTags.push(scriptTags[i]);
    }
    if (scriptTags[i].innerHTML) {
      jsScriptTags.push(scriptTags[i]);
      // mutate the original nodeList
      scriptTags[i].parentNode.removeChild(scriptTags[i]);
    }
  }

  if (fragScriptTags.length > 0) {
    fragScriptTags[fragScriptTags.length - 1].onload = () => {
      callback(jsScriptTags, 'scripts have loaded');
      fragScriptTags[fragScriptTags.length - 1].onload = null;
    };
    return;
  }

  // this shouldn't run unless there are no script
  // tags being inserted withe the page content...
  callback(jsScriptTags);
};

export default filterScriptTags;
