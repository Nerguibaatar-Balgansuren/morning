let menus = [
    {id:1, name:"home", href:""},
    {id:2, name:"contacts", href:""}
];

let ulEl = document.createElement("ul");

let mainEl = document.getElementById("main");

// console.log(mainEl);

for (let i = 0; i < menus.length; i++) {
   let liEl = document.createElement("li");
   let aEl = document.createElement("a");

    // console.log(liEl);
    // console.log(aEl);
        aEl.innerHTML = menus[i].name;
        aEl.href = menus[i].href;
        // console.log(liEl);
        // console.log(aEl);

        liEl.appendChild(aEl);
        ulEl.appendChild(liEl);
        
};

mainEl.appendChild(ulEl);