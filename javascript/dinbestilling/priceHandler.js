/**
 * Created by vinside on 4/8/16.
 */

;(function($){
    var $container = $(".order-din");

    $container.each(function(){
        var $this = $(this);
        var $price = $this.find(".price");
        var $itemDown = $price.find(".item-down");
        var $itemUp = $price.find(".item-up");
        var price =  $this.data("price");
        var $quantity = $this(".item-quantity");
        var count = 1;
        console.log(price);

        //$price.html("Hello my friend");
        $itemUp.on("click", function () {
            itemUp(count);
        });

        $itemDown.on("click", function(){
            itemDown(count);
        });

        function itemUp() {
            if (count < 10) {
                count++;
            }
            console.log("count:", count);
        }
        function itemDown() {
            if (count > 1) {
                count--;
            }
            console.log("count:", count);
        }
    });
})(jQuery);
