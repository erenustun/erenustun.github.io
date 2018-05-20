$(document).ready(function(){

  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // Ende if-statement
  }); // Ende Smooth Scroll

// Arrow Up Button anzeigen ab 500px
$(document).ready(function($) {
  $( ".up" ).hide();
      $(document).ready(function(){
          $(window).scroll(function(){
              if ($(this).scrollTop() > 500) {
                  $('.up').fadeIn(500);
              } else {
                  $('.up').fadeOut(200);
              }
          });
      });
  }); // Ende Arrow Up Button

  // Popout Header Button anzeigen ab 500px
  $(document).ready(function($) {
    $( ".popout-header" ).hide();
        $(document).ready(function(){
            $(window).scroll(function(){
                if ($(this).scrollTop() > 100) {
                    $('.popout-header').fadeIn(200);
                } else {
                    $('.popout-header').fadeOut(200);
                }
            });
        });
    }); // Ende Popout Header

    $(document).ready(function() {
	$('#menu-button').click(function() {
		$('.main-nav').toggle(300);
	});
}); // Ende Mobile Menu Button Click Toggle

}); // Ende Script
