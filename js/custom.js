;$(function() {
	// slick
	// if ($('.slider').length) {
	// 	$('.header-wrapp').addClass('hasSlider');
			$('.slider').slick({
			  dots: false,
			  arrow: true,
			  // nextArrow: '<svg class="slider-svg-ico slider-svg-ico__right svg-inline--fa fa-chevron-right fa-w-10" aria-hidden="true" data-fa-processed="" data-prefix="fas" data-icon="chevron-right" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"></path></svg>',
			  nextArrow: '<i class="slider-ico slider-ico__right fa fa-angle-right" aria-hidden="true"></i>',
			  // prevArrow: '<svg class="slider-svg-ico slider-svg-ico__left svg-inline--fa fa-chevron-left fa-w-10" aria-hidden="true" data-fa-processed="" data-prefix="fas" data-icon="chevron-left" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z"></path></svg>',
			  prevArrow: '<i class="slider-ico slider-ico__left fa fa fa-angle-left" aria-hidden="true"></i>',
			  infinite: true,
			  speed: 500,
			  fade: true,
			  cssEase: 'linear',
			  // autoplay: true,
			  autoplaySpeed: 2000,
			  slidesToScroll: 1,
			  slidesToShow: 1,
			  adaptiveHeight: true,
			  responsive: [
	    {
	      breakpoint: 1133,
	      settings: {
	        slidesToShow: 1,
	        slidesToScroll: 1,
	        arrow: false,
	        dots: true
	      }
	    },
	    {
	      breakpoint: 600,
	      settings: {
	        slidesToShow: 1,
	        slidesToScroll: 1,
	        arrow: false,
	        dots: true
	      }
	    },
	    {
	      breakpoint: 480,
	      settings: {
	        slidesToShow: 1,
	        slidesToScroll: 1,
	        arrow: false,
	        dots: true
	      }
	    }
	    // You can unslick at a given breakpoint now by adding:
	    // settings: "unslick"
	    // instead of a settings object
	  ]
		});
	// }

	// slick slider-a
	$('#slider-a').slick({
	  dots: false,
	  arrow: true,
	  // nextArrow: '<svg class="slider-svg-ico slider-svg-ico__right svg-inline--fa fa-chevron-right fa-w-10" aria-hidden="true" data-fa-processed="" data-prefix="fas" data-icon="chevron-right" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"></path></svg>',
	  nextArrow: '<i class="slider-ico slider-ico__right fa fa-angle-right" aria-hidden="true"></i>',
	  // prevArrow: '<svg class="slider-svg-ico slider-svg-ico__left svg-inline--fa fa-chevron-left fa-w-10" aria-hidden="true" data-fa-processed="" data-prefix="fas" data-icon="chevron-left" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z"></path></svg>',
	  prevArrow: '<i class="slider-ico slider-ico__left fa fa fa-angle-left" aria-hidden="true"></i>',
	  infinite: true,
	  // autoplay: true,
	  // autoplaySpeed: 2000,
	  slidesToScroll: 1,
	  slidesToShow: 4,
	  adaptiveHeight: true,
	  	responsive: [
	    {
	      breakpoint: 1253,
	      settings: {
	        slidesToShow: 3,
	        slidesToScroll: 1,
	        dots: true,
	        arrow: false
	      }
	    },
	    {
	      breakpoint: 768,
	      settings: {
	        slidesToShow: 1,
	        slidesToScroll: 1,
	        dots: true,
	        arrow: false
	      }
	    },
	    {
	      breakpoint: 480,
	      settings: {
	        slidesToShow: 1,
	        slidesToScroll: 1,
	        dots: true,
	        arrow: false
	      }
	    }
	    // You can unslick at a given breakpoint now by adding:
	    // settings: "unslick"
	    // instead of a settings object
	  ]
});

		// slider-feedback
	$('.slider-feedback').slick({
	  dots: true,
	  arrow: false,
	  // nextArrow: '<svg class="slider-svg-ico slider-svg-ico__right svg-inline--fa fa-chevron-right fa-w-10" aria-hidden="true" data-fa-processed="" data-prefix="fas" data-icon="chevron-right" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"></path></svg>',
	  // nextArrow: '<i class="slider-ico slider-ico__right fa fa-angle-right" aria-hidden="true"></i>',
	  // prevArrow: '<svg class="slider-svg-ico slider-svg-ico__left svg-inline--fa fa-chevron-left fa-w-10" aria-hidden="true" data-fa-processed="" data-prefix="fas" data-icon="chevron-left" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z"></path></svg>',
	  // prevArrow: '<i class="slider-ico slider-ico__left fa fa fa-angle-left" aria-hidden="true"></i>',
	  infinite: true,
	  // autoplay: true,
	  // autoplaySpeed: 2000,
	  slidesToScroll: 1,
	  slidesToShow: 3,
	  // adaptiveHeight: true,
	  	responsive: [
	    {
	      breakpoint: 1133,
	      settings: {
	        slidesToShow: 2,
	        slidesToScroll: 1,
	        arrow: false,
	        dots: true
	      }
	    },
	    {
	      breakpoint: 860,
	      settings: {
	        slidesToShow: 1,
	        slidesToScroll: 1,
	        arrow: false,
	        dots: true
	      }
	    },
	    {
	      breakpoint: 480,
	      settings: {
	        slidesToShow: 1,
	        slidesToScroll: 1,
	        arrow: false,
	        dots: true
	      }
	    }
	    // You can unslick at a given breakpoint now by adding:
	    // settings: "unslick"
	    // instead of a settings object
	  ]
});

	// accordion
$('.set > span').on('click', function() {
    if ($(this).hasClass("active")) {
      $(this).removeClass("active");
      $(this)
        .siblings(".content")
        .slideUp(200);
      $(".set > span i")
        .removeClass("fa-minus")
        .addClass("fa-plus");
    } else {
      $(".set > span i")
        .removeClass("fa-minus")
        .addClass("fa-plus");
      $(this)
        .find("i")
        .removeClass("fa-plus")
        .addClass("fa-minus");
      $('.set > span').removeClass('active');
      $(this).addClass("active");
      $('.content').slideUp(200);
      $(this)
        .siblings('.content')
        .slideDown(200);
    }
  });
// $('.box-accordion > .set-box-btn').on('click', function() {
// if ($('.box-accordion > .set').hasClass('set-show')) {
// 	$('.section-ninth')
// 		.removeClass('section-ninth')
// 		.addClass('section-ninth_active');
// }
// });
//scroll
  $('.box-down').on('click', function(){
    $('html, body').animate({
        scrollTop: $("#down").offset().top
    }, 800);
    return false;
  });


//fancy
$('.gallery a').fancybox({ 
  animationEffect : 'fade'
}).attr('data-fancybox', 'group1');


// feedback hide/show
$('.btn-show').on('click', function(event) {
	$('.set').toggleClass('set-show');
});

$('.btn-show').click(function(){
  if (!$(this).data('status')) {
  	$(this).html('Свернуть');
    $(this).data('status', true);
  }
  else {
  	$(this).html('Посмотреть еще 10 вопросов');
    $(this).data('status', false);
  }
});
//Modal
// $('#exampleModal').modal('show');

//Tabs
$(".tab_item").not(":first").hide();
$(".wrapper-tab .tab").click(function() {
	$(".wrapper-tab .tab").removeClass("tab-active").eq($(this).index()).addClass("tab-active");
	$(".tab_item").hide().eq($(this).index()).fadeIn()
}).eq(0).addClass("tab-active");


// right menu
	var menuLink = $('.menu-link');
	var menu = $('menu');
	var close = $('.close-btn');
	var navLink = $('.navigation-list__link');

	menuLink.click(function() {
		event.preventDefault();
		menu.toggleClass('active-menu');
	});
	close.click(function() {
		event.preventDefault();
		menu.toggleClass('active-menu');
	});

	navLink.on('click', function(event) {
		event.preventDefault();
		var target = $(this).attr('href');
		var top = $(target).offset().top;
		$('html,body').animate({scrollTop: top}, 500)
	});

//active menu right

jQuery(window).scroll(function(){
         var $sections = $('section');
	$sections.each(function(i,el){
        var top  = $(el).offset().top-100;
        var bottom = top +$(el).height();
        var scroll = $(window).scrollTop();
        var id = $(el).attr('id');
    	if( scroll > top && scroll < bottom){
            $('a.active').removeClass('active');
			$('a[href="#'+id+'"]').addClass('active');

        }
    })
 });

// mask input phone

  $(".phone").mask("+7(999) 999-9999");
/*========================
valid form
 =======================*/
// $('#form-a').validate ({
//     rules: {
//         name: "required",
//         name: {
//             required: true,
//         },
//         phone: "required",
//         phone: {
//             required: true,
//         },
//         email: "required",
//         email: {
//             required: true,
//             email: true
//         },
//         checkbox: "required",
//         checkbox: {
//             required: true,
//             checkbox: true
//         },
        
//         agree: "required"
//     },
//     messages: {
//         name: {
//             required: "Пожалуйста, введите Ваше имя",
//             minlength: "Не менее 4 символов"
//         },
//         phone: {
//             required: "Заполните поле телефон"
//         },
//         email: {
//             required: "Заполните поле email"
//         },
//         checkbox: {
//             required: "Вы должны согласиться с обработкой персональных данных",
//         },
//         focusCleanup: true,
//         focusInvalid: false,
//         invalidHandler: function(event, validator) {
//             $(".form-a").text("Исправьте пожалуйста все ошибки.");
//         },
//         onkeyup: function(element) {
//             $(".form-a").text("");
//         },
//         errorPlacement: function(error, element) {
//             return true;
//         },
//         // errorClass: "form-input_error",
//         // validClass: "form-input_success"
//     }
//     // submitHandler: function (form) {
//     //  var adress = $('#adress-head-form').val();
//     //  var personal = $('#personal').val();
//     //  var phone = $('#phone-head-form').val();


//     //  $.ajax ({
//     //   type: 'POST',
//     //   url: 'ajax-form.php',
//     //   data: {'fio':fio,'email':email,'phone':phone,'text_check':text_check},
//     //   success: function(data) {
       
//     //   },
//     //   error:  function(xhr, str){
//     //    alert('Возникла ошибка: ' + xhr.responseCode);
//     //   }

// });
});

