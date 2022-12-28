// fetch("http://127.0.0.1:5500/JS%20Fetch%20test/data.html")
// .then((res) => res.json())
// .then((data) => {
// console.log(data);
// });

var img = new Image();
img.onload = function() {
  console.log('image loaded');
  document.querySelector('div.bg').style.backgroundImage = `url(${img.src})`
}
img.src = "https://picsum.photos/200/300?" + new Date().getTime();