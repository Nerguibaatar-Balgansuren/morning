menus = [
    {id:1, name:"home", href:""},
    {id:2, name:"contacts", href:""}
];

ulEl = document.createElement("ul");

mainEl = document.getElementById("main");

console.log(ulEl);

for (i = 0; i < menus.length; i++) {
   liEl = document.createElement("li");
   aEl = document.createElement("a");

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