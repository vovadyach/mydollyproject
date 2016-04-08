/**
 * Created by vinside on 4/6/16.
 */
;(function($){
    var $form = $(".form-section");

    $form.each(function(){
        var $form = $(this);
        var $filderInputs = $form.find(".form-item");
        var $reset = $form.find(".reset-wrapper");

        /**
         * Click on 'reset' button with a short timeout to hide it.
         */
        $reset.on("click", function () {
            setTimeout(function () {
                $reset.addClass("hide");
            }, 30);
        });

        /**
         * Types some letters or digits in inputs depends on
         * the condition adds class hide when it's empty and remove it
         * when is it has values or checkbox(radio-button) is checked.
         */
        $form.on('change input reset', function () {
            if (checkValues()) {
                $reset.addClass("hide");
            } else {
                $reset.removeClass("hide");
            }
        });

        /**
         * Returns 'true' if it is empty and 'false' if it is not.
         * @returns {boolean}
         */
        function checkValues() {
            var isEmpty = true;
            $filderInputs.each(function(){
                var $this = $(this);
                if ($this.is(':text') || $this.is("textarea")) {
                    if ($this.val() !== "") {
                        isEmpty = false;
                        return true;
                    }
                } else if ($this.is(":radio") || $this.is(":checkbox")) {
                    if ($this.is(":checked")){
                        isEmpty = false;
                        return true;
                    }
                }
            });
            return isEmpty;
        }
    });
})(jQuery);