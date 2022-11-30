var firstName = prompt("нэр");
var lastName = prompt("овог");
var age = prompt(" нас"); 

var letterDiff 

if ( firstName.length == lastName.length) {
    letterDiff = "Тэнцүү урттай"
    
} else if (firstName.length > lastName.length) {
 letterDiff = "Нэр нь урт"
    
} else if (firstName.length < lastName.length) {
    letterDiff = "Овог нь урт"
} else {
    letterDiff = "Алдаа"
    console.error();
}

//2.

letterDiffLower = letterDiff.toLowerCase() + "(жижгээр)";

//3.

letterDiffUpper = letterDiff.toUpperCase() + "(ТОМООР)";

//4.
let pine = "pinecone academy-н" ;
let leap = "leap хөтөлбөрт тавтай морилго уу?" ;

let welcome = pine.concat(" " + leap) ;

//5.
var country = prompt("Улсаа оруулна уу?");
var city = prompt("Хотоо оруулна уу?"); 
var district = prompt("Дүүрэгээ оруулна уу?"); 
var priority = `${'намайг'}${country}`
console.log (priority)
var sentence = ("Намайг " + firstName + " гэдэг." + " Би " + age + " настай." + " Би " + country + " улсын " + city + " хотын " + district + " дүүрэгт амьдардаг.")

//6. 
console.log(`1 2 3 4 5`, `\n`, `2 3 4 5 1`, `\n`, `3 4 5 1 2`, `\n`, `4 5 1 2 3`, `\n`, `5 1 2 3 4`);


