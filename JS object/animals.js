animals = [
  { type: "dog", sound: "woof" },
  { type: "cow", sound: "moo" },
  { type: "cat", sound: "meow" },
  { type: "fox", sound: "Ring-ding-ding-ding-dingeringeding!" },
];

input = prompt("amitnii neriig angliar bichne uu?");

function sounds() {
  for (i = 0; i < animals.length; i++) {
    if (input.includes(animals[i].type) == true) {
      console.log(animals[i].sound);
      break;
      // }
      // if else {

      // }
      // else {
      //     console.log("oor ner bicheed uzne uu?");
      // }
    }
  }
}
// console.log(animals[0].type);
sounds();
