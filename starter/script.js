
// This code display the current day at the top of the calender.

let $currentDay = $("#currentDay")
setInterval(
    function () {


        $currentDay.text(moment().format("dddd, MMMM Do"));
    }, 1000)


//    $("#dateInput").datepicker();

let row = $(".row")


// this code appends the css present tag to a row when the current time is the same as th row hour
let $currentTime = moment().format("h");

 console.log($currentTime)



let $selectedId = $("#"+ $currentTime);

console.log($selectedId)

$selectedId.addClass("present");


// this code appends the css past tag to a row when the current time is later









// this code appends the css present tag to a row when the current time is the same as th row hour

// this code appends the css future tag to a row when the current time is earlier than the row hour