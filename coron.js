 
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
  
