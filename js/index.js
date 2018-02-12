$(document).ready(function() {
  setupPage();


  initTabletop();


  addElements();
  /*
    TODO:
      ::IDEA::
      -website content flying in from left and right
      -scrolling "customer testimonials" thing
      -google form submition for comment submission
      -"virtual tour"/gallery thing

      ::FIX::
      -font stuff
      -navbar buttons responsive width
      -work on header/title, site content container responsiveness
  */
});

function setupPage() {
  //binds all necessary things and click events, etc

  //header image parallax
  $(".parallax").parallax();

  //navigation click events
  $("#site_navigation .nav_button").on("click", function() {
    if(!$(this).hasClass("active")) {
      console.log($(this).data("nav"));
    }

    $("#site_navigation .nav_button").removeClass("active blue lighten-3");
    $(this).addClass("active blue lighten-3").removeClass("grey lighten-2");

  }).on("mouseover", function() {
    if(!($(this).hasClass("active")))
      $(this).addClass("grey lighten-2");
  }).on("mouseleave", function() {
    $(this).removeClass("grey lighten-2");
  });

  //header movement animation
  $(document).on("scroll", function() {
    console.log($(this).scrollTop());
    var minimized = false;
    var pinned = false;
    var scrollLevel = $(this).scrollTop();

    //animate header elements
    if(!minimized && $(this).scrollTop() > 100) {
      $("#site_header #cah_title_area .main-title").addClass("minimized");
      $("#site_header #cah_title_area").addClass("minimized");
      $("#site_header #grad_overlay").fadeIn(250);
      minimized = true;
    }
    else {
      $("#site_header #cah_title_area .main-title").removeClass("minimized");
      $("#site_header #cah_title_area").removeClass("minimized");
      $("#site_header #grad_overlay").fadeOut(250);
      minimized = false;
    }

    //lock the nav bar in place
    if(!pinned && scrollLevel > 160) {
      $(".header-container").addClass("pinned");
      $("#site_content").addClass("header-scrolled");
    }
    else {
      $(".header-container").removeClass("pinned");
      $("#site_content").removeClass("header-scrolled");
    }
  });
};

var animation = {
  /*headerTitleMinimize: function() {
    Materialize.scrollFire([
      {selector: "#site_navigation", offset: window.innerHeight - 200, callback: function() {
          $("#site_header #cah_title_area .main-title").toggleClass("minimized");
          $("#site_header #cah_title_area").toggleClass("minimized");
        }
      }
    ])
  }*/
};

var addElements = function () {
  $("#site_content .site-page .section-title").append('<div style="background: #d0d0d0;flex: 1;margin: auto 40px;height: 12px;border-radius: 6px;"></div>');
}




//https://medium.com/@jaejohns/how-to-use-google-sheets-as-your-website-database-b0f2f13d0396
//https://stackoverflow.com/questions/13699589/display-the-content-of-a-google-sheet-cell-in-a-web-page


function initTabletop() {
  Tabletop.init({
    //current key is for sheet entitled "Employee Info"
    key: "https://docs.google.com/spreadsheets/d/1lEYCtz1ChgIbmlHkr_8pVc0LTqs1QIcOWNfXRHPLE0w/edit?usp=sharing",
    callback: function(data, tabletop) {
      console.log(data)
    },
    simpleSheet: true
  });
}
