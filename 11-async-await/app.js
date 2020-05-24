// async function hey() {
//   // return 'hey';

//   const promice = new Promise((resolve, reject) => {
//     setTimeout(() => resolve('hey'), 1000);
//   })

//   error = false;

//   if (!error) {
//     const res = await promice;
//     return res;
//   } else {
//     await Promise.reject(new Error('Somthing wrong I can feel it!'))
//   }
// }

// hey()
//   .then(res => console.log(res))
//   .catch(reject => console.log(reject))


// GET USER 
async function getUsere() {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');

  const data = await response.json();

  return data;
}

getUsere()
  .then(data => console.log(data));