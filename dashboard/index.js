let table = document.getElementById("productList");


function getData(params) {
    fetch("http://192.168.1.198:4040/product", {mode: "no-cors"}) 
    .then(response=>response.json())
    .then((data) => {
        console.log(data);
    })
    .catch((err) => console.log(err));
}

getData();

    function drawHTML(params) {
        
    }
