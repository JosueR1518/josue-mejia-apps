import { Injectable } from '@angular/core';



declare var particlesJS: any;
declare var jQuery: any;
@Injectable({
  providedIn: 'root'
})
export class InitAnimationsService {

  constructor() {

    this.arlo_animation_remove_loader();
  }




// -----------------------------------------------------
// ---------------  HAMBURGER  -------------------------
// -----------------------------------------------------

 arlo_tm_hamburger() {

	'use strict';

	let hamburger 		= jQuery('.hamburger');
	let mobileMenu		= jQuery('.arlo_tm_mobile_menu_wrap');

	hamburger.on('click', function() {
		let element 	= jQuery(this);

		if (element.hasClass('is-active')) {
			element.removeClass('is-active');
			mobileMenu.slideUp();
		} else {
			element.addClass('is-active');
			mobileMenu.slideDown();
		}

		return false;
	});
}


arlo_tm_cerrar_menu() {
		jQuery('.hamburger').click();
}



// -------------------------------------------------
// -------------   ANIMATE TEXT  -------------------
// -------------------------------------------------

  arlo_tm_animate_text(strings: string[]) {

    'use strict';

    const animateSpan			= jQuery('.arlo_tm_animation_text_word');

    animateSpan.typed({
        strings ,
        loop: true,
        startDelay: 1e3,
        backDelay: 2e3
      });
  }



  arlo_tm_animate_particles() {

  particlesJS.load('particles-js', 'assets/data/particles.json');
	}
	





  // -------------------------------------------------
// -----------------    PORTFOLIO    ---------------
// -------------------------------------------------

// filterable

 arlo_tm_portfolio() {

	'use strict';

	if (jQuery().isotope) {

		// Needed variables
		const list 		 = jQuery('.arlo_tm_portfolio_list');
		const filter		 = jQuery('.arlo_tm_portfolio_filter');

		if (filter.length) {
			// Isotope Filter
			filter.find('a').on('click', function() {
				const selector = jQuery(this).attr('data-filter');
				list.isotope({
					filter				: selector,
					animationOptions	: {
						duration			: 750,
						easing				: 'linear',
						queue				: false
					}
				});
				return false;
			});

			// Change active element class
			filter.find('a').on('click', function() {
				filter.find('a').removeClass('current');
				jQuery(this).addClass('current');
				return false;
			});
		}
	}
}

 arlo_tm_projects() {

	'use strict';

	jQuery('.arlo_tm_portfolio_animation_wrap').each(function() {
		jQuery(this).on('mouseenter', function() {
			if (jQuery(this).data('title')) {
				jQuery('.arlo_tm_portfolio_titles').html(jQuery(this).data('title') + ' /<span class="work__cat">' + jQuery(this).data('category') + '</span>');
				jQuery('.arlo_tm_portfolio_titles').addClass('visible');
				jQuery(this).addClass('sobresalir');
			}

			jQuery(document).on('mousemove', function(e) {
				jQuery('.arlo_tm_portfolio_titles').css({
					left: e.clientX - 10,
					top: e.clientY + 25
				});
			});
		}).on('mouseleave', function() {
			 jQuery('.arlo_tm_portfolio_titles').removeClass('visible');
			 jQuery(this).removeClass('sobresalir');
		});
	});
}

// -----------------------------------------------------
// -----------------    PROGRESS BAR    ----------------
// -----------------------------------------------------



arlo_tm_progress_wrap() {

 function tdProgress(container) {

    'use strict';

    container.find('.arlo_tm_progress').each(function(i) {
      let progress 		= jQuery(this);
      let pValue 			= parseInt(progress.data('value'), 10);
      let pColor			= progress.data('color');
      let pBarWrap 		= progress.find('.arlo_tm_bar_wrap');
      let pBar 			= progress.find('.arlo_tm_bar');
      pBar.css({width: pValue + '%', backgroundColor: pColor});
      setTimeout(function() {pBarWrap.addClass('open'); }, (i * 500));
    });
  }
 jQuery('.arlo_tm_progress_wrap').each(function() {
    'use strict';
    let pWrap 			= jQuery(this);
    pWrap.waypoint({handler() {tdProgress(pWrap); }, offset: '90%'});
  });
}




arlo_tm_owl_carousel(){
	
	"use strict";
  	var carusel2			= jQuery('.arlo_tm_testimonial_wrap .owl-carousel');
  	carusel2.owlCarousel({
		loop:true,
		autoplay:true,
		autoWidth: false,
		nav: false,
		items:1,
	});
}


arlo_tm_imgtosvg(){
	
	"use strict";
	
	jQuery('img.svg').each(function(){
		
		var jQueryimg 		= jQuery(this);
		var imgClass		= jQueryimg.attr('class');
		var imgURL			= jQueryimg.attr('src');

		jQuery.get(imgURL, function(data) {
			// Get the SVG tag, ignore the rest
			var jQuerysvg = jQuery(data).find('svg');

			// Add replaced image's classes to the new SVG
			if(typeof imgClass !== 'undefined') {
				jQuerysvg = jQuerysvg.attr('class', imgClass+' replaced-svg');
			}

			// Remove any invalid XML tags as per http://validator.w3.org
			jQuerysvg = jQuerysvg.removeAttr('xmlns:a');

			// Replace image with new SVG
			jQueryimg.replaceWith(jQuerysvg);

		}, 'xml');

	});
}



  // -----------------------------------------------------
// ----------------    CONTACT FORM    -----------------
// -----------------------------------------------------

arlo_tm_contact_form() {

	'use strict';

	jQuery('.contact_form #send_message').on('', () => {

		const name 		= jQuery('.contact_form #name').val();
		const email 		= jQuery('.contact_form #email').val();
		const message 	= jQuery('.contact_form #message').val();
		// tslint:disable-next-line: indent
		const subject 	= jQuery('.contact_form #subject').val();
		const success     = jQuery('.contact_form .returnmessage').data('success');

		jQuery('.contact_form .returnmessage').empty(); // To empty previous error/success message.
		// checking for blank fields
		if (name === '' || email === '' || message === '') {

			jQuery('div.empty_notice').slideDown(500).delay(2000).slideUp(500);
		} else {
			// Returns successful data submission message when the entered information is stored in database.
			jQuery.post('modal/contact.php', { ajax_name: name, ajax_email: email, ajax_message: message, ajax_subject: subject}, function(data) {

				jQuery('.contact_form .returnmessage').append(data); // Append returned message to message paragraph


				if (jQuery('.contact_form .returnmessage span.contact_error').length) {
					jQuery('.contact_form .returnmessage').slideDown(500).delay(2000).slideUp(500);
				} else {
					jQuery('.contact_form .returnmessage').append('<span class=\'contact_success\'>' + success + '</span>');
					jQuery('.contact_form .returnmessage').slideDown(500).delay(4000).slideUp(500);
				}

				if (data === '') {
					jQuery('#contact_form')[0].reset(); // To reset form fields on success
				}

			});
		}
		return false;
	});
}

arlo_animation_remove_loader() {
  setTimeout(() => {
    jQuery('.arlo_tm_preloader').addClass('loaded');
}, 1000);
}



arlo_tm_slide_projects(startPosition: number){

	jQuery('.owl-carousel-projects').owlCarousel({
		loop:true,
		autoplay:false,
		autoWidth: false,
		nav: true,
		items:1,
		startPosition
	});
}



arlo_tm_data_images(){
	
	"use strict";
	
	var data			= jQuery('*[data-img-url]');
	
	data.each(function(){
		var element			= jQuery(this);
		var url				= element.data('img-url');
		element.css({backgroundImage: 'url('+url+')'});
	});
}


}
