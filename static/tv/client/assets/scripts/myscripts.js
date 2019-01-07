$(document).ready(function(){
    $('.navbar-nav li').click(function() {
        $(this).siblings('li').removeClass('active');
        $(this).addClass('active');
    });
    
            if( $(window).width() >770)
 {
           $('header #demo').css('height',(($(window).width())/2)-80); 
  }

            else
                {
                               $('header #demo').css('height',(($(window).width())/2) ); 

                }    
   $('.rio-promos').slick({
        dots: false,
        infinite: false,
        speed: 1200,
        slidesToShow: 5,
        slidesToScroll: 5,
        autoplay: false,
        autoplaySpeed: 2000,
        arrows: true,
       loop:false,
        responsive: [ 
                {
           breakpoint: 922,
           settings: {
              arrows: true,
              slidesToShow: 3,
              slidesToScroll: 1,
                 speed: 900,
           }
        },
                        {
           breakpoint: 700,
           settings: {
              arrows: true,
              slidesToShow: 2,
              slidesToScroll: 1,
                 speed: 900,
           }
        },
        {
           breakpoint: 600,
           settings: {
              arrows: true,
              slidesToShow: 1,
              slidesToScroll: 1,
                 speed: 900,
           }
        }]
    });
    
    
     $(window).on("scroll", function(){
        if($(window).scrollTop() <= ($(".footer").offset().top)-500)
            {
                 $(".navbar").fadeIn( 700, "linear");
         }
        else
            {
              
              $(".navbar").fadeOut( 700, "linear");
             }
    
 
    
});
    
    
               var mixer = mixitup('#Container');
          $('#Container').mixItUp({
                selectors: {
                    target: '.item'
                }
          });
          var mixer = mixitup('#Container', {
                selectors: {
                    target: '.item'
                }
});
    

    
 });

     
        $(window).on("resize",function(){
            if( $(window).width() >770)
 {
           $('header #demo').css('height',(($(window).width())/2)-80); 
  }

            else
                {
                               $('header #demo').css('height',(($(window).width())/2) ); 

                }
       
//        $('header #demo').css('height', 'l' ); 
//         $('.centered-div').css('left',($(window).width() - $('.centered-div').width())/2); 
        
    });