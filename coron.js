 
function changeDisplay() {
    document.getElementById('myDiv').style.display = 'grid';
    document.getElementById('myDiv').style.color = 'yellow';
    document.getElementById('myDiv').style.fontStyle = 'italic';
    document.getElementById('myDiv').style.fontWidth = 'bold';
    document.getElementById('myDiv').style.fontSize = '20'+'px';
    document.getElementById('button').style.display = 'none';
  }

  let opentextButton = document.querySelector('.text'); // Select the button with class 'opentext'

  opentextButton.onclick = function() {
      let textElement = document.querySelector('.textone'); // Select the div with class 'textone'
      if (textElement.style.display === 'block') {
          textElement.style.display = 'none'; // Hide the text if it's currently visible
      } else {
          textElement.style.display = 'block'; // Show the text if it's currently hidden
      }
  };
  


  let currentSlide = 1;
    let slideInterval;
    
    document.addEventListener("DOMContentLoaded", function () {
    startSlideShow(); // Start the slideshow when the DOM is loaded
    });
    
    function startSlideShow() {
    slideInterval = setInterval(function () {
        changeSlide(1); // Change to the next slide every 3 seconds
    }, 2000);
    }
    
    function stopSlideShow() {
    clearInterval(slideInterval); // Stop the slideshow
    }
    
    function changeSlide(n) {
    showSlide(currentSlide += n);
    }
    
    function showSlide(n) {
    const slides = document.getElementsByClassName("carousel-image");
    
    if (n > slides.length) {
        currentSlide = 1;
    }
    
    if (n < 1) {
        currentSlide = slides.length;
    }
    
    const transformValue = -100 * (currentSlide - 1) + "%";
    document.getElementById("image-container").style.transform = "translateX(" + transformValue + ")";
    }