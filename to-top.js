jQuery(function(){
    $(function () {
    $(window).scroll(function () { 
    if ($(this).scrollTop() > 140 ) {  
    $('#scrollUp').css('right','10px'); 
    } else { 
    $('#scrollUp').removeAttr( 'style' ); 
    }
    });
    });
    });
  
$(function() {
    
    $("a[href*='#']:not([href='#'])").click(function() {
        if (
            location.hostname == this.hostname
            && this.pathname.replace(/^\//,"") == location.pathname.replace(/^\//,"")
        ) {
            var anchor = $(this.hash);
            anchor = anchor.length ? anchor : $("[name=" + this.hash.slice(1) +"]");
            if ( anchor.length ) {
                $("html, body").animate( { scrollTop: anchor.offset().top }, 1500);
            }
        }
    });
});  