<!-- Responsive Menu -->
			$(document).ready(function(){		
				jQuery("#responsive-menu select").change(function() {
					window.location = jQuery(this).find("option:selected").val();
				});
				});
<!-- Hook up the FlexSlider -->
            $(document).ready(function(){
			$('.flexslider').flexslider({
            animation: "fade",              //String: Select your animation type, "fade" or "slide"
			slideDirection: "horizontal",   //String: Select the sliding direction, "horizontal" or "vertical"
			slideshow: true,                //Boolean: Animate slider automatically
			slideshowSpeed: 8000,           //Integer: Set the speed of the slideshow cycling, in milliseconds
			animationDuration: 2000,         //Integer: Set the speed of animations, in milliseconds
			directionNav: true,             //Boolean: Create navigation for previous/next navigation? (true/false)
			controlNav: true,               //Boolean: Create navigation for paging control of each clide? Note: Leave true for manualControls usage
			keyboardNav: true,              //Boolean: Allow slider navigating via keyboard left/right keys
			mousewheel: false,              //Boolean: Allow slider navigating via mousewheel
			prevText: "Previous",           //String: Set the text for the "previous" directionNav item
			nextText: "Next",               //String: Set the text for the "next" directionNav item
			pausePlay: false,               //Boolean: Create pause/play dynamic element
			randomize: false,               //Boolean: Randomize slide order
			slideToStart: 0,                //Integer: The slide that the slider should start on. Array notation (0 = first slide)
			animationLoop: true,            //Boolean: Should the animation loop? If false, directionNav will received "disable" classes at either end
			pauseOnAction: true,            //Boolean: Pause the slideshow when interacting with control elements, highly recommended.
			pauseOnHover: false,            //Boolean: Pause the slideshow when hovering over slider, then resume when no longer hovering
			start: function(){},            //Callback: function(slider) - Fires when the slider loads the first slide
			before: function(){},           //Callback: function(slider) - Fires asynchronously with each slider animation
			after: function(){},            //Callback: function(slider) - Fires after each slider animation completes
			end: function(){}               //Callback: function(slider) - Fires when the slider reaches the last slide (asynchronous)
	  });
		});
// Activate the contactform
			  $(document).ready(function(){
			$(function(){
				$('#contact_form').submit(function(e){
					e.preventDefault();
					var form = $(this);
					var post_url = form.attr('action');
					var post_data = form.serialize();
					$('#loader', form).html('<img src="images/loader.gif" /> Please Wait...');
					$.ajax({
						type: 'POST',
						url: post_url, 
						data: post_data,
						success: function(msg) {
							$(form).fadeOut(500, function(){
								form.html(msg).fadeIn();
							});
						}
					});
				});
			});
			 });
// Activate the prettyPhoto
			   $(document).ready(function(){
				  $("a[class^='prettyPhoto']").prettyPhoto();
				});
				
// Activate the MainMenu

			  $(document).ready(function(){ 
				  $("ul.sf-menu").superfish(); 
			  });
	//##########################################
	// Accordion box
	//##########################################
	$(document).ready(function(){ 
    $('.accordion-container').hide(); // Oculta los contenidos del acordeón por defecto
    $('.accordion-trigger').addClass('closed'); // Agrega una clase para indicar que el acordeón está cerrado

    $('.accordion-trigger').click(function(){
        if( $(this).next().is(':hidden') ) { 
            $('.accordion-trigger').removeClass('active').removeClass('closed').next().slideUp(); // Cierra los elementos abiertos
            $(this).toggleClass('active').next().slideDown(); // Abre el elemento clickeado
        } else {
            $(this).removeClass('active').next().slideUp(); // Cierra el elemento si ya está abierto
        }
        return false;
    });
});

	//##########################################
	// Accordion box Footer
	//##########################################
	$(document).ready(function(){ 
    $('.accordion-container-footer').hide(); // Oculta los contenidos del acordeón del footer por defecto
    $('.accordion-trigger-footer').addClass('closed'); // Agrega una clase para indicar que el acordeón del footer está cerrado

    $('.accordion-trigger-footer').click(function(){
        if( $(this).next().is(':hidden') ) { 
            $('.accordion-trigger-footer').removeClass('active').removeClass('closed').next().slideUp(); // Cierra los elementos abiertos del footer
            $(this).toggleClass('active').next().slideDown(); // Abre el elemento clickeado del footer
        } else {
            $(this).removeClass('active').next().slideUp(); // Cierra el elemento si ya está abierto del footer
        }
        return false;
    });
});
