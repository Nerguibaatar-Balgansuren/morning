fetch("http://127.0.0.1:5500/JS%20Fetch%20test/data.html")
.then((res) => res.json())
.then((data) => {
console.log(data);
});