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
      
      function fadeIn("#clickOverlay", speed = 100) {
        var opacity = 0;
        document.querySelector("#clickOverlay").style.opacity = 0;
        document.querySelector("#clickOverlay").style.filter = '';
        var last = +new Date();
        var tick = function () {
          opacity += (new Date() - last) / speed;
           if (opacity > 1) opacity = 1;
          document.querySelector("#clickOverlay").style.opacity = opacity;
          document.querySelector("#clickOverlay").style.filter = 'alpha(opacity=' + (100 * opacity || 0) + ')';
          last = +new Date();
          if (opacity < 1) {
            (window.requestAnimationFrame && requestAnimationFrame(tick)) ||
              setTimeout(tick, 16);
          }
        };
        tick();
      }
      fadeIn("#clickOverlay");
      
      function fadeIn("#clickOverlayContent", speed = 100) {
        var opacity = 0;
        document.querySelector("#clickOverlayContent").style.opacity = 0;
        document.querySelector("#clickOverlayContent").style.filter = '';
        var last = +new Date();
        var tick = function () {
          opacity += (new Date() - last) / speed;
           if (opacity > 1) opacity = 1;
          document.querySelector("#clickOverlayContent").style.opacity = opacity;
          document.querySelector("#clickOverlayContent").style.filter = 'alpha(opacity=' + (100 * opacity || 0) + ')';
          last = +new Date();
          if (opacity < 1) {
            (window.requestAnimationFrame && requestAnimationFrame(tick)) ||
              setTimeout(tick, 16);
          }
        };
        tick();
      }
      fadeIn("#clickOverlayContent");
    });
  });
  
  onClick(document.querySelector("#imgBig"), function () {
    document.querySelector("#imgBig").setAttribute("src", "");
    $("#clickOverlay").fadeOut(100);
    $("#clickOverlayContent").fadeOut(100);
  });
  onClick(document.querySelector("#clickOverlay"), function () {
    document.querySelector("#imgBig").setAttribute("src", "");
    $("#clickOverlay").fadeOut(100);
    $("#clickOverlayContent").fadeOut(100);
  });
});

