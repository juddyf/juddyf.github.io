$( document ).ready(function() {
    var windowHeight = $(window).height()+50;
    var coverHeight = $(window).height() - 50;
    var windowWidth = $(window).width();
    var leftWidth = ($(window).width() - 905)/2;
    var windowMid = windowHeight / 2 - 100;
    
    $("face").css("margin-top", windowMid);
    
    $("#about").css("margin-top", windowHeight);
    $("#cover").css("max-height", coverHeight);
    
    if (windowWidth > 905) {
        $("#logo").css("left", leftWidth);
    } else {
        $("#logo").css("left", 0);
        $("#logo").css("width", windowWidth);
    }

    $(window).resize(function () {
    	windowHeight = $(window).height()+50;
    	coverHeight = $(window).height() - 50;
    	windowWidth = $(window).width();
    	leftWidth = ($(window).width() - 905)/2;
    	
    	$("#cover").css("max-height", coverHeight);
    	$("#about").css("margin-top", windowHeight);
    	
    	if (windowWidth > 905) {
            $("#logo").css("left", leftWidth);
        } else {
            $("#logo").css("width", windowWidth);
            $("#logo").css("left", 0);
        }
    });
});
