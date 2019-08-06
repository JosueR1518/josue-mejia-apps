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






// -------------------------------------------------
// -------------   ANIMATE TEXT  -------------------
// -------------------------------------------------

  arlo_tm_animate_text() {

    'use strict';

    const animateSpan			= jQuery('.arlo_tm_animation_text_word');

    animateSpan.typed({
        strings: ['Freelancer', 'UI/UX Designer', 'Desarrollador Front-end '],
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
		let list 		 = jQuery('.arlo_tm_portfolio_list');
		let filter		 = jQuery('.arlo_tm_portfolio_filter');

		if (filter.length) {
			// Isotope Filter
			filter.find('a').on('click', function() {
				let selector = jQuery(this).attr('data-filter');
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
				jQuery('.arlo_tm_portfolio_titles').html(jQuery(this).data('title') + '<span class="work__cat">' + jQuery(this).data('category') + '</span>');
				jQuery('.arlo_tm_portfolio_titles').addClass('visible');
			}

			jQuery(document).on('mousemove', function(e) {
				jQuery('.arlo_tm_portfolio_titles').css({
					left: e.clientX - 10,
					top: e.clientY + 25
				});
			});
		}).on('mouseleave', function() {
			jQuery('.arlo_tm_portfolio_titles').removeClass('visible');
		});
	});
}

// -----------------------------------------------------
// -----------------    PROGRESS BAR    ----------------
// -----------------------------------------------------



arlo_tm_progress_wrap() {

 function tdProgress(container){

    "use strict";
  
    container.find('.arlo_tm_progress').each(function(i) {
      var progress 		= jQuery(this);
      var pValue 			= parseInt(progress.data('value'), 10);
      var pColor			= progress.data('color');
      var pBarWrap 		= progress.find('.arlo_tm_bar_wrap');
      var pBar 			= progress.find('.arlo_tm_bar');
      pBar.css({width:pValue+'%', backgroundColor:pColor});
      setTimeout(function(){pBarWrap.addClass('open');},(i*500));
    });
  }
  jQuery('.arlo_tm_progress_wrap').each(function() {
    "use strict";
    var pWrap 			= jQuery(this);
    pWrap.waypoint({handler: function(){tdProgress(pWrap);},offset:'90%'});	
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
}
