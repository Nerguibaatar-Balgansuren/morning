let btnEl = document.getElementById("btn");
let titleEl = document.getElementById("title");
let catEl = document.getElementById("category");
let priceEl = document.getElementById("price");
let fileEl = document.getElementById("image");

let radio = document.getElementsByName("isSpecial");
let checkMul = document.getElementsByName("days");

btnEl.addEventListener("click", onSave);

function onSave(e) {

    e.preventDefault();
    let ispe = false;
    let daysStr = "";
    for (let i = 0; i < radio.length; i++) {
        console.log(radio[i]);
        if(radio[i].checked) {
            console.log(radio[i].value);
            ispe = radio[i].value == "yes" ? true : false;
        }
    }

    for (let i = 0; i < checkMul.length; i++) {
        console.log(radio[i]);
        if(checkMul[i].checked) {
            console.log(radio[i].value);
            daysStr += checkMul[i].value + ",";
        }
    }

    console.log(dayStr);

    fetch("http://192.168.1.198:4040/product", {
        method: "POST",
        headers: { "Content-Type": "application/json"},
        body: JSON.stringify({
            title: titleEl.value,
            category: catEl.value,
            price: priceEl.value,
            image: "test",
            isSpecial: true,
            days: "",
        }),
    }).then((res) => res.json())
    .then((data) => {
        window.location.href = "./index.html"
    })
    
}