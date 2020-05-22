// CUSTOM HTTP LIBRARY
function HTTPLibrary() {
  this.http = new XMLHttpRequest;
}

// CREATE A HTTP GET REPUEST
HTTPLibrary.prototype.get = function (url, callback) {
  this.http.open('GET', url, true);
  let self = this;

  this.http.onload = function () {
    if (self.http.status === 2000) {
      callback(null, self.http.responseText);
    } else {
      callback(`Error: ${self.http.status}`);
    }
  }

  this.http.send();
}

// CREATE A HTTP POST REPUEST

// CREATE A HTTP PUT REPUEST

// CREATE A HTTP DELETE REPUEST