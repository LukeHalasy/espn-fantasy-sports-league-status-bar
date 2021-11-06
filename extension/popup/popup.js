var s = document.createElement('script');
s.src = chrome.runtime.getURL('componentDist/espn-fantasy-sports-league-status-bar-component/espn-fantasy-sports-league-status-bar-component.esm.js');
s.type = "module"
s.onload = function() {
  this.remove();
};

(document.head || document.documentElement).appendChild(s);
