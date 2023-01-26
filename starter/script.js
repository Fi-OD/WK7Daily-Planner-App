
// This code display the current day at the top of the calender.

let $currentDay = $("#currentDay")
setInterval(
    function () {
        $currentDay.text(moment().format("dddd, MMMM Do"));
    }, 1000)

// this code appends the css present tag to a row when the current time is the same as th row hour
let $currentTime = moment().format("H");

//let $currentTime = 10
// console.log($currentTime)

let $selectedId = $("#"+ $currentTime);
//console.log($selectedId)

$selectedId.addClass("present");


// this code appends the css past tag to a row when the current time is later

$("[id]").each(function(){
    let $pastId = parseInt($(this).attr("id"));
  //  console.log($pastId)
  if($currentTime > $pastId){
    $(this).addClass("past");
  }
});

// this code appends the css future tag to a row when the current time is earlier than the row hour

$("[id]").each(function(){
    let $futureId = parseInt($(this).attr("id"));
//    console.log($futureId)
  if($currentTime < $futureId){
    $(this).addClass("future");
  }
});

// The following code saves the inputted event description when the button is clicked

let $saveButton =$("button");
$saveButton.on('click',function (){

  let $btnId = this.id;
  //console.log($btnId);

// this code selects the text inputted to the associated save button and stores it in a variable
  let $eventDescription = $(this).siblings("textarea");
  let $text = $eventDescription.val();
//console.log($text);

  localStorage.setItem("userText", $text)
  localStorage.getItem("userText");
    });


  ;






  //localStorage.getItem($buttonId)
  //console.log($eventDescription)



// retrieve the text from the container and store it in a variable




// storage.local.set()



/*let $textInput = []
 $textInput.attr("textarea") 

$("textarea").val();
console.log($textInput);
*/

// Persist events between refreshes of a page


