$( document ).ready(function() {
    var windowHeight = $(window).height()-50;
    var aboutFromTop = $(window).height() + 350
    var windowWidth = $(window).width();
    
    $("#cover").css("min-height", windowHeight);
 

    $(window).resize(function () {
    	windowHeight = $(window).height()-50;
    	aboutFromTop = $(window).height() + 350
    	windowWidth = $(window).width();
    	
    	$("#cover").css("min-height", windowHeight);

    });
});
