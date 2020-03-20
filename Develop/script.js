var hoursData = {
    '9': '',
    '10': '',
    '11': 'testing',
    '12': '',
    '13': '',
    '14': '',
    '15': '',
    '16': '',
    '17': ''
};

// var items = Object.keys(hoursData);
// for (var key of items){
//     console.log(key);
// }
// check localStorage for hours data
moment().format();
// update hoursDay if localStorage for hours data isn't empty
//get value of user input
//save user input into hoursData object when save button is clicked
//save user input to local storage when save button is clicked
var hoursDataUpdate = localStorage.getItem("hoursData");
var textAreaDescription = document.querySelector(".textArea")

$("time-block").each(function () {
    $(".saveBtn").on("click", function () {
        console.log(this);
        if (textAreaDescription === "") {
            hoursData[""] = textAreaDescription;
            localStorage.setItem("hoursData", JSON.stringify(hoursDataUpdate));
        }
    });
});
// how to determine if time is future/present/past
// let currentHour be the hour of the current time of day
var currentHour = parseInt(moment().format(""));
// get reference to all the hours
var timeBlockElements = $(".time-block");
// for each hour
timeBlockElements.each(function () {
    // get the hour of the block
    // console.log(this);
    var timeBlockHour = parseInt(this.id.split("-")[1]);
    // get description from hoursData
    var description = hoursData[timeBlockHour.toString()];
    // display the description
    $(this)
        .find("textarea")
        .val(description);
    // console.log(timeBlockHour, currentHour);
    if (timeBlockHour < currentHour) {
        $(this).addClass("past");
    } else if (timeBlockHour === currentHour) {
        //   give present class to the hour
        $(this).addClass("present");
    } else {
        //   give future class to the hour
        $(this).addClass("future");
    }
});



