(function ($) {
 "use strict";
	
	/*----------------------------
	 wow js active
	------------------------------ */
	 new WOW().init();
	 
	// click
	$(".sidebar-menu a.click").on("click", function(){
		$(".sidebar-menu").toggleClass("active");
	});
	/*------------- preloader js --------------*/
	$(window).load(function() { // makes sure the whole site is loaded
		$('.loder-wrap').fadeOut(); // will first fade out the loading animation
		$('.loader').delay(150).fadeOut('slow'); // will fade out the white DIV that covers the website.
		$('body').delay(150).css({'overflow':'visible'})
	})
	
	
    //ACTIVE CURRENT MENU WHILE SCROLLING
    // function for active menuitem
    function activeMenuItem($links) {
        var top = $(window).scrollTop(),
            windowHeight = $(window).height(),
            documentHeight = $(document).height(),
            cur_pos = top + 2,
            sections = $("section"),
            nav = $links,
            nav_height = nav.outerHeight(),
            home = nav.find(" > ul > li:first");


        sections.each(function() {
            var top = $(this).offset().top - nav_height - 40,
                bottom = top + $(this).outerHeight();

            if (cur_pos >= top && cur_pos <= bottom) {
                nav.find("> ul > li > a").parent().removeClass("current");
                nav.find("a[href='#" + $(this).attr('id') + "']").parent().addClass("current");
            } else if (cur_pos === 2) {
                nav.find("> ul > li > a").parent().removeClass("current");
                home.addClass("current");
            } else if($(window).scrollTop() + windowHeight > documentHeight - 400) {
                nav.find("> ul > li > a").parent().removeClass("current");
           }
        });
    }
    // smooth-scrolling
    function smoothScrolling($links, $topGap) {
        var links = $links;
        var topGap = $topGap;

        links.on("click", function() {
            if (location.pathname.replace(/^\//,'') === this.pathname.replace(/^\//,'') && location.hostname === this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $("[name=" + this.hash.slice(1) +"]");
                if (target.length) {
                    $("html, body").animate({
                    scrollTop: target.offset().top - topGap
                }, 1000, "easeInOutExpo");
                    return false;
                }
            }
            return false;
        });
    } 
	
	
    // Parallax background
    function bgParallax() {
        if ($(".parallax").length) {
            $(".parallax").each(function() {
                var height = $(this).position().top;
                var resize     = height - $(window).scrollTop();
                var parallaxSpeed = $(this).data("speed");
                var doParallax = -(resize / parallaxSpeed);
                var positionValue   = doParallax + "px";
                var img = $(this).data("bg-image");

                $(this).css({
                    backgroundImage: "url(" + img + ")",
                    backgroundPosition: "50%" + positionValue,
                    backgroundSize: "cover",
					backgroundRepeat:"no-repeat",
                });

                if ( window.innerWidth < 768) {
                    $(this).css({
                        backgroundPosition: "center center"
                    });
                }
            });
        }
    }
	bgParallax();
	
	$(window).on("scroll", function() {

		bgParallax();
	});
	
	/*-------------------------------------------------------
        about us
    -----------------------------------------------------*/
    if ($(".about-area, .testmonial-area").length) {
        var post = $(".about-area .about-img,.testmonial-area .test-img");

        post.each(function() {
            var $this = $(this);
            var entryMedia = $this.find("img");
			var entryMediaPic = entryMedia.attr("src");

            $this.css({
                backgroundImage: "url("+ entryMediaPic +")",
                backgroundSize: "cover",
                backgroundPosition: "center center",
            })
        })
    }  
	
    function setTwoColEqHeight($col1, $col2) {
        var firstCol = $col1,
            secondCol = $col2,
            firstColHeight = $col1.innerHeight(),
            secondColHeight = $col2.innerHeight();

        if (firstColHeight > secondColHeight) {
            secondCol.css({
                "height": firstColHeight + 1 + "px"
            })
        } else {
            firstCol.css({
                "height": secondColHeight + 1 + "px"
            })
        }
    } 

	// // stickey menu
	$(window).on('scroll',function() {    
		var scroll = $(window).scrollTop(),
			mainHeader = $('#sticky-header'),
			mainHeaderHeight = mainHeader.innerHeight();
		
		// console.log(mainHeader.innerHeight());
		if (scroll > 0) {
			$("#sticky-header").addClass("sticky");
		}else{
			$("#sticky-header").removeClass("sticky");
		}
	});
	
	/*--------------------------
	 scrollUp
	---------------------------- */	
	$.scrollUp({
		scrollText: '<i class="fa fa-arrow-up"></i>',
		easingType: 'linear',
		scrollSpeed: 900,
		animation: 'fade'
	}); 	   
		
	$(window).on("load", function() {
		bgParallax();
		setTwoColEqHeight($(".about-area .about-img"), $(".about-area .about-content"));
		setTwoColEqHeight($(".testmonial-area .test-img"), $(".testmonial-area .text-content"));
		smoothScrolling($(".main-navigation > ul > li > a[href^='#']"), 70);
		smoothScrolling($(".sidebar-menu .main-navigation2 > ul > li > a[href^='#']"), 0);
	});
	
    $(window).on("scroll", function() {

		activeMenuItem($(".main-navigation"));
		activeMenuItem($(".main-navigation2"));

    });
	// mixitup ////
	$('#Container').mixItUp();
	/*--
	Magnific Popup
	------------------------*/
	$('.img-poppu').magnificPopup({
		type: 'image',
		gallery:{
			enabled:true
		}
	});
	
	
	/* magnificPopup video view */
	$('.vedio-wrap a').magnificPopup({
		type: 'iframe'
	});
	
	// counter up
	$('.counter').counterUp({
		delay: 10,
		time: 1000
	});
	
	// testmonial-active
	 $('.testmonial-active').owlCarousel({
        margin:0,
		loop:true,
		autoplay:true,
		autoplayTimeout:4000,
        nav:false,
		smartSpeed:800,
        navText:['<i class="fa fa-chevron-left"></i>','<i class="fa fa-chevron-right"></i>'],
        URLhashListener:true,
        startPosition: 'URLHash',
        responsive:{
            0:{
                items:1
            },
            450:{
                items:1
            },
            768:{
                items:1
            },
            1000:{
                items:1
            }
        }
    });
	
	// brand-active
	 $('.brand-active').owlCarousel({
        margin:0,
		loop:true,
		autoplay:true,
		autoplayTimeout:4000,
        nav:false,
		smartSpeed:800,
        navText:['<i class="fa fa-chevron-left"></i>','<i class="fa fa-chevron-right"></i>'],
        URLhashListener:true,
        startPosition: 'URLHash',
        responsive:{
            0:{
                items:2
            },
            450:{
                items:2
            },
            768:{
                items:4
            },
            1000:{
                items:5
            }
        }
    });
	
	// nivo slider ////
    $('#slider-active').nivoSlider({
        directionNav: true,
        animSpeed: 2000,
        slices: 18,
        pauseTime: 3000,
        pauseOnHover: true,
        manualAdvance: true,
        controlNav: false,
        prevText: '<i class="fa fa-long-arrow-left nivo-prev-icon"></i>',
        nextText: '<i class="fa fa-long-arrow-right nivo-next-icon"></i>'
    });
	
	// YOUTUBE VIDEO BACKGROUND
    $('#video-background').YTPlayer({
        mute: true,
        pauseOnScroll: false,
		stopMovieOnBlur: true,
        playerVars: {
            modestbranding: 0,
            autoplay: 1,
            controls: 1,
        }
    });
	
	/*------------------------------------------
        = WATER RIPPLE
    -------------------------------------------*/  
    if ($(".ripple").length) {
        $('.ripple').ripples({
            resolution: 512,
            dropRadius: 20, //px
            perturbance: 0.04,
        });

        // Automatic drops
        setInterval(function() {
            var $el = $('.ripple');
            var x = Math.random() * $el.outerWidth();
            var y = Math.random() * $el.outerHeight();
            var dropRadius = 20;
            var strength = 0.04 + Math.random() * 0.04;

            $el.ripples('drop', x, y, dropRadius, strength);
        }, 400);
    }
	
	
	$('.particleground').particleground({
		dotColor: '#999999',
		lineColor: '#999999',
		particleRadius:5,
		lineWidth:2,
		curvedLines:true,
		proximity:20,
		parallaxMultiplier:10,
	});
	
	
	// blog-active
	$(".blog-active").owlCarousel({
		loop: true,
		margin:10,
		items: 1,
		center:true,
		nav: true,
		autoplayHoverPause: false,
		navText:['<i class="fa fa-caret-left"></i>','<i class="fa fa-caret-right"></i>'],
		responsive:{
            0:{
                items:1
            },
            450:{
                items:1
            },
            678:{
                items:1
            },
            1000:{
                items:1
            }
        }
	});
	
	// vimeo-player
	
	// var options = {
		// loop: true,
		// autoplay:true,
		// byline:false,
	// };
	// // var player  = new Vimeo.Player('playertwo', options);
	// player.setVolume(0);
	
	
	/*---------------------
	// Ajax Contact Form
	--------------------- */

	$('.cf-msg').hide();
		$('form#cf button#submit').on('click', function() {
			var fname = $('#fname').val();
			var subject = $('#subject').val();
			var email = $('#email').val();
			var msg = $('#msg').val();
			var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;

			if (!regex.test(email)) {
				alert('Please enter valid email');
				return false;
			}

			fname = $.trim(fname);
			subject = $.trim(subject);
			email = $.trim(email);
			msg = $.trim(msg);

			if (fname != '' && email != '' && msg != '') {
				var values = "fname=" + fname + "&subject=" + subject + "&email=" + email + " &msg=" + msg;
				$.ajax({
					type: "POST",
					url: "mail.php",
					data: values,
					success: function() {
						$('#fname').val('');
						$('#subject').val('');
						$('#email').val('');
						$('#msg').val('');

						$('.cf-msg').fadeIn().html('<div class="alert alert-success"><strong>Success!</strong> Email has been sent successfully.</div>');
						setTimeout(function() {
							$('.cf-msg').fadeOut('slow');
						}, 4000);
					}
				});
			} else {
				$('.cf-msg').fadeIn().html('<div class="alert alert-danger"><strong>Warning!</strong> Please fillup the informations correctly.</div>')
			}
			return false;
	});
 
})(jQuery); 