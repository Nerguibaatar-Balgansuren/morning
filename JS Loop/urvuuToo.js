
var too = prompt("toogoo oruulna uu?");

var result = ""

var oron = too.length

ispalendrom = ""

while (oron >= 0) {
    result = result + too.substring(oron - 1, oron )
    oron--

}

if (too == result) {
    ispalendrom = "palendrom"
} else {
    ispalendrom = "not palendrom"
}

console.log(result);
console/log(ispalendrom);