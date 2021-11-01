var s = document.createElement('script');
s.src = chrome.runtime.getURL('js/espn-fantasy-sports-league-status-bar-component.esm.js');
s.type = "module"
s.onload = function() {
    this.remove();
};
(document.head || document.documentElement).appendChild(s);

/*
var scripts = ['js/status-bar-component.esm.js', 'js/status-bar-component.js'];

for (index = 0; index < scripts.length; ++index) {
  var script = document.createElement('script');
  script.src = chrome.runtime.getURL(scripts[index]);
  if (index == 0) {
    script.type = "module";
  } else {
    script.setAttribute("nomodule", "");
  }


  var done = false;
  script.onload = script.onreadystatechange = function() {
    if (!done && (!this.readyState || this.readyState == "loaded" || this.readyState == "complete")) {
      done = true;
    }
  };

  document.getElementsByTagName("head")[0].appendChild(script);
}
*/

fetch(chrome.runtime.getURL('/index.html')).then(r => r.text()).then(html => {
  console.log("HERE!!");
  document.body.insertAdjacentHTML('beforeend', html);
  // not using innerHTML as it would break js event listeners of the page
});

