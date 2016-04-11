/**
 * Created by vinside on 4/8/16.
 */

;(function($){
    var $container = $(".order-din");
    var $total = $(".total-price-item");

    $container.each(function(){
        var $this = $(this);
        var $price = $this.find(".price");
        var price =  $this.data("price");
        var $quantity = $this.find(".item-quantity");
        var counter = 1;
        var $btn = $this.find('.b-g-link');

        $btn.on('click', function (event) {
            $(this).hasClass('item-up') ? counter++ : counter--;

            if ( counter > 10 )  counter = 10;
            else if ( counter < 1 )  counter = 1;

            $quantity.html( counter );
            $price.html( counter * price );

            //Calls get total when we increase quantity of items
            getTotal();

            event.preventDefault();
        });
        getTotal();

    });

    /**
     * Gets total from each price in a container.
     */
    function getTotal() {
        var sum = 0;
        $container.each(function(){
            sum += $(this).find(".price").text() * 1;
        });

        $total.html(sum);
    }
})(jQuery);




/*
 /!**
 * Created by vinside on 4/8/16.
 *!/

 ;(function($){
 var $container = $(".order-din");

 $container.each(function(){
 var $this = $(this);
 var $price = $this.find(".price");
 var $itemDown = $this.find(".item-down");
 var $itemUp = $this.find(".item-up");
 var price =  $this.data("price");
 var $quantity = $(".item-quantity");
 var counter = 1;
 console.log(price);

 //$price.html("Hello my friend");
 $itemUp.on("click", function () {
 itemUp(counter);
 });

 $itemDown.on("click", function(){
 itemDown(counter);
 });

 function itemUp() {
 if (counter < 10) {
 counter++;
 $quantity.html(counter);
 $price.html(price * counter);
 }
 //console.log("count:", counter);
 }
 function itemDown() {
 if (counter > 1) {
 counter--;
 $quantity.html(counter);
 $price.html(price * counter);
 }
 //console.log("count:", counter);
 }
 });
 })(jQuery);
 */