
// This code display the current day at the top of the calender.

let $currentDay = $("#currentDay")
setInterval(
    function () {


        $currentDay.text(moment().format("Do MMMM YYYY"));
    }, 1000)


//    $("#dateInput").datepicker();


// this code adds the css past tag to a row when the current time is later

// this code add the css present tag to a row when the current time is the same as th row hour

// this code adds the css future tag to a row when the current time is earlier than the row hour