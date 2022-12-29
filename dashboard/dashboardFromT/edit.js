let btnEl = document.getElementById("btn");
let titleEl = document.getElementById("title");
let catEl = document.getElementById("category");
let priceEl = document.getElementById("price");
let fileEl = document.getElementById("image");

let radio = document.getElementsByName("isSpecial");
let checkMul = document.getElementsByName("days");

btnEl.addEventListener("click", onSave);

function onSave(e) {
    event.preventDefault();

    
}



function initFunc() {
    let location = window.location.search:

    let urlParams = new URLSearchParams(location);
    let id = urlParams.get("id");



    fetch(`http://localhost:4040/product/${id}`)
    .then((res) => res.json())
    .then((data) => {
        titleEl.value = data.product.title;
        catEl.value = data.product.category;
        priceEl.value = data.product.price;

        let str = data.product.isSpecial ? "yes" : "no";

        for (let i = 0; i < radio.length; i++) {
            if(radio[i].value == str {
                radio[i]
            })
            
        }

    })
}