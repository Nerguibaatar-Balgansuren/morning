// fetch("https://randomuser.me/api")
//   .then((res) => res.json())
//   .then((data) => {
//     console.log(data);
//   });
let count = [];
async function getRandomUser() {
    const response = await fetch('https://randomuser.me/api/');
     return response.json();
  }

  getRandomUser()
    .then((res)=>{
        console.log(res)
        showUser (res.results[0]) 
    })
  .catch(err => console.log(err))


 
  
  getRandomUser();
function showUser (params) {
    document.getElementById('name').innerHTML = `${params.name.title} ${params.name.first} ${params.name.last}`;
    document.getElementById('email').innerHTML = params.email;
   
    // document.getElementById('phone').innerHTML = 
    // document.getElementById('phone').innerHTML = 
};

console.log(count);



// async function getRandomUser(params) {
//     try {
//         let res = await fetch("https://randomuser.me/api");
//         return await res.json();
//     } catch (error) {
//         console.log(error);
//     }
// }

// async function renderUsers() {
//     let users = await getRandomUser();
//     let html = '';
//     users.forEach(user => {
//         let htmlSegment = `<div class="user">
//                             <img src="${user.profileURL}" >
//                             <h2>${user.firstName} ${user.lastName}</h2>
//                             <div class="email"><a href="email:${user.email}">${user.email}</a></div>
//                         </div>`;

//         html += htmlSegment;
//     });

//     let container = document.querySelector('.container');
//     container.innerHTML = html;
// }

// renderUsers();

