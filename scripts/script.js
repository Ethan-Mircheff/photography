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
  el.style.filter = '';

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
  el.style.filter = '';

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
  document.querySelectorAll(".pic").forEach(function (element) {
    onClick(element, function () {
      document.querySelector("#imgBig").setAttribute("src", this.src);
      fadeIn(document.querySelector("#clickOverlay"), 100);
      fadeIn(document.querySelector("#clickOverlayContent"), 100);
    });
  });
  onClick(document.querySelector("#imgBig"), function () {
    document.querySelector("#imgBig").setAttribute("src", "");
    fadeOut(document.querySelector("#clickOverlay"), 100);
    fadeOut(document.querySelector("#clickOverlayContent"), 100);
  });
  onClick(document.querySelector("#clickOverlay"), function () {
    document.querySelector("#imgBig").setAttribute("src", "");
    fadeOut(document.querySelector("#clickOverlay"), 100);
    fadeOut(document.querySelector("#clickOverlayContent"), 100);
  });
});
