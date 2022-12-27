let main = document.getElementById("main")


fetch('https://dummyjson.com/products')
.then(res => res.json())
.then((data) => {
    products = data;
    // drawHTML();
    // fillRegion();
    console.log(products);
})
.catch(console.log("error"))

// const drawHTML = filteredData => main.innerHTML;

function drawHTML(filteredData) {
    let row = "";
    main.innerHTML = "";
  
    if (products == 0) {
      console.log("data hooson bna");
    }
  
    (filteredData
      ? filteredData.length == 0
        ? []
        : filteredData
      : products
    ).map((products) => {
      row += `<div class="col"> 
    <a href="./products.html?productsname='${products.title}'&category=${products.category}">
      <h6> ${products.title}</h6>
    </a>
    <span class="txt">${products.price}</span><br/>
    <span class="txt"> ${products.description}</span>
  </div>`;
    });

    total.innerHTML = filteredData ? filteredData.length : products.length;
    main.innerHTML = row;
}

fetch('https://dummyjson.com/products/categories')
.then(res => res.json())
.then(console.log);
