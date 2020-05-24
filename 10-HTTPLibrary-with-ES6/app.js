// NEW OBJECT
const http = new HTTPLibrary;

// // GET REQUEST
// http.get('https://jsonplaceholder.typicode.com/users')
//   .then(data => console.log(data))
//   .catch(err => console.log(err));

// DATA
const post = {
  name: "Raihan Ahmad",
  email: 'dev.raihanahmad@gmail.com'
}

// // POST REQUEST
// http.post('https://jsonplaceholder.typicode.com/users', post)
//   .then(data => console.log(data))
//   .catch(err => console.log(err));

// // PUT REQUEST
// http.put('https://jsonplaceholder.typicode.com/users/2', post)
//   .then(data => console.log(data))
//   .catch(err => console.log(err));


// DELETE REQUEST
http.delete('https://jsonplaceholder.typicode.com/users/5')
  .then(data => console.log(data))
  .catch(err => console.log(err));