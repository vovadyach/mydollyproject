/**
 * Created by vinside on 4/1/16.
 */

;(function($){
    var $form = $("form");
    var $filder = $form.find(".form-group");
    var $required = $filder.filter(".required");
    var $filderInputs = $filder.find("input");
    var $requiredInputs = $required.find("input");

    $form.on("submit", function(event){
       var isValid = true;
        $requiredInputs.each(function (index, element) {
            var $this = $(this);
            if ($this.val().length < 3) {
                $this.closest($required).addClass("invalid").removeClass("success");
                isValid = false;
            } else {
                $this.closest($required).removeClass("invalid").addClass("success");
                isValid = false;
            }
        });
        if(!isValid) {
            event.preventDefault();
        }
    });

    $filderInputs.on("input", function(event){
        var $this = $(this);
        $required.removeClass("invalid").removeClass("success");
    });
})(jQuery);






























