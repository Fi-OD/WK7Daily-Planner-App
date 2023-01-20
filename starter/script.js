
// This code display the current day at the top of the calender.

let $currentDay = $("#currentDay")
setInterval(
    function () {


        $currentDay.text(moment().format("Do MMMM YYYY"));
    }, 1000)


//    $("#dateInput").datepicker();