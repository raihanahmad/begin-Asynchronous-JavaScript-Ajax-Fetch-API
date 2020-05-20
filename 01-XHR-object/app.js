// TARGET UI ELEMENT AND ADD EVENT
document.getElementById('btn').addEventListener('click', loadXHR);

// CREATE LOADXHR FUNCTION
function loadXHR(e) {

  // CREATE NEW INSTANCE OBJECT
  const xhr = new XMLHttpRequest();

  // OPEN FILE
  xhr.open('GET', 'content.txt', true);

  // FOR LOADING OR SOMETHIN LIKE THAT
  xhr.onprogress = function () {
    console.log("loading....", xhr.readyState);
  }

  // LOAD FILE
  xhr.onload = function () {
    if (this.status === 200) {
      // CREATE UI ELEMENT and ADD CONTENT
      document.getElementById('text-content').innerText = this.responseText;
    }
  }

  // // BEFORE ONLOAD PROPERTY
  // xhr.onreadystatechange = function () {

  //   if (this.status === 200 && this.readyState === 4) {
  //     console.log(this.responseText);
  //   }
  // }

  // FOR ERROR
  xhr.onerror = function () {
    console.log("Error....");

  }


  // CALL SEND
  xhr.send();

  e.preventDefault();
}