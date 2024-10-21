const alertBtn = document.getElementById('alertBtn');
const darkModeToggle = document.getElementById('darkModeBtn');
const chaosBtn = document.getElementById('chaosBtn');
const catBtn = document.getElementById('catBtn');
const catFactDisplay = document.getElementById('catFact');

alertBtn.addEventListener('click', function() {
  alert('näih');
});

darkModeToggle.addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
});

chaosBtn.addEventListener('click', function() {
    Chaos();
});

catBtn.addEventListener('click', function() {
    fetchCatFact();
});


function Chaos() {
    let id = null;
    const pageHeight = document.body.scrollHeight;
    const elem = document.getElementById("chaosBtn");   
    let pos = 0;
    clearInterval(id);

    id = setInterval(frame, 1);
    function frame() {
      if (pos >= pageHeight - elem.offsetHeight) {
        clearInterval(id);
      } 
      else {
        pos++; 
        elem.style.top = pos + "px";  
      }
    }
  }

  function fetchCatFact() {
    catBtn.disabled = true;
    catBtn.textContent = 'Cat fact loading...';
    catBtn.classList.add('loading');

    fetch('https://meowfacts.herokuapp.com/')
      .then(response => response.json())
      .then(data => {
        catFactDisplay.textContent = data.data[0];
      })
      .catch(error => {
        console.error('Error fetching the cat fact:', error);
        catFactDisplay.textContent = 'Oops! Could not fetch a cat fact. Please try again.';
      })
      .finally(() => {
        setTimeout(() => {
            catBtn.disabled = false;
            catBtn.textContent = 'Want to hear a cat fact?';
            catBtn.classList.remove('loading');
        }, 30000);
    });
  }
