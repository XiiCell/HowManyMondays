/**
 * Created by Shawn on 6/14/2014.
 */

function howManyMondays() {
    var dg = function (id) {
            return document.getElementById(id);
        },
        x = 0,
        m = 1 + parseInt($("#ui-datepicker-div .ui-datepicker-month :selected").val(), 10) || 1,
        y = $("#ui-datepicker-div .ui-datepicker-year :selected").val() || 2014,
        dda = new Date(y, m - 1, 29),
        dz = ['4 Sun', '4 Mon', '4 Tue', '4 Wednes', '4 Thurs', '4 Fri', '4 Satur'];

    for (; dda.getMonth() === m - 1; dda.setDate(dda.getDate() + 1)) {
        dz[dda.getDay()] = 5 + dz[dda.getDay()].substr(1, 10);
    }

    for (; x <= 6; x++) {
        dg("out").innerHTML += "There are " + dz[x] + "days in " + m + "/" + y + "<br/>";
    }
}