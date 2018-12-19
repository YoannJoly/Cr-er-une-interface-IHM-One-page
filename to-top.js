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
     
$(document).ready(function(){
    
    $('a').on('click', function(evt){           
        evt.preventDefault();            
    var target = $(this).attr('href');           
    $('html, body')           
        .stop()           
        .animate({scrollTop: $(target).offset().top}, 1000 );
    });
});