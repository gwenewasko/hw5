// Global variables

// Functions
// Save task to local storage
function saveTask() {
  console.log($(this).parent());
  const time = $(this).parent().attr("id");
  const task = $(this).siblings("textArea").val();
  localStorage.setItem(time, task);
}

// Color change based on hour of day
function timeColorChange() {
  const now = moment().hour();
  $(".js-row").each(function () {
    const row = $(this);
    const rowHour = row.data("hour");
    console.log(rowHour);
    if (rowHour < now) {
      $(this).addClass("past");
    } else if (rowHour === now) {
      $(this).addClass("present");
    } else {
      $(this).addClass("future");
    }
  });
}

// Event Listeners

// Show current date
$("#currentDay").text(moment().format("MMMM Do, YYYY"));

// Grab tasks from local storage
$("#hour9 .js-task").val(localStorage.getItem("hour9"));
$("#hour10 .js-task").val(localStorage.getItem("hour10"));
$("#hour11 .js-task").val(localStorage.getItem("hour11"));
$("#hour12 .js-task").val(localStorage.getItem("hour12"));
$("#hour13 .js-task").val(localStorage.getItem("hour13"));
$("#hour14 .js-task").val(localStorage.getItem("hour14"));
$("#hour15 .js-task").val(localStorage.getItem("hour15"));
$("#hour16 .js-task").val(localStorage.getItem("hour16"));
$("#hour17 .js-task").val(localStorage.getItem("hour17"));
$("#hour18 .js-task").val(localStorage.getItem("hour18"));
$("#hour19 .js-task").val(localStorage.getItem("hour19"));

// User clicks save button
$(".js-btn").on("click", saveTask);
timeColorChange();
