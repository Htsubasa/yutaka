$(function(){
    $('.btn-gnavi').on('click',function(){
      var rightVal = 0;
      if($(this).hasClass('hb-open')){
        rightVal = 0;
        $(this).removeClass('hb-open');
      }else{
        $(this).addClass('hb-open');
      }
    });
});


(function($) {
    $(function () {
      $('.btn-gnavi').on('click', function() {
        $('body').toggleClass('open');
      });
    });
})(jQuery);

$(window).on('scroll', function (){
    var elem = $('.border');
    elem.each(function () {
      var elemOffset = $(this).offset().top;
      var scrollPos = $(window).scrollTop();
      var wh = $(window).height();
      if(scrollPos > elemOffset - wh + 100){
        winW = $(window).width();
        spped = 1000;
        $('.border').animate({
            height: '250px'
        }, spped);          }
    });
  
  });


$(window).on('scroll', function (){
    var elem = $('.menu-border');
    elem.each(function () {
      var elemOffset = $(this).offset().top;
      var scrollPos = $(window).scrollTop();
      var wh = $(window).height();
      if(scrollPos > elemOffset - wh + 100){
        winW = $(window).width();
        spped = 1000;
        $('.menu-border').animate({
            height: '650px'
        }, spped);          }
    });
  
  });

 
    $(window).on('scroll', function (){
        var elem = $('.news-border');
        elem.each(function () {
          var elemOffset = $(this).offset().top;
          var scrollPos = $(window).scrollTop();
          var wh = $(window).height();
          if(scrollPos > elemOffset - wh + 100){
            winW = $(window).width();
            spped = 1000;
            $('.news-border').animate({
                height: '450px'
            }, spped);          }
        });
      
      });


$(document).ready(function () {
        hsize = $(window).height();
        $(".mainvisual-inner").css("height", hsize + "px");
      });
      $(window).resize(function () {
        hsize = $(window).height();
        $(".mainvisual-inner").css("height", hsize + "px");
    });
/*mainvisual height adjustmment*/ 










$(window).scroll(function (){
    $('.en-title,.menu-title,.news-title').each(function(){
        var elemPos = $(this).offset().top,
            scroll = $(window).scrollTop(),
            windowHeight = $(window).height();
          if (scroll > elemPos - windowHeight + 100){
              $(this).addClass('active');
            }
        });
});


$(window).scroll(function (){
    $('.intro-content,.menu-contain,.news-contain').each(function(){
        var elemPos = $(this).offset().top,
            scroll = $(window).scrollTop(),
            windowHeight = $(window).height();
          if (scroll > elemPos - windowHeight + 200){
              $(this).addClass('active');
            }
        });
});

$(window).scroll(function (){
    $('.menu-contain,.news-contain').each(function(){
        var elemPos = $(this).offset().top,
            scroll = $(window).scrollTop(),
            windowHeight = $(window).height();
          if (scroll > elemPos - windowHeight + 150){
              $(this).addClass('active');
            }
        });
});



$(window).scroll(function (){
    $('.button').each(function(){
        var elemPos = $(this).offset().top,
            scroll = $(window).scrollTop(),
            windowHeight = $(window).height();
          if (scroll > elemPos - windowHeight + -40){
              $(this).addClass('active');
            }
        });
});
