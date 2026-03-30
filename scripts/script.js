function ready(click) {
  if (document.readyState != 'loading') {
    click();
  } else if (document.addEventListener) {
    document.addEventListener('DOMContentLoaded', click);
  } else {
    document.attachEvent('onreadystatechange', function () {
      if (document.readyState != 'loading') click();
    });
  }
}

var onClick = function (element, handler) {
  if (element.addEventListener) {
    element.addEventListener('click', handler, false);
  } else {
    element.attachEvent('onclick', handler);
  }
};

onClick(el, function () {
  ready(function () {
    $(".pic").click(function () {
        $("#imgBig").attr("src", $(this).prop('src'));
        $("#clickOverlay").fadeIn(100);
        $("#clickOverlayContent").fadeIn(100);
    });
    $("#imgBig, #clickOverlay").click(function () {
        $("#imgBig").attr("src", "");
        $("#clickOverlay").fadeOut(100);
        $("#clickOverlayContent").fadeOut(100);
    });
  });
});
