// decrease the opacity of the particles when scrolling down
$(document).ready(function () {
  $(window).scroll(function () {
    $("#bg-img").css("opacity", 1 - $(window).scrollTop() / ($('#bg-img').height() * 0.8));
  });
});

document.addEventListener('DOMContentLoaded', function() {
  // Hide the preloader once the page content has loaded
  var preloader = document.querySelector('.preloader');
  preloader.style.display = 'none';

  // Add a 'loaded' class to the body to trigger the CSS rule
  document.body.classList.add('loaded');
});