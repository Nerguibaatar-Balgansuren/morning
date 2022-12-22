body = document.getElementsByTagName("body")[0];
main = document.getElementsByTagName("main")[0];
containerDiv = document.createElement("div");
containerDiv.classList.add("container");
title = document.createElement("h2");
title.classList.add("title");
title.innerHTML = "To Do List";

date = document.createElement("div");
date.classList.add("date");
form = document.createElement("form");
form.classList.add("form");
input = document.createElement("input");
input.type = "text";
input.placeholder = "Таскаа оруулна уу?"
input.classList.add("input");
button = document.createElement("button");
button.classList.add("button");
button.innerHTML = "Хадгалах";
listTitle = document.createElement("h2");
listTitle.classList.add("listTitle");
list = document.createElement("div");
list.classList.add("list");

lItems = []

itemName = document.createElement("h3");
itemName.classList.add("itemName");
itemEdit = document.createElement("h3");
itemEdit.classList.add("itemEdit");
itemDone = document.createElement("h3");
itemDone.classList.add("itemDone");
itemDel = document.createElement("h3");
itemDel.classList.add("itemDel");



button.addEventListener("click", add);
input.addEventListener("enter", add);

function add(event) {

   lItems.push(input.value);

   localStorage.setItem(lItems)

   input.value = "";

   // event.preventDefault();

   

   console.log(lItems);


//   let  lItem = document.createElement("div");
//     lItem.classList.add("lItem", "flex");
    
//     lItem.innerHTML = input.value;
//     lItem.id = "1"

//     list.appendChild(lItem)
    
}

console.log(lItems[0]);

containerDiv.appendChild(title);
containerDiv.appendChild(date);
containerDiv.appendChild(form);
containerDiv.appendChild(listTitle);
// containerDiv.appendChild(list);
form.appendChild(input);
form.appendChild(button);

containerDiv.appendChild(list)

main.appendChild(containerDiv);




