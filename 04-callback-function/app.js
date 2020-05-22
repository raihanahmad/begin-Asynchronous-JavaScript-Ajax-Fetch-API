// A ARRAY WITH OBJECT POST
const posts = [{
    title: "Post One",
    description: "this is a test post for learning callback function"
  },
  {
    title: "Post Two",
    description: "this is a test post for learning callback function"
  },
  {
    title: "Post Three",
    description: "this is a test post for learning callback function"
  }
];

// // SIMPLE CALLBACK FUNCTION SYNCHRONOUS
// function createPost(post) {
//   setTimeout(function () {
//     posts.push(post);
//   }, 3000);
// }

// // GET POST FUNCTION
// function getPosts() {
//   setTimeout(function () {
//     let output = '';
//     posts.forEach(function (post) {
//       output += `
//       <h2>${post.title}</h2>
//       <li>${post.description}</li>
//     `;
//     });

//     document.body.innerHTML = output;
//   }, 1000);
// }

// // CALL BOTH OF FUNCTIONS
// createPost({
//   title: "Newer Post",
//   description: 'this is a newer post for test'
// });

// getPosts();


// SIMPLE CALLBACK FUNCTION ASYNCHRONOUS
function createPost(post, callback) {
  setTimeout(function () {
    posts.push(post);
    callback();
  }, 500);
}

// GET POST FUNCTION
function getPosts() {
  setTimeout(function () {
    let output = '';
    posts.forEach(function (post) {
      output += `
      <h2>${post.title}</h2>
      <li>${post.description}</li>
    `;
    });

    document.body.innerHTML = output;
  }, 1000);
}

// CALL BOTH OF FUNCTIONS
createPost({
  title: "Newer Post",
  description: 'this is a newer post for test'
}, getPosts);