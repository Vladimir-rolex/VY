$(document).ready(function () {

    $('.owl-carousel').owlCarousel({
        items: 1,
        autoWidth: Boolean,
        URLhashListener: true,
        autoplayHoverPause: true,
        startPosition: 'URLHash',
        navSpeed: 1000,
        dragEndSpeed: 700,
        smartSpeed: 1000,
        navContainer: ".paginator",
        navElement: "li",
    });
    // Custom Navigation Events
    $('.paginator .next').click(function () {
        owl.trigger('next.owl.carousel');
    });
    $('.paginator .prev').click(function () {
        owl.trigger('prev.owl.carousel');
    });

    $(".paginator li").click(function () {
        $(".paginator li").removeClass("active");
        $(this).addClass("active");
    });

    $(".popup").magnificPopup({
        type: 'image'
    });
    $(".popup-content").magnificPopup({
        type: "inline",
        midClick: true
    });

    $(".portf-item").each(function (i) {
        $(this).find(".popup-content").attr("href", "#work-" + i);
        $(this).find(".portf-popup").attr("id", "work-" + i);
    });

    $(".section-header").animated("fadeInUp");
    $(".animation-2").animated("fadeInLeft");
    $(".animation-3").animated("fadeInRight");
    $(".animation-1").animated("flipInX", "flipOutX");

    $(".resume-left .resume-item").animated("fadeInLeft");
    $(".resume-right .resume-item").animated("fadeInRight");

    function heightDetect() {
        $(".main-header").css("height", $(window).height());
    };
    heightDetect();
    $(window).resize(function () {
        heightDetect();
    });

    $(".toggle-menu").click(function () {
        $(".sandwich").toggleClass("active");
    });

    $(".top-menu ul a").click(function () {
        $(".top-menu").fadeOut(600);
        $(".sandwich").toggleClass("active");
        $(".head-name").removeClass("h-opacity")
    });

    $(".toggle-menu").click(function () {
        if ($(".top-menu").is(":visible")) {
            $(".head-name").removeClass("h-opacity");
            $(".top-menu").fadeOut(600);
            $(".top-menu li a").removeClass("fadeInUp animated");
        } else {
            $(".head-name").addClass("h-opacity");
            $(".top-menu").fadeIn(600);
            $(".top-menu li a").addClass("fadeInUp animated");
        };
    });
    $("input,select,textarea").not("[type=submit]").jqBootstrapValidation();

});
$(window).load(function () {
    $(".head-name h1").animated("fadeInDown");
    $(".head-name p, .section-header").animated("fadeInUp");

});