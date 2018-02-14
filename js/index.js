$(document).ready(function() {
  /* Reset the page*/
  setupPage();

  $("#nav-mobile li a").on("click", function() {
    Site.currentPage = $(this).data("nav");
    $("#nav-mobile li").removeClass("active");
    $(this).parent().addClass("active")
  });


});

function setupPage() {
  $(document).find("#nav-mobile li").removeClass("active");
  $(document).find("#nav-mobile li [data-nav=" + Site.currentPage + "]").parent().addClass("active");
}

var Site = {
  currentPage: "home"
}
