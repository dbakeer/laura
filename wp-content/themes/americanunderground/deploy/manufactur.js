// Custom JS

jQuery(function(){


   
    jQuery(document).foundation();

        // smooth scroll to anchors
    jQuery(function() {
	  jQuery('a[href*="#"]:not([href="#"])').click(function() {
	    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
	      var target = $(this.hash);
	      target = target.length ? target : jQuery('[name=' + this.hash.slice(1) +']');
	      if (target.length) {
	        jQuery('html, body').animate({
	          scrollTop: target.offset().top - 100
	        }, 1000);
	        return false;
	      }
	    }
	  });
	});

	jQuery('.off-canvas .menu li a').click(function(){
    	jQuery('.js-off-canvas-exit').trigger( "click" );

    })

	// target multiple
    $('.carousel').flickity({
	  // options
		//contain: true,
        friction: .35,
        dragThreshold: 10,
        wrapAround: true,
		adaptiveHeight: true,
		arrowShape: { 
			x0: 10,
			x1: 60, y1: 50,
			x2: 65, y2: 42,
			x3: 22
		}
	});


	var $iso = jQuery('.grid').isotope({
	  // layoutMode: 'packery',
	  itemSelector: '.grid-item',
	  originLeft: false
	});

	jQuery('.filter-button-group').on( 'click', function() {
		jQuery('.filter-button-group').removeClass('isotope-selected');
		jQuery(this).addClass('isotope-selected');
	  	var filterValue = jQuery(this).attr('data-filter');
	  	$iso.isotope({ filter: filterValue });
	});



	jQuery('.initiative-nav .button').on( 'click', function() {
    	$initiativeContent = jQuery(this).data('initiative-content');
    	jQuery(this).closest('.section-initiative').find('.initiative-details').html($initiativeContent);
    })

    jQuery('.section-organization .organization-logo').on( 'click', function() {
    	jQuery('.section-organization .organization-logo-wrapper').removeClass('organization-selected');
    	$organizationContent = jQuery(this).data('organization-description');
    	jQuery(this).closest('.organization-logo-wrapper').addClass('organization-selected');
    	jQuery(this).closest('.section-organization').find('.organization-description').html($organizationContent);
    })


     jQuery('.grid-images').each( function() {
        var $pic     = jQuery(this),
            getItems = function() {
                var items = [];
                $pic.find('a').each(function() {
                    var $href   = jQuery(this).attr('href'),
                        //$size   = jQuery(this).data('size').split('x'),
                        $width  = jQuery(this).data('width'),
                        $height = jQuery(this).data('height');

                    var item = {
                        src : $href,
                        w   : $width,
                        h   : $height
                    }

                    items.push(item);
                });
                return items;
            }

        var items = getItems();

        var $pswp = jQuery('.pswp')[0];
        $pic.on('click', '.individual-slide', function(event) {
            event.preventDefault();

            var $index = jQuery(this).find('a').data('index');
            var options = {
                index: $index,
                bgOpacity: .95,
                showHideOpacity: true
            }

            console.log("I AM INDEX", $index)

            // Initialize PhotoSwipe
            var lightBox = new PhotoSwipe($pswp, PhotoSwipeUI_Default, items, options);
            lightBox.init();
        });
    });


     // faqs
     jQuery('.accordion-title').on('click', function(e){
        jQuery('.accordion').foundation('up', jQuery(".accordion-content").not(jQuery(this).parent().find('.accordion-content')));
    });


   
//    jQuery("header").headroom({
//        "offset":100,
//        "tolerance": 5,
//        "classes": {
//            "initial": "header--top",
//            "pinned": "slideDown",
//            "unpinned": "slideUp"
//        }
//    });
    
//    var $masonryContainer = jQuery('.masonry-grid');
//    $masonryContainer.imagesLoaded( function() {
//
//        $masonryContainer.masonry({
//            itemSelector : '.masonry-grid > .masonry-item',
//            columnWidth: '.masonry-grid > .masonry-item'
//        });    
//    });

});

jQuery( window ).load(function() {
    

});