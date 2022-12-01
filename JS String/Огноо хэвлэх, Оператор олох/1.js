 year = prompt ("жил оруулна уу?")
 

 month = prompt ("сар оруулна уу?")
 day = prompt ("өдөр оруулна уу?")

yearNumber = Number(year);
monthNumber = Number(month);
dayNumber = Number(day);

month.length == 1 ? month = '0' + month : month = month;

day.length == 1 ? day = '0' + day : day = day;

var show = year + '-' + month + '-' + day

if (!Number.isInteger(yearNumber)) { 
alert("Ta jilee zov oruulna uu?")
    show = "Ta jilee zov oruulna uu?"
}   
 console.log(!monthNumber > 0);
console.log(!monthNumber < 12);

// 24 < 12 -> !false
// 2 < 12 -> true false




if (!Number.isInteger(monthNumber) || monthNumber < 0 || monthNumber > 12) {

    
    alert("Ta saraa zov oruulna uu?")
    show = "Ta saraa zov oruulna uu?" 
}

if (!Number.isInteger(dayNumber) || dayNumber < 0 || dayNumber > 31) {
    alert("Ta odrooo zov oruulna uu?")
    show = "Ta odroo zov oruulna uu?" 
}
