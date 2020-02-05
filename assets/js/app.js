$(function(){

    $(document).ready(function() {

      var didScroll;
      var lastScrollTop = 0;
      var delta = 5;
      var navbarHeight = $('header').outerHeight();

      $(window).scroll(function(event){
        didScroll = true;
      });

      setInterval(function() {
          if (didScroll) {
              hasScrolled();
              didScroll = false;
          }
      }, 250);

      function hasScrolled() {
          var st = $(this).scrollTop();
          
          // Si el ancho del viewport es menor a 768px
          if (st > 768) {
            if(Math.abs(lastScrollTop - st) <= delta)
                return;
              
              // Si se hace scroll -> Afecta al Header
              if (st > lastScrollTop && st > navbarHeight){
                  // Si el menu está abierto
                  if ($('.header-menu').hasClass('expand')){
                    // No hagas nada
                  } else {
                    // Sube el header
                    $('header').removeClass('fadeInDown inDown');
                    $('header').addClass('outUp');
                  }
                } else {
                  // Baja el Headr
                  $('header').addClass('fixed-header');
                  $('header').addClass('inDown');
                  $('header').removeClass('outUp');
                if(st + $(window).height() < $(document).height()) {
                }
            }

          } else {
            // Se remueven las clases
            $('header').removeClass('fixed-header outUp inDown');
          }
          
          lastScrollTop = st;
      }

      $('.hamburger').click(function(){
        $(this).toggleClass('is-active');
        $('.header-menu').toggleClass('expand');
      });

      $('.toggle-cat').click(function(){
        $(this).toggleClass('open');
        $('.categorias-wrapper').toggleClass('open-cat');
      });

      $('.sucursales .regiones .item').click(function(){
        $(this).children('.toggle').toggleClass('open');
        $(this).toggleClass('expand');
      });

      // $('#radio-persona').on('change', function(){
      //   if(this.checked) {
      //     $('.if-persona').addClass('hide');
      //     $('.if-empresa').removeClass('hide');
      //   } else {
      //     $('.if-persona').removeClass('hide');
      //     $('.if-empresa').addClass('hide');
      //   }
      // });

      $('.radio-select').on( 'change', function() {
        if ( $('#radio-persona').is(':checked') ) {
          $('.if-empresa').removeClass('hide');
          $('.if-persona').addClass('hide');
        }
        if ( $('#radio-empresa').is(':checked') ) {
          $('.if-empresa').addClass('hide');
          $('.if-persona').removeClass('hide');
        }
      } )

      
      
    });
  
  });