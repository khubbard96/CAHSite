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
  */
});

function setupPage() {
  //binds all necessary things and click events, etc
  $(".parallax").parallax();

  $("#site_navigation .nav_button").on("click", function() {
    $("#site_navigation .nav_button").removeClass("active blue lighten-3");
    $(this).addClass("active blue lighten-3").removeClass("grey lighten-2");
  }).on("mouseover", function() {
    if(!($(this).hasClass("active")))
      $(this).addClass("grey lighten-2");
  }).on("mouseleave", function() {
    $(this).removeClass("grey lighten-2");
  });

  animation.headerTitleMinimize();
};

var animation = {
  /*headerTitleMinimize: function() {
    Materialize.scrollFire([
      {selector: "#site_navigation", offset: window.innerHeight - 200, callback: function() {
          $("#site_header #cah_title_area .main-title").toggleClass("minimized");
          $("#site_header #cah_title_area").toggleClass("minimized");
        }
      }
    ]);
  }*/
};




//https://medium.com/@jaejohns/how-to-use-google-sheets-as-your-website-database-b0f2f13d0396
//https://stackoverflow.com/questions/13699589/display-the-content-of-a-google-sheet-cell-in-a-web-page
