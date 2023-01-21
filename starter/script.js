
// This code display the current day at the top of the calender.

let $currentDay = $("#currentDay")
setInterval(
    function () {


        $currentDay.text(moment().format("dddd, MMMM Do"));
    }, 1000)


//    $("#dateInput").datepicker();

let row = $(".row")
let $currentTime = moment().format("h")

// this code appends the css past tag to a row when the current time is later

 console.log($currentTime)



let $selectedId = $("#"+ $currentTime)

console.log($selectedId)

//$("#"+ $currentTime + "> .childDiv").addClass("present");

$selectedId.addClass("present")






    //".col-1 hour".parent().append(".present")}





// this code appends the css present tag to a row when the current time is the same as th row hour

// this code appends the css future tag to a row when the current time is earlier than the row hour