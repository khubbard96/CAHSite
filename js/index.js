$(document).ready(function() {
  /* Reset the page*/
  $("body").scrollTop(0);

  $('.nav_page_links').on('click', function() {
    $('.nav_page_links').removeClass('active');
    $('.nav_page_links a').removeClass('bold-text');
    $(this).addClass('active');
    $(this).find('a').addClass('bold-text');
  });
  $('.dropdown-button').dropdown({
      inDuration: 300,
      outDuration: 225,
      constrainWidth: false, // Does not change width of dropdown to that of the activator
      hover: true, // Activate on hover
      gutter: 0, // Spacing from edge
      belowOrigin: true, // Displays dropdown below the button
      alignment: 'left', // Displays dropdown with edge aligned to the left of button
      stopPropagation: false // Stops event propagation
    }
  );
  $('.dropdown-content a').on('click',function() {
    var goToLocation = $(this).data('link');
    var headingLocation = $('body').find('#' + goToLocation).offset().top - 10; //top padding
    $('body').animate({
      scrollTop: headingLocation
    }, 400, function() {

    });
  });

  $(".parallax").parallax();
});

function setupPage() {

}
