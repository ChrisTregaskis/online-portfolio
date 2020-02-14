$( document ).ready(function() {

    $( "#close-menu" ).hide();
    $( ".menu-container" ).hide();
    $( "#open-menu" ).click(function() {
        $( ".menu-container" ).slideToggle( "slow", function() {
            $( "#open-menu" ).hide();
            $( "#close-menu" ).show();
        });
    });

    $( "#close-menu" ).click(function() {
        $( ".menu-container" ).slideToggle( "slow", function() {
            $( "#close-menu" ).hide();
            $( "#open-menu" ).show();
        });
    });

});