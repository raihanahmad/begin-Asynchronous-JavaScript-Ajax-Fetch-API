// CUSTOM HTTP LIBRARY
function HTTPLibrary() {
  this.http = new XMLHttpRequest();
}

// CREATE A HTTP GET REPUEST
HTTPLibrary.prototype.get = function (url, callback) {
  this.http.open("GET", url, true);
  let self = this;

  this.http.onload = function () {
    if (self.http.status === 200) {
      callback(null, self.http.responseText);
    } else {
      callback(`Error: ${self.http.status}`);
    }
  };

  this.http.send();
};

// CREATE A HTTP POST REPUEST
HTTPLibrary.prototype.post = function (url, data, callback) {
  this.http.open("POST", url, true);
  this.http.setRequestHeader("Content-type", "application/json");

  const self = this;
  this.http.onload = function () {
    callback(null, this.responseText);
  };

  this.http.send(JSON.stringify(data));
};

// CREATE A HTTP PUT REPUEST
HTTPLibrary.prototype.put = function (url, data, callback) {
  this.http.open("PUT", url, true);
  this.http.setRequestHeader("Content-type", "application/json");

  const self = this;
  this.http.onload = function () {
    callback(null, this.responseText);
  };

  this.http.send(JSON.stringify(data));
};

// CREATE A HTTP DELETE REPUEST
HTTPLibrary.prototype.delete = function (url, callback) {
  this.http.open("DELETE", url, true);
  let self = this;

  this.http.onload = function () {
    if (self.http.status === 200) {
      callback(null, "POST DELETED");
    } else {
      callback(`Error: ${self.http.status}`);
    }
  };

  this.http.send();
};
