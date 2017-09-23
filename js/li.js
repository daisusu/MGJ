


var nav_length = parseFloat($('.goods-nav a').css('width'));
  $('.pic-description').click(function(){    
    var scroll_h = scroll_des - nav_h*2 ;  
    $('html,body').scrollTop(scroll_h);
    $('.line').css('left','0')
  })
  $('.product-parameters').click(function(){    
    var scroll_h = scroll_good - nav_h*2 ;  
    $('html,body').scrollTop(scroll_h);
    $('.line').css('left',nav_length)
  })
  $('.hot-sales').click(function(){    
    var scroll_h = scroll_rec - nav_h*2 ;  
    $('html,body').scrollTop(scroll_h);
    $('.line').css('left',nav_length*2)
  })