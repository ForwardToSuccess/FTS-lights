(function($){
$(function() {

$('.fts_lights_slider').lightSlider({
        gallery:true,
        item: 1,
        loop:true,
        thumbItem:4,

        // speed: 400,
        // auto: true,
        // loop: true,
        // slideEndAnimation: true,
        // pause: 2000,
});


$('.fts_lights_gallery').lightGallery({
    thumbnail:true
});

});
})(jQuery);
