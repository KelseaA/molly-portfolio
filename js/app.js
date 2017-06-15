$(document).ready(function(){
  //toggle hamburger menu
  $(".hamburger").on("click", function() {
      $(".menu").toggleClass("open");
      $(this).toggleClass("change");
  });

  $("nav li").on("click", function(){
      $(".menu").removeClass("open");
      $(".hamburger").removeClass("change");
  });


  // Add smooth scrolling to all links
  $('.smooth-scroll-link').on('click', function(event) {

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
      }, 600, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});