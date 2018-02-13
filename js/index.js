$(document).ready(function() {
  setupPage();


  initTabletop();


  addElements();

  if(window.mobilecheck()) {
    //perform mobile resizing/restlying
  }
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
        -will probably want to take out header animations
        -need to take out materialize from navbar, does not respond there well
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
  //hide on mobile
  $("#site_content .site-page .section-title").append('<div class="title-line"></div>');
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


//modbile browser check
//https://stackoverflow.com/questions/11381673/detecting-a-mobile-browser

window.mobilecheck = function() {
  var check = false;
  (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
  return check;
};
