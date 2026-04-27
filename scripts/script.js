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

function fadeIn(el, speed = 200) {
  el.style.opacity = 0;
  el.style.display = "block";
  let last = performance.now();
  function tick(now) {
    const delta = (now - last) / speed;
    let opacity = parseFloat(el.style.opacity) + delta;
    if (opacity >= 1) {
      el.style.opacity = 1;
    } else {
      el.style.opacity = opacity;
      last = now;
      requestAnimationFrame(tick);
    }
  }
  requestAnimationFrame(tick);
}

function fadeOut(el, speed = 200) {
  el.style.opacity = 1;
  let last = performance.now();
  function tick(now) {
    const delta = (now - last) / speed;
    let opacity = parseFloat(el.style.opacity) - delta;
    if (opacity <= 0) {
      el.style.opacity = 0;
      el.style.display = "none";
    } else {
      el.style.opacity = opacity;
      last = now;
      requestAnimationFrame(tick);
    }
  }
  requestAnimationFrame(tick);
}

function fadeInAll(selector, speed) {
  document.querySelectorAll(selector).forEach(el => fadeIn(el, speed));
}

function fadeOutAll(selector, speed) {
  document.querySelectorAll(selector).forEach(el => fadeOut(el, speed));
}

ready(function () {
  function closeOverlay() {
    document.querySelector("#imgBig").setAttribute("src", "");
    fadeOutAll(".clickOverlay", 100);
    fadeOutAll(".clickOverlayContent", 100);
  }
  document.querySelectorAll(".pic").forEach(function (element) {
    onClick(element, function () {
      document.querySelector("#imgBig").setAttribute("src", this.src);
      fadeInAll(".clickOverlay", 100);
      fadeInAll(".clickOverlayContent", 100);
    });
  });
  onClick(document.querySelector("#imgBig"), closeOverlay);
  document.querySelectorAll(".clickOverlay").forEach(function (el) {
    onClick(el, closeOverlay);
  });
  document.addEventListener("keydown", function (event) {
    const overlay = document.querySelector(".clickOverlay");
    if (!overlay || overlay.style.display === "none") return;
    if (event.key === "Escape") {
      closeOverlay();
    }
  });
});
