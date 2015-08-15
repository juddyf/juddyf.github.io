$( document ).ready(function() {
    var windowHeight = $(window).height()-50;
    var windowWidth = $(window).width();
    
    $("#cover").css("height", windowHeight);

    $(window).resize(function () {
    	windowHeight = $(window).height()-50;
    	windowWidth = $(window).width();
    	
    	$("#cover").css("height", windowHeight);
    });
});
