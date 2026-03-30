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

ready(function () {
  onClick(document.querySelector('.pic'), function () {
    $("#imgBig").attr("src", $(this).prop('src'));
    $("#clickOverlay").fadeIn(100);
    $("#clickOverlayContent").fadeIn(100);
  });
  
  onClick(document.querySelector("#imgBig, #clickOverlay"), function () {
    $("#imgBig").attr("src", "");
    $("#clickOverlay").fadeOut(100);
    $("#clickOverlayContent").fadeOut(100);
  });
});
