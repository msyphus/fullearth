var menuMinimized = true;

$("#menuIcon").on("click", function () {
    if (menuMinimized === true) {
        $("#menuIcon").css("margin-left", "110px");
        $("#sideNav").css("width", "100px");
        $(".barMiddle").hide();
        $(".barTop").css({ "transform": "rotate(45deg)", "top": "10px" });
        $(".barBottom").css({ "transform": "rotate(-45deg)", "top": "10px" });
        menuMinimized = false;
    } else {
        $("#sideNav").css("width", "0");
        $("#menuIcon").css("margin-left", "1%");
        $(".barMiddle").show();
        $(".barTop").css({ "transform": "rotate(0deg)", "top": "0" });
        $(".barBottom").css({ "transform": "rotate(0deg)", "top": "14px" });
        menuMinimized = true;
    }
});

$(".contactIcon, .donate").on("mouseover", function (event) {
    var iconHover = event.currentTarget.attributes.value.value;
    console.log(iconHover);
    switch (iconHover) {
        case "linkedin":
            $("#linkedin").css("visibility", "visible");
            setTimeout(popdown, 1000);
            break;
        case "facebook":
            $("#facebook").css("visibility", "visible");
            setTimeout(popdown, 1000);
            break;
        case "youtube":
            $("#youtube").css("visibility", "visible");
            setTimeout(popdown, 1000);
            break;
        case "donate":
            $("#donate").css("visibility", "visible");
            setTimeout(popdown, 1000);
    }

});

function popdown() {
    $(".popup").css("visibility", "hidden");
};
