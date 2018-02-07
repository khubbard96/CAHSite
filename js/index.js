$(document).ready(function() {
  setupPage();

  /*
    TODO:
      ::IDEA::
      -website content flying in from left and right
      -scrolling "customer testimonials" thing
      -google form submition for comment submission
      -"virtual tour"/gallery thing

      ::FIX::
      -font stuff

      test commit
  */
});

function setupPage() {
  //binds all necessary things and click events, etc
  $(".parallax").parallax();

  $("#site_navigation span").on("click", function() {
    $("#site_navigation span").removeClass("nav_active blue lighten-3");
    $(this).addClass("nav_active blue lighten-3");
  });
}
