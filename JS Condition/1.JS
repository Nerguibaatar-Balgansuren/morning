let year = prompt("Жилээ оруулна уу?");

let highOrLow ;

if (year % 400 == 0 ) {
    console.log("Өндөр жил");
}  else if (year % 100 == 0) {
    console.log("Өндөр жил биш");
}  else if (year % 4 == 0) {
    console.log("Өндөр жил");
} else {
    console.log("Өндөр жил биш");
}
