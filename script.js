$(function () {
    var hiddenFormBottom = $("#signUpForm").css("bottom");
    var hiddenFormRight = $("#signUpForm").css("right");

    $(".contact-button").click(function () {
        var screenWidth = $(window).width();
        var formPosDesktop = $("#signUpForm").css("bottom");
        var formPosMobile = $("#signUpForm").css("right");

        if (screenWidth >= 768 && formPosDesktop !== "0px") {
            TweenMax.to("#signUpForm", 0.7, {
                bottom: 0,
                ease: Expo.easeOut
            });
            TweenMax.to(".form-arrow", 1, {
                rotationZ: 180,
                transformOrigin: "center",
                ease: Expo.easeOut
            });
        } else if (screenWidth >= 768 && formPosDesktop == "0px") {
            TweenMax.to("#signUpForm", 0.3, {
                bottom: hiddenFormBottom,
                ease: Bounce.easeOut
            });
            TweenMax.to(".form-arrow", 0.7, {
                rotationZ: 0,
                transformOrigin: "center",
                ease: Expo.easeOut
            });
        }

        if (screenWidth < 768 && formPosMobile !== "0px") {
            TweenMax.to("#signUpForm", 0.7, {
                right: 0,
                ease: Expo.easeOut
            });
            TweenMax.to(".form-arrow", 1, {
                rotationZ: 180,
                transformOrigin: "center",
                ease: Expo.easeOut
            });
        } else if (screenWidth < 768 && formPosMobile == "0px") {
            TweenMax.to("#signUpForm", 0.3, {
                right: -277,
                ease: Bounce.easeOut
            });
            TweenMax.to(".form-arrow", 0.7, {
                rotationZ: 0,
                transformOrigin: "center",
                ease: Expo.easeOut
            });
        }
    });
});

$(window).resize(function () {
    $("#signUpForm, .form-arrow").attr("style", "");
});