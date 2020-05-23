// TARGET BUTTON FROM UI
document.querySelector('.btn1').addEventListener('click', fetchText);

document.querySelector('.btn2').addEventListener('click', fetchJsonData);

document.querySelector('.btn3').addEventListener('click', fetchExternalAPI);

// FETCH TEXT FILE
function fetchText() {
  fetch('test.txt')
    .then(function (response) {
      return response.text();
    })
    .then(function (data) {
      console.log(data);
      document.getElementById('output').innerHTML = data;
    })
    .catch(function (err) {
      console.log(err);
    });
}

// FETCH FROM JSON FILE
function fetchJsonData() {
  fetch('posts.json')
    .then(function (response) {
      return response.json();
    })
    .then(function (posts) {
      let output = '';
      posts.forEach(function (post) {
        output += `<li>${post.title}</li>`;
      })
      document.getElementById('output').innerHTML = output;
    })
    .catch(function (err) {
      console.log(err);
    });
}

// FETCH EXTERNAL API
function fetchExternalAPI() {
  fetch('https://api.github.com/users')
    .then(function (response) {
      return response.json();
    })
    .then(function (users) {
      let output = '';
      users.forEach(function (user) {
        output += `<li>${user.login}</li>`;
      })
      document.getElementById('output').innerHTML = output;
    })
    .catch(function (err) {
      console.log(err);
    });
}