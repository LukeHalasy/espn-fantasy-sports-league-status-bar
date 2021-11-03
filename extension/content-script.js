// Load in the stencil component code into the head
var s = document.createElement('script');
s.src = chrome.runtime.getURL('componentDist/espn-fantasy-sports-league-status-bar-component/espn-fantasy-sports-league-status-bar-component.esm.js');
s.type = "module"
s.onload = function() {
  this.remove();
};

(document.head || document.documentElement).appendChild(s);

// utility function to wrap an element into a div
var wrap = function (toWrap) {
    var height = toWrap.getBoundingClientRect().height;
    var wrapper = document.createElement('div');
    /// wrapper.style.height = `${height}px`;

    // wrapper.style.position = "relative";
    wrapper.style.overflow = 'auto';
    toWrap.parentNode.appendChild(wrapper);
    wrapper.appendChild(toWrap);
    return wrapper;
};

function test() {
  console.log("CALLED");
  const video = document.getElementsByTagName('video')[0];
  const parentDiv = video.closest('div');
  parentDiv.style.paddingBottom = '50px';
}

function createStatusBar() {
    const video = document.getElementsByTagName('video')[0];
    ["fullscreenchange", "webkitfullscreenchange", "mozfullscreenchange", "msfullscreenchange"].forEach(
        eventType => document.addEventListener(eventType, test, false)
    );

    // create parentDiv that wraps around the video
    const parentDiv = wrap(video);

    var x = parentDiv.getBoundingClientRect().left;
    var width = parentDiv.getBoundingClientRect().width;
    var statusBarHeight = 20;

    var html = `<status-bar-component style="position: absolute; width: 100%; left: 0px; bottom: 0px; z-index: 289" height="${statusBarHeight}px"></status-bar-component>`;
    
    video.insertAdjacentHTML("afterend", html);
    /*
    video.addEventListener('click', function() {
      console.log("YO");
      console.log(parentDiv);
      parentDiv.webkitRequestFullscreen();
      videoTags[0].style.paddingBottom = "50px";

      const statusBarComponent = document.getElementsByTagName('status-bar-component')[0];
      statusBarComponent.style.zIndex = 21;
      // openFullscreen(parentDiv);
    }, false)
    */
    // not using innerHTML as it would break js event listeners of the page
}

function resizeStatusBar() {
  console.log("Resize called");
    const video = document.getElementsByTagName('video')[0];
    const parentDiv = video.closest('div');

    var x = parentDiv.getBoundingClientRect().left
    var y = parentDiv.getBoundingClientRect().bottom
    console.log('video');
    console.log(video);
    var width = video.getBoundingClientRect().width
    console.log('width', width);
    var statusBarHeight = 20

    const statusBarComponent = document.getElementsByTagName('status-bar-component')[0];

    statusBarComponent.style.left = '0px';
    statusBarComponent.style.top = `${video.getBoundingClientRect().height - statusBarHeight}px`;
    // statusBarComponent.width = `${width}px`;
}

function videoLoaded() {
  createStatusBar();     
  window.addEventListener("resize", resizeStatusBar);
  
}


// be sure to wait until a video has a loaded on the page to do anything
if (document.getElementsByTagName('video')[0] != undefined) {
  videoLoaded();
} else {
  var observer = new MutationObserver(function(mutations) {
    if (document.getElementsByTagName('video')[0] != undefined) {
      videoLoaded();
      observer.disconnect()
    }
  });

  observer.observe(document, {attributes: false, childList: true, characterData: false, subtree:true});
}







function openFullscreen(div) {
  console.log("hitting")
  var elem = div
  console.log(elem)
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.mozRequestFullScreen) { /* Firefox */
    elem.mozRequestFullScreen();
  } else if (elem.webkitRequestFullscreen) { /* Chrome, Safari & Opera */
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) { /* IE/Edge */
    elem.msRequestFullscreen();
  }
}

function closeFullscreen() {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.webkitExitFullscreen) { /* Safari */
    document.webkitExitFullscreen();
  } else if (document.msExitFullscreen) { /* IE11 */
    document.msExitFullscreen();
  }
}

function onFullScreen(e) {
  var isFullscreenNow = document.webkitFullscreenElement !== null
  if (isFullscreenNow) {
    closeFullscreen();    
    
    const videoTags = document.getElementsByTagName('video');
    // console.log(videoTags[0].parentNode);
    const parentDiv = videoTags[0].closest('div');
    openFullscreen(parentDiv);
  }
  // document.fullscreenElement will point to the element that
  // is in fullscreen mode if there is one. If there isn't one,
  // the value of the property is null.
  /*
  console.log('DISPLAY FULL SCREEN');

  const statusBarComponent = document.getElementsByTagName('status-bar-component')[0];
  console.log(statusBarComponent);
  statusBarComponent.style.left = '0px';
  statusBarComponent.style.top = `${window.screen.height - statusBarComponent.height}px`;
  statusBarComponent.width = window.screen.width;
  */
};




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






