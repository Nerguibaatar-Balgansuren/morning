 year = prompt ("жил оруулна уу?")
 month = prompt ("сар оруулна уу?")
 day = prompt ("өдөр оруулна уу?")




 month.length == 1 ? month = '0' + month : month = month;

day.length == 1 ? day = '0' + day : day = day;

var show = year + '-' + month + '-' + day

if ( month <= 12 == 0) {

} else {
    show = "month is wrong"
    console.error("month is not right");
}

if (day <= 31 == 0) {

} else {
    show = "day is wrong"
    console.error(
        "day is wrong"
    );
}
