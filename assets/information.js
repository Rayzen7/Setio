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

// real time
function displayTime() {
  var dateTime = new Date();
  var hrs = dateTime.getHours();
  var min = dateTime.getMinutes();
  var sec = dateTime.getSeconds();
  var session = document.getElementById('session');

  document.getElementById('hours').innerHTML = hrs;
  document.getElementById('minutes').innerHTML = min;
  document.getElementById('seconds').innerHTML = sec;

  if(hrs >= 12){
    session.innerHTML = 'PM';
  } else {
    session.innerHTML = 'AM';
  }

  if(hrs > 12){
    hrs = hrs - 12;
  }

}
setInterval(displayTime, 10);
