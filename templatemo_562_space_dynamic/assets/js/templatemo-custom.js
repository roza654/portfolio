(function ($) {
	
	"use strict";

	// Header Type = Fixed
  $(window).scroll(function() {
    var scroll = $(window).scrollTop();
    var box = $('.header-text').height();
    var header = $('header').height();

    if (scroll >= box - header) {
      $("header").addClass("background-header");
    } else {
      $("header").removeClass("background-header");
    }
  });


	$('.owl-our-team').owlCarousel({
		items:3,
		loop:true,
		dots: true,
		nav: false,
		autoplay: true,
		margin:0,
		  responsive:{
			  0:{
				  items:1
			  },
			  600:{
				  items:2
			  },
			  1000:{
				  items:3
			  },
			  1600:{
				  items:3
			  }
		  }
	})
	

	// Menu Dropdown Toggle
  if($('.menu-trigger').length){
    $(".menu-trigger").on('click', function() { 
      $(this).toggleClass('active');
      $('.header-area .nav').slideToggle(200);
    });
  }


  // Menu elevator animation
  $('.scroll-to-section a[href*=\\#]:not([href=\\#])').on('click', function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        var width = $(window).width();
        if(width < 991) {
          $('.menu-trigger').removeClass('active');
          $('.header-area .nav').slideUp(200);  
        }       
        $('html,body').animate({
          scrollTop: (target.offset().top) + 1
        }, 700);
        return false;
      }
    }
  });

  $(document).ready(function () {
      $(document).on("scroll", onScroll);
      
      //smoothscroll
      $('.scroll-to-section a[href^="#"]').on('click', function (e) {
          e.preventDefault();
          $(document).off("scroll");
          
          $('.scroll-to-section a').each(function () {
              $(this).removeClass('active');
          })
          $(this).addClass('active');
        
          var target = this.hash,
          menu = target;
          var target = $(this.hash);
          $('html, body').stop().animate({
              scrollTop: (target.offset().top) + 1
          }, 500, 'swing', function () {
              window.location.hash = target;
              $(document).on("scroll", onScroll);
          });
      });
  });

  function onScroll(event){
      var scrollPos = $(document).scrollTop();
      $('.nav a').each(function () {
          var currLink = $(this);
          var refElement = $(currLink.attr("href"));
          if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
              $('.nav ul li a').removeClass("active");
              currLink.addClass("active");
          }
          else{
              currLink.removeClass("active");
          }
      });
  }



	// Page loading animation
	 $(window).on('load', function() {

        $('#js-preloader').addClass('loaded');

    });

	

	// Window Resize Mobile Menu Fix
  function mobileNav() {
    var width = $(window).width();
    $('.submenu').on('click', function() {
      if(width < 767) {
        $('.submenu ul').removeClass('active');
        $(this).find('ul').toggleClass('active');
      }
    });
  }

  // Contact Form Enhancement with EmailJS
  $('#contact').on('submit', function(e) {
    e.preventDefault();
    
    var form = $(this);
    var submitBtn = form.find('#form-submit');
    var originalText = submitBtn.text();
    
    // Show loading state
    submitBtn.text('Sending...').prop('disabled', true);
    
    // Get form data
    var templateParams = {
      from_name: form.find('#name').val() + ' ' + form.find('#surname').val(),
      from_email: form.find('#email').val(),
      message: form.find('#message').val(),
      to_email: 'rozashekh1@gmail.com'
    };
    
    // Send email using EmailJS
    emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', templateParams)
      .then(function(response) {
        // Success
        submitBtn.text('Message Sent!').removeClass('main-button').addClass('btn-success');
        alert('Thank you! Your message has been sent successfully. I will get back to you soon.');
        form[0].reset();
        
        // Reset button after 3 seconds
        setTimeout(function() {
          submitBtn.text(originalText).removeClass('btn-success').addClass('main-button').prop('disabled', false);
        }, 3000);
      }, function(error) {
        // Error
        submitBtn.text('Error - Try Again').removeClass('main-button').addClass('btn-danger');
        alert('Sorry, there was an error sending your message. Please try again or contact me directly.');
        
        // Reset button after 3 seconds
        setTimeout(function() {
          submitBtn.text(originalText).removeClass('btn-danger').addClass('main-button').prop('disabled', false);
        }, 3000);
      });
  });




})(window.jQuery);