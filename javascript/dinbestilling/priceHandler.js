/**
 * Created by vinside on 4/8/16.
 */
;(function($){
    var $container = $(".order-din");
    var $total = $(".total-price-item");
    var $form = $(".form-section");
    var $filder = $form.find(".form-group");
    var $filderInputs = $filder.find("input");

    //Itarates over all possible divs and
    $container.each(function(){
        var $this = $(this);
        var $price = $this.find(".price");
        var price =  $this.data("price");
        var $quantity = $this.find(".item-quantity");
        var $btn = $this.find('.b-g-link');

        var counter = 1;

        $btn.on('click', function (event) {
            $(this).hasClass('item-up') ? counter++ : counter--;

            if ( counter > 10 )  counter = 10;
            else if ( counter < 1 )  counter = 1;

            $quantity.val( counter );
            $price.html( counter * price );

            $total.html( getTotal() );

            event.preventDefault();
        });

        $total.html( getTotal() );
    });

    /**
     * Gets total from each price in a container.
     */
    function getTotal() {
        var sum = 0;
        $container.each(function(){
            sum += $(this).find(".price").text() * 1; //
        });

        return sum;
    }
})(jQuery);


//$btn.on('click', function (event) {
//    $(this).hasClass('item-up') ? counter++ : counter--;
//
//    if ( counter > 10 )  counter = 10;
//    else if ( counter < 1 )  counter = 1;
//
//    $quantity.html( counter );
//    $price.html( counter * price );
//
//    $total.html( getTotal() );
//
//    event.preventDefault();
//});