$(document).ready(function () {
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
