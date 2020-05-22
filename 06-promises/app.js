// A ARRAY WITH OBJECT POST
const posts = [{
    title: "Post One",
    description: "this is a test post for learning"
  },
  {
    title: "Post Two",
    description: "this is a test post for learning"
  },
  {
    title: "Post Three",
    description: "this is a test post for learning"
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


// CREATE POST FUNCTION WITH PROMISES
function createPost(post) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      posts.push(post);
      resolve()
    }, 1500);
  })
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
  description: 'This is a newer post for test'
}).then(getPosts)