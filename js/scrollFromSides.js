 $(document).ready(function () {
     $(window).on('scroll', function () {

         var elmt = $('.from-left, .from-right');
         var topImg = $('.from-left, .from-right').offset().top;
         var scroll = $(window).scrollTop();

         $(elmt).each(function () {

             var topImg = $(this).offset().top - 400;

             if (topImg < scroll) {
                 $(this).css("transform", "translate(0,0)");
                 $(this).css("opacity", "1");
             };
         });
     });
 });