$(document).ready(function () {
    $(".imgSmall").click(function () {
        $("#imgBig").attr("src", $(this).prop('src'));
        $("#hoverOverlay").show();
        $("#hoverOverlayContent").show();
    });

    $("#imgBig, #hoverOverlay").click(function () {
        $("#imgBig").attr("src", "");
        $("#hoverOverlay").hide();
        $("#hoverOverlayContent").hide();
    });
});
