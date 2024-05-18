var loader = document.getElementById("preloader");
window.addEventListener("load", function(){
  loader.style.display = "none";
})

/* ----- Navbar Scroll To Fixed ----- */
function navbarScrollfixed() {
  $('.navbar-scrolltofixed').scrollToFixed();
  var summaries = $('.summary');
  summaries.each(function(i) {
      var summary = $(summaries[i]);
      var next = summaries[i + 1];
      summary.scrollToFixed({
          marginTop: $('.navbar-scrolltofixed').outerHeight(true) + 10,
          limit: function() {
              var limit = 0;
              if (next) {
                  limit = $(next).offset().top - $(this).outerHeight(true) - 10;
              } else {
                  limit = $('.footer').offset().top - $(this).outerHeight(true) - 10;
              }
              return limit;
          },
          zIndex: 999
      });
  });
}

// Mobile massage 

window.onload = function () {
  checkDevice();
  window.addEventListener('resize', checkDevice);
};

function checkDevice() {
  var isMobile = /Android|iPhone|iPad/i.test(navigator.userAgent);
  
  if (isMobile) {
      document.body.innerHTML = '<div class="mobilemsg" style="font-size:50px;  max-width: 1500px;margin: 50px auto;  background-image: linear-gradient(rgba(190, 190, 190, 0.84),rgba(0, 0, 0, 0.84) 0%);border-radius:10px; color:white;padding: 20px;box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);text-align: center;margin-top:75%;"><h1>Sorry, This Website is Only Accessible on Desktop or Laptop</h1></div>';
  }
}


// Popup Massage

document.addEventListener("DOMContentLoaded", function () {
  const popupContainer = document.getElementById("popup-container");
  const okBtn = document.getElementById("okBtn");

  okBtn.addEventListener("click", function () {
      popupContainer.style.display = "none";
      document.getElementById("website-content").style.display = "block";
  });
});


// Dark MOde

document.addEventListener('DOMContentLoaded', function () {
  const darkModeToggle = document.getElementById('darkModeToggle');
  const body = document.body;

  darkModeToggle.addEventListener('click', function () {
      // Toggle the 'dark-mode' class on the body
      body.classList.toggle('dark-mode');
  });
});


// Contact page hide


