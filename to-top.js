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
  
    
