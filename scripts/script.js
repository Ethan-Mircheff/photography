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
