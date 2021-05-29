$(function () {

   $('.page__slider-box').slick({
      prevArrow: '<button class="slick-btn slick-prev"><img src="images/icon/arrow-prev.png" alt="prev"></button>',
      nextArrow: '<button class="slick-btn slick-next"><img src="images/icon/arrow-next.png" alt="next"></button>',
      slidesToShow: 3,
      slidesToScroll: 1,
      responsive: [
         {
            breakpoint: 992,
            settings: {
               slidesToShow: 2,
            }
         }         
      ]
    
   
   });



});