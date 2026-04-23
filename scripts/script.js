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

ready(function () {
  document.querySelectorAll(".pic").forEach(function (element) {
    onClick(element, function () {
      document.querySelector("#imgBig").setAttribute("src", this.src);
      fadeInAll(".clickOverlay", 100);
      fadeInAll(".clickOverlayContent", 100);
    });
  });

  onClick(document.querySelector("#imgBig"), function () {
    document.querySelector("#imgBig").setAttribute("src", "");
    fadeOutAll(".clickOverlay", 100);
    fadeOutAll(".clickOverlayContent", 100);
  });

  document.querySelectorAll(".clickOverlay").forEach(function (el) {
    onClick(el, function () {
      document.querySelector("#imgBig").setAttribute("src", "");
      fadeOutAll(".clickOverlay", 100);
      fadeOutAll(".clickOverlayContent", 100);
    });
  });
});
