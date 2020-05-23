// TARGET BUTTON FROM UI
document.querySelector('.btn1').addEventListener('click', fetchText);

document.querySelector('.btn2').addEventListener('click', fetchJsonData);

document.querySelector('.btn3').addEventListener('click', fetchExternalAPI);

// FETCH TEXT FILE
function fetchText() {
  fetch('test.txt')
    .then(response => response.text())
    .then((data) => {
      console.log(data);
      document.getElementById('output').innerHTML = data;
    })
    .catch(err => console.log(err));
}

// FETCH FROM JSON FILE
function fetchJsonData() {
  fetch('posts.json')
    .then(response => response.json())
    .then((posts) => {

      let output = '';

      posts.forEach(post => output += `<li>${post.title}</li>`)

      document.getElementById('output').innerHTML = output;
    })
    .catch(err => console.log(err));
}

// FETCH EXTERNAL API
function fetchExternalAPI() {
  fetch('https://api.github.com/users')
    .then(response => response.json())
    .then(users => {
      let output = '';
      users.forEach(user => output += `<li>${user.login}</li>`)
      document.getElementById('output').innerHTML = output;
    })
    .catch(err => console.log(err));
}