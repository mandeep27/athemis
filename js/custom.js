// Preloader 
jQuery(function ($) {
    //Preloader
    var preloader = $('.preloader');
    $(window).load(function () {
        preloader.remove();
    });
});
// Wow 
wow = new WOW({
    boxClass: 'wow', // default
    animateClass: 'animated', // default
    offset: 0, // default
    mobile: false, // default
    live: true // default
})
wow.init();
// Bootstrap Slider 
$('.carousel').carousel({
    interval: 20000
});
/**** Select Box ****/
jQuery('.banner_content form select').change(function () {
    if (jQuery(this).children('option:first-child').is(':selected')) {
        jQuery(this).addClass('placeholder');
    }
    else {
        jQuery(this).removeClass('placeholder');
    }
});
/**** Toggle Menu ****/
jQuery(document).ready(function () {
    jQuery('#toggle').on('click', function () {
        jQuery("nav").toggleClass('open');
        jQuery("body").toggleClass("full_bg");
    });
});
/**** Header Sticky ****/

jQuery(document).ready(function(){
    var scroll = jQuery(window).scrollTop();
    if (scroll >= 70) {
        jQuery("body").addClass("fixed-header-on");
    }
    else {
        jQuery("body").removeClass("fixed-header-on");
    } 
});
var width = $(window).width(); {
    jQuery(window).on('scroll', function () {
        var scroll = jQuery(window).scrollTop();
        if (scroll >= 70) {
            jQuery("body").addClass("fixed-header-on");
        }
        else {
            jQuery("body").removeClass("fixed-header-on");
        }
    });
}
/**** owl carousel ****/
jQuery(document).ready(function () {
    var owl = jQuery("#owl-demo");
    owl.owlCarousel({
        itemsCustom: [
                [767, 2]
                , [992, 4]
                , [1200, 4]
                , [1500, 4]]
        , navigation: true
        , slideSpeed: 1000
        , scrollPerPage: true
    });
});