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

      $('.categorias').click(function(){
        $('.toggle-cat').toggleClass('open');
        $('.categorias-wrapper').toggleClass('open-cat');
      });

      $('.sucursales .regiones .item').click(function(){
        $(this).children('.toggle').toggleClass('open');
        $(this).toggleClass('expand');
        // $('.mapa .i').toggleClass('selected');
        if ( $(this).hasClass('i') ) {
          $('.mapa .i').toggleClass('selected');
        }
        if ( $(this).hasClass('ii') ) {
          $('.mapa .ii').toggleClass('selected');
        }
        if ( $(this).hasClass('iii') ) {
          $('.mapa .iii').toggleClass('selected');
        }
        if ( $(this).hasClass('iv') ) {
          $('.mapa .iv').toggleClass('selected');
        }
        if ( $(this).hasClass('v') ) {
          $('.mapa .v').toggleClass('selected');
        }
        if ( $(this).hasClass('vi') ) {
          $('.mapa .vi').toggleClass('selected');
        }
        if ( $(this).hasClass('vii') ) {
          $('.mapa .vii').toggleClass('selected');
        }
        if ( $(this).hasClass('viii') ) {
          $('.mapa .viii').toggleClass('selected');
        }
        if ( $(this).hasClass('ix') ) {
          $('.mapa .ix').toggleClass('selected');
        }
        if ( $(this).hasClass('x') ) {
          $('.mapa .x').toggleClass('selected');
        }
        if ( $(this).hasClass('xi') ) {
          $('.mapa .xi').toggleClass('selected');
        }
        if ( $(this).hasClass('xii') ) {
          $('.mapa .xii').toggleClass('selected');
        }
        if ( $(this).hasClass('rm') ) {
          $('.mapa .rm').toggleClass('selected');
        }
        if ( $(this).hasClass('xiv') ) {
          $('.mapa .xiv').toggleClass('selected');
        }
        if ( $(this).hasClass('xv') ) {
          $('.mapa .xv').toggleClass('selected');
        }
        if ( $(this).hasClass('xvi') ) {
          $('.mapa .xvi').toggleClass('selected');
        }

      });

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