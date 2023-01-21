
// This code display the current day at the top of the calender.

let $currentDay = $("#currentDay")
setInterval(
    function () {


        $currentDay.text(moment().format("dddd, MMMM Do"));
    }, 1000)



// this code appends the css present tag to a row when the current time is the same as th row hour
let $currentTime = moment().format("H");

//let $currentTime = 10
 console.log($currentTime)

let $selectedId = $("#"+ $currentTime);
console.log($selectedId)

$selectedId.addClass("present");


// this code appends the css past tag to a row when the current time is later

$("[id]").each(function(){
    let $pastId = parseInt($(this).attr("id"));
    console.log($pastId)
  if($currentTime > $pastId){
    $(this).addClass("past");
  }
});

// this code appends the css future tag to a row when the current time is earlier than the row hour

$("[id]").each(function(){
    let $futureId = parseInt($(this).attr("id"));
    console.log($futureId)
  if($currentTime < $futureId){
    $(this).addClass("future");
  }
});

// Save the event in local storage when the save button is clicked.


// Persist events between refreshes of a page


