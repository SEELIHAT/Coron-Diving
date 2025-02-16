let currentSlide = 1;
let slideInterval;

document.addEventListener("DOMContentLoaded", function () {
    startSlideShow(); // Start the slideshow when the DOM is loaded

    // Add event listener for the 'opentext' button
    let opentextButton = document.querySelector('.opentext'); // Select the button with class 'opentext'
    opentextButton.addEventListener('click', function() {
        let textElement = document.querySelector('.textone'); // Select the div with class 'textone'
        if (textElement.style.display === 'block') {
            textElement.style.display = 'none'; // Hide the text if it's currently visible
        } else {
            textElement.style.display = 'block'; // Show the text if it's currently hidden
        }
    });
});

function startSlideShow() {
    slideInterval = setInterval(function () {
        changeSlide(1); // Change to the next slide every 2 seconds (changed from 3 to 2 seconds)
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

function sendMessageToWhatsApp(phoneNumber, pId) {
    var message = "Hello, I would like to order a course.";

    // Get the text content from the specified <p> element
    var additionalMessage = document.getElementById(pId).textContent;

    // Append the additional message to the main message
    message += " " + additionalMessage;

    // Replace spaces with %20 for URL
    message = encodeURIComponent(message);

    var url = "https://wa.me/" + phoneNumber + "?text=" + message;

    window.open(url, '_blank');
}

function changeDisplay() {
    var myDiv = document.getElementById('myDiv');
    myDiv.style.display = 'grid';
    myDiv.style.color = 'white';
    myDiv.style.fontStyle = 'italic';
    myDiv.style.padding = '10px';
    myDiv.style.fontSize = '20px'; // Added 'px' to specify units
    document.getElementById('button').style.display = 'none';
}

 /*let currentSlide = 1;
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


    
    function sendMessageToWhatsApp(phoneNumber, pId) {
        var message = "Hello, I would like to order course.";
      
        // Get the text content from the specified <p> element
        var additionalMessage = document.getElementById(pId).textContent;
      
        // Append the additional message to the main message
        message += " " + additionalMessage;
      
        // Replace spaces with %20 for URL
        message = encodeURIComponent(message);
      
        var url = "https://wa.me/" + phoneNumber + "?text=" + message;
      
        window.open(url, '_blank');
      }


      function changeDisplay() {
        document.getElementById('myDiv').style.display = 'grid';
        document.getElementById('myDiv').style.color = 'black';
        document.getElementById('myDiv').style.fontStyle = 'italic';
        document.getElementById('myDiv').style.fontWidth = 'bold';
        document.getElementById('myDiv').style.fontSize = '15'+'px';
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
     
     */ 