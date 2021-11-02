var s = document.createElement('script');
s.src = chrome.runtime.getURL('componentDist/espn-fantasy-sports-league-status-bar-component/espn-fantasy-sports-league-status-bar-component.esm.js');
s.type = "module"
s.onload = function() {
  this.remove();
};

(document.head || document.documentElement).appendChild(s);


window.addEventListener ("load", myMain, false);

function myMain(evt) {
  fetch(chrome.runtime.getURL('/index.html')).then(r => r.text()).then(html => {
    const videoTags = document.getElementsByTagName('video');
    // console.log(videoTags[0].parentNode);
    const parentDiv = videoTags[0].closest('div');
    // console.log(videoTags[0].parentNode.getBoundingClientRect());

    var x = parentDiv.getBoundingClientRect().left
    var y = parentDiv.getBoundingClientRect().bottom
    var width = parentDiv.getBoundingClientRect().width
    var statusBarHeight = 20

    var html = `<status-bar-component style="position: relative; left: 0px; top: ${parentDiv.getBoundingClientRect().height - statusBarHeight}px" width="${width}px" height="${statusBarHeight}px"></status-bar-component>`;
    
    
    // var child = document.createElement
    // document.body.insertAdjacentHTML("beforeend", html);
    parentDiv.insertAdjacentHTML("beforeend", html);

    // not using innerHTML as it would break js event listeners of the page
  });
}







/*
const videoTags = document.getElementsByTagName('video');
// console.log(videoTags[0].getBoundingClientRect());

const statusBar = document.createElement('status-bar-component');
statusBar.style.position = 'absolute';
// statusBar.style.objectPosition = `${videoTags[0].getBoundingClientRect().left}px ${videoTags[0].getBoundingClientRect().top}px`
 statusBar.style.objectPosition = `400px 300px`
document.body.appendChild(statusBar);
*/


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


/*
if (videoTags) {
  for( var i = 0; i < videoTags.length; i++ ){
    console.log(videoTags[i]);
  }
}
*/






