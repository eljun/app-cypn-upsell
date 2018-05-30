$(function(){

    // Initializing the swiper plugin for the slider.
    // Read more here: http://idangero.us/swiper/api/
    
    var mySwiper = new Swiper ('.swiper-container', {
        slidesPerView: 6,
        loop: true,
        pagination: '.swiper-pagination',
        paginationClickable: true,
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        // Responsive breakpoints
        breakpoints: {
         // when window width is <= 320px
         320: {
          slidesPerView: 2,
          spaceBetween: 10
        },
         // when window width is <= 480px
         480: {
          slidesPerView: 2,
          spaceBetween: 20
        },
         // when window width is <= 640px
         640: {
          slidesPerView: 3,
          spaceBetween: 20
        }
      }
    });
    
});