// decrease the opacity of the particles when scrolling down


document.addEventListener('DOMContentLoaded', function () {
  // Hide the preloader once the page content has loaded
  // const preloader = document.querySelector('.preloader');
  // preloader.style.display = 'none';

  // // Add a 'loaded' class to the body to trigger the CSS rule
  window.scrollTo(0, 0);
  const terminal = document.querySelector('.terminal');
  setTimeout(() => {
    terminal.classList.add('removed');
    document.body.classList.remove('scroll-lock');
  }, 6000);
});

$(document).ready(function () {
  $(window).scroll(function () {
    $("#bg-img").css("opacity", 1 - $(window).scrollTop() / ($('#bg-img').height() * 0.8));
  });
});

// faq
const toggles = document.querySelectorAll('.faq-toggle')

toggles.forEach(toggle => {
    toggle.addEventListener('click', () => {
        toggle.parentNode.classList.toggle('active')
    })
})