$( document ).ready(function() {
    var windowHeight = $(window).height();
    var windowWidth = $(window).width();
    
    $("#cover").css("min-height", windowHeight);
    });

    $(window).resize(function () {
    	windowHeight = $(window).height();
    	windowWidth = $(window).width();
    	$("#cover").css("min-height", windowHeight);
    });
});
