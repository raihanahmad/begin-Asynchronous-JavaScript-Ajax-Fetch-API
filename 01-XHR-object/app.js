// TARGET UI ELEMENT AND ADD EVENT
document.getElementById('btn').addEventListener('click', loadXHR);

// CREATE LOADXHR FUNCTION
function loadXHR(e) {
  // CREATE NEW INSTANCE OBJECT
  const xhr = new XMLHttpRequest();

  // OPEN FILE
  xhr.open('GET', 'content.txt', true);

  // LOAD FILE
  xhr.onload = function () {
    if (this.status === 200) {
      console.log(this.responseText);
    }
  }

  e.preventDefault();
}