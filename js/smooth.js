(function(){
    //efecto smooth
    $('a.scroll').click(function(e){
        e.preventDefault();
        $('html, body').stop().animate({scrollTop: $($(this).attr('href')).offset().top}, 1000);
});

//scroll
$(document).ready(function(){

    $("html").niceScroll({
        cursorcolor:"#ffffff",
        zindex:1100,
        cursorborderradius:3,
        cursorborder:"1px solid #111111",
        horizrailenabled:false,
        cursorfixedheight:120,
        cursorwidth:"12px",
    });
});
}());