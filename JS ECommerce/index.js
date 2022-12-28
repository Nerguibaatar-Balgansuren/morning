let main = document.getElementById("main")


function getData() {
    fetch('https://dummyjson.com/products')
.then(res => res.json())
.then((data) => {
    products = [...data.products]
    // drawHTML();
    // fillRegion();
    console.log(products);
    showMain();
})
.catch(console.log("error"))

}
getData();

function showMain(params) {
   let row = ""
    products.map((product)=>{
        // console.log(product.title);

        row += `<div class="col-md-3"> <div class="card" style="width: 18rem;">
        <img src="${product.thumbnail}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${product.title}</h5>
          <p class="card-text">${product.price}$</p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>
      </div> `;
        // console.log(row);
    })  

    main.innerHTML = row;
}
// };


// const drawHTML = filteredData => main.innerHTML;

// function drawHTML(filteredData) {
//     let row = "";
//     main.innerHTML = "";
  
//     if (products == 0) {
//       console.log("data hooson bna");
//     }
  
//     (filteredData
//       ? filteredData.length == 0
//         ? []
//         : filteredData
//       : products
//     ).map((products) => {
//       row += `<div class="col"> 
//     <a href="./products.html?productsname='${products.title}'&category=${products.category}">
//       <h6> ${products.title}</h6>
//     </a>
//     <span class="txt">${products.price}</span><br/>
//     <span class="txt"> ${products.description}</span>
//   </div>`;
//     });

//     total.innerHTML = filteredData ? filteredData.length : products.length;
//     main.innerHTML = row;
// }

function fetchCategories(params) {
    fetch('https://dummyjson.com/products/categories')
.then(res => res.json())
.then(console.log);
}

