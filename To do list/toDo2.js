main = document.getElementsByTagName("main")[0];
main.innerHTML = `<div class="section1">
<h1>Todo List</h1>
<div class="ognooRow"></div>
<form action="">
  <input type="text" placeholder="Таскаа оруулна уу?" />
  <button>+Нэмэх</button>
</form>
</div>
<div class="section2">
<h1>Жагсаалт</h1>
<div class="list">
    <div class="lItem">
        <div class="lName"></div>
        <div class="lOptions"></div>
    </div>
</div>
</div>`;

lItem = []

button = document.getElementsByTagName("button")[0];
button.addEventListener("click", add);
function add(event) {


    event.preventDefault();
 
    // localStorage.setItem()


 
 
   let  lItem = document.createElement("div");
     lItem.classList.add("lItem", "flex");
     
     lItem.innerHTML = input.value;
     lItem.id = "1"
 
     list.appendChild(lItem)
     
 }