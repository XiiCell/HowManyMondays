/**
 * Created by Shawn on 6/14/2014.
 */

function howManyMondays() {
var x = 0,
    m = 1 + parseInt($("#ui-datepicker-div .ui-datepicker-month :selected").val(),10) || 5,
    y = $("#ui-datepicker-div .ui-datepicker-year :selected").val() || 2014,
    html="",
    ds = new Date(y, m - 1, 1).getDay(),
    de = new Date(y, m, 0).getDay(),
    dz = [' Sun', ' Mon', ' Tue', ' Wednes', ' Thurs', ' Fri', ' Satur'];

for (; x <= 6; x++) {
    html+="There are " + (x >=ds & x<=de & (ds+6 !== de) ? "5" : "4") + dz[x] + "days in " + m + "/" + y + "<br/>"   ;
}

document.getElementById("out").innerHTML=html;
};