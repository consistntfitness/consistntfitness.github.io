$(document).ready(function() {
    function instant(object,time){
        $(object).delay(time).animate({opacity: 1},500);
    }
    instant('.logo',200);
    instant('.square-logo', 1000);
    $("#oos-button").click()
});