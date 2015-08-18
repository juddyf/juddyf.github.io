$( document ).ready(function() {
    var windowHeight = $(window).height()+50;
    var coverHeight = $(window).height() - 50;
    var windowWidth = $(window).width();
    
    $("#about").css("margin-top", windowHeight);
    $("#cover").css("max-height", coverHeight);

    $(window).resize(function () {
    	windowHeight = $(window).height()+50;
    	coverHeight = $(window).height() - 50;
    	windowWidth = $(window).width();
    	
    	$("#cover").css("max-height", coverHeight);
    	$("#about").css("margin-top", windowHeight);
    });
});
