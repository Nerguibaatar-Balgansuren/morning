

let arrProducts = [];
let proEl = document.getElementById("products")
let headEl = document.getElementById("head")


function getData() {

    fetch("https://dummyjson.com/products")
    .then(response=> response.json())
    .then(data=>{
        console.log(data);
        arrProducts = [...data.products]
        drawHTML();
    })
    .catch((err=>console.log(err)))
}

getData();



function drawHTML() {

    console.log(arrProducts);

let row = ""
    arrProducts.map((product)=>{
        // console.log(product.title);

        row += `<div class="col-md-3"> <div class="card" style="width: 18rem;">
        <img src="${product.thumbnail}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${product.title}</h5>
          <p class="card-text">${product.price}</p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>
      </div> `;
        // console.log(row);
    })  

    proEl.innerHTML = row;
}

// function searchData() {
//     fetch("https://dummyjson.com/products/categories")
//     .then(response=> response.json)
//     .then(data=>{
//         console.log(data);
//         category = [...data]
//     })
//     .catch((err=>console.log(err)))
// }

// searchData();


fetch("https://dummyjson.com/products/categories")
    .then(response=> response.json)
    .then(data=>{
        console.log(data);
        // category = [...data]
    })
    .catch((err=>console.log(err)))

// let row = ""
//     arrProducts.map((product)=>{
//         // console.log(product.title);

//         row += `<div class="col-md-3"> <div class="card" style="width: 18rem;">
//         <img src="${product.thumbnail}" class="card-img-top" alt="...">
//         <div class="card-body">
//           <h5 class="card-title">${product.title}</h5>
//           <p class="card-text">${product.price}</p>
//           <a href="#" class="btn btn-primary">Go somewhere</a>
//         </div>
//       </div>
//       </div> `;
//         // console.log(row);
//     })  

//     proEl.innerHTML = row;
// }