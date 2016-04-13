/**
 * Created by vinside on 4/13/16.
 */

;(function($) {
    /**
     * Adds animation to menu in a responsive
     */
    $(".header-toggle-btn, .nav-overlay").on("click", function () {
        $("body ").toggleClass("menu-open");
    });
})(jQuery);