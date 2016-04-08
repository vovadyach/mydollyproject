/**
 * Created by vinside on 4/8/16.
 */


;(function ($) {
    var $link = $(".table-body-item-link");
    var $modal = $(".modal-container");
    var $bgClick = $(".bgClick");


    $link.on("click", function(){
       setTimeout( function (){
           $modal.removeClass("modal-hidden");
       }, 100)
    });

    $bgClick.on("click", function () {
       $modal.addClass("modal-hidden");
    });

})(jQuery);
