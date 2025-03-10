$(document).ready(function () {
    $(".imgSmall").click(function () {
        $("#imgBig").attr("src", $(this).prop('src'));
        $("#overlay").show();
        $("#overlayContent").show();
    });

    $("#imgBig, #overlay").click(function () {
        $("#imgBig").attr("src", "");
        $("#overlay").hide();
        $("#overlayContent").hide();
    });
});
