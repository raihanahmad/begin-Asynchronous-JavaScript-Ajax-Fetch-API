const http = new HTTPLibrary();

// // POSTS GET
// http.get('https://jsonplaceholder.typicode.com/posts',
//   function (erro, posts) {
//     if (erro) {
//       console.log(erro);
//     } else {
//       console.log(posts);
//     }

//   });

// CREATE POST DATA
const data = {
  title: "This is fictional post title",
  body: "This is a fictional post description",
};

// http.post("https://jsonplaceholder.typicode.com/posts", data, function (
//   err,
//   post
// ) {
//   if (err) {
//     console.log(err);
//   } else console.log(post);
// });

// // UPDATE POST
// http.put("https://jsonplaceholder.typicode.com/posts/10", data, function (
//   err,
//   put
// ) {
//   if (err) {
//     console.log(err);
//   } else console.log(put);
// });

// DELETE POST
http.delete("https://jsonplaceholder.typicode.com/posts/1", function (
  erro,
  respose
) {
  if (erro) {
    console.log(erro);
  } else {
    console.log(respose);
  }
});
