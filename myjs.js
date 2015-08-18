$( document ).ready(function() {
    var windowHeight = $(window).height()+350;
    var windowWidth = $(window).width();
    
    $("#about").css("top", windowHeight);

    $(window).resize(function () {
    	windowHeight = $(window).height()+350;
    	windowWidth = $(window).width();
    	
    	 $("#about").css("top", windowHeight);
    });
});
