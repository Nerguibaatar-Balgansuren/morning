shoppingCart = ["Milk", "Coffee", "Tea", "Honey"];

isAllergicTo = prompt("Ta daraah buteegdehuunuudiin ali negees harshiltai bol neriig ni bichne uu? " + shoppingCart);

isAllergicToSplitted = isAllergicTo.split()

shoppingCartString = shoppingCart.toString()

shoppingCartStringReplaced = shoppingCartString.replaceAll(isAllergicTo)

console.log(shoppingCartStringReplaced);

shoppingCartReplaced = shoppingCartStringReplaced.split(" ")

// if (shoppingCart.indexOf(isAllergicTo) == -1)

console.log(shoppingCartReplaced)