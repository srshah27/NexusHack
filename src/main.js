// decrease the opacity of the particles when scrolling down
$(document).ready(function () {
  $(window).scroll(function () {
    $("#bg-img").css("opacity", 1 - $(window).scrollTop() / ($('#bg-img').height() * 0.8));
  });
});