
function ready(click) {
  if (document.readyState != "loading") {
    click();
  } else if (document.addEventListener) {
    document.addEventListener("DOMContentLoaded", click);
  } else {
    document.attachEvent("onreadystatechange", function () {
      if (document.readyState != "loading") click();
    });
  }
}

var onClick = function (element, handler) {
  if (element.addEventListener) {
    element.addEventListener("click", handler, false);
  } else {
    element.attachEvent("onclick", handler);
  }
};

function fadeIn(el, speed = 400) {
  var opacity = 0;

  el.style.opacity = 0;
  el.style.filter = 'alpha(opacity=0)';

  var last = +new Date();
  var tick = function () {
    opacity += (new Date() - last) / speed;
    if (opacity > 1) opacity = 1;
    el.style.opacity = opacity;
    el.style.filter = 'alpha(opacity=' + (100 * opacity || 0) + ')';

    last = +new Date();

    if (opacity < 1) {
      (window.requestAnimationFrame && requestAnimationFrame(tick)) ||
        setTimeout(tick, 16);
    }
  };

  tick();
}

function fadeOut(el, speed = 400) {
  var opacity = 1;

  el.style.opacity = 1;
  el.style.filter = 'alpha(opacity=100)';

  var last = +new Date();
  var tick = function () {
    opacity -= (new Date() - last) / speed;
    if (opacity < 0) opacity = 0;
    el.style.opacity = opacity;
    el.style.filter = 'alpha(opacity=' + (100 * opacity || 0) + ')';

    last = +new Date();

    if (opacity > 0) {
      (window.requestAnimationFrame && requestAnimationFrame(tick)) ||
        setTimeout(tick, 16);
    }
  };

  tick();
}

ready(function () {
  var imgBig = document.querySelector("#imgBig");
  var clickOverlay = document.querySelector("#clickOverlay");
  var clickOverlayContent = document.querySelector("#clickOverlayContent");

  // Check if required elements exist
  if (!imgBig || !clickOverlay || !clickOverlayContent) {
    console.error("Required elements not found in DOM");
    return;
  }

  document.querySelectorAll(".pic").forEach(function (element) {
    onClick(element, function () {
      imgBig.setAttribute("src", element.getAttribute("src"));
      fadeIn(clickOverlay, 100);
      fadeIn(clickOverlayContent, 100);
    });
  });

  onClick(imgBig, function () {
    imgBig.setAttribute("src", "");
    fadeOut(clickOverlay, 100);
    fadeOut(clickOverlayContent, 100);
  });

  onClick(clickOverlay, function () {
    imgBig.setAttribute("src", "");
    fadeOut(clickOverlay, 100);
    fadeOut(clickOverlayContent, 100);
  });
});
