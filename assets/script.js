// logo animate
window.onbeforeunload = () => {
  window.scrollTo(0, 0);
}

 const page = document.querySelector("html");

window.addEventListener("load", () =>{
    
    let video = document.getElementById("video");
   
    setTimeout(function(){
      video.play();
    }, 100);
  
    const loader = document.querySelector(".loader");

    setTimeout(function() {
          loader.classList.add("loader-hidden");
          video.style.opacity = 0;
          loader.style.position = "fixed";
       
          loader.addEventListener("transitioned", () =>{
          document.body.removeChild("loader");
       
      });
  
    }, 4999)
})

// Scrolling navbar
jQuery(function($) {
    var $navbar = $('.navbar');
  
    updateNavbar();
  
    $(window).scroll(function() {
      updateNavbar();
    });
  
    function updateNavbar() {
      var $current = $(this).scrollTop();
      if ($current > 0) {
        $navbar.addClass('navbar-color').removeClass('original-color');
      } else {
        $navbar.removeClass('navbar-color').addClass('original-color');
      }
    }
  });

  // responsive navbar
document.addEventListener("DOMContentLoaded", function () {
  const navbar = document.querySelector('.navbar');
  const listIcon = document.querySelector('.list');

  listIcon.addEventListener('click', function () {
      navbar.classList.toggle('active');
  });
});

  // accordion menu 
  const headerItems = document.querySelectorAll(".according-header");
  headerItems.forEach(headerItem => {
      headerItem.addEventListener("click", event => {
          const accordionContent = headerItem.parentElement.querySelector(".according-body");
  
          headerItem.classList.toggle("active");
  
          if (headerItem.classList.contains("active")) {
              accordionContent.style.maxHeight = accordionContent.scrollHeight + "px";
          } else {
              accordionContent.style.maxHeight = 0;
          }
      });
  });