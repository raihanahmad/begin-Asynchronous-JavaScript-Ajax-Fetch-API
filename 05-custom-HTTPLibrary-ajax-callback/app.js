const http = new HTTPLibrary;

// POSTS GET
http.get('https://jsonplaceholder.typicode.com/posts',
  function (erro, posts) {
    if (erro) {
      console.log(erro);
    } else {
      console.log(posts);
    }

  });