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




$(function() {
    $(window).scroll(function () {
    if ($(this).scrollTop() > 400) {
    winW = $(window).height();
    spped = 2000}
    $('.border').animate({
        height: '250px'
    }, spped);
    
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
        spped = 2000;
        $('.menu-border').animate({
            height: '600px'
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
            spped = 2000;
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




      $(function () {
        // bodyにdivを追加
        $('.mainvisual-inner').append('<div id="curtain">');
    
        // 追加したdivを塗りつぶしてから透明化アニメーション
        $('#curtain').css({
            position: 'absolute',
            left: 0, top: 0,
            width: '100%', height: '100%',
            backgroundColor: 'black',
            opacity: 100
        }).animate({
            opacity: 0
        }, 3000, function () {
            // アニメーション終了後に自身を消す
            $(this).remove();
        });
    
    });
