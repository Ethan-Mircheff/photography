$(document).ready(function () {
    $(".pic").click(function () {
        $("#imgBig").attr("src", $(this).prop('src'));
        $("#clickOverlay").show();
        $("#clickOverlayContent").show();
    });

    $("#imgBig, #clickOverlay").click(function () {
        $("#imgBig").attr("src", "");
        $("#clickOverlay").hide();
        $("#clickOverlayContent").hide();
    });
});
