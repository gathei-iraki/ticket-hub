function giveSelectedDate() {
    var year = parseInt(document.getElementById("year").value);
    var month = parseInt(document.getElementById("month").value);
    var day = parseInt(document.getElementById("day").value);
    // var gender = getGender();
    var date = new Date(year + "/" + month + "/" + day);
    var dayBorn = date.getDay();

    if (year <= 0) {
        alert("please enter a valid year");
    } else if (month <= 0 || month > 12) {
        alert("month is between 1 and 12");
    } else if (day <= 0 || day > 31) {
        alert("Date is between 1 and 31");
    } else if (validate == false) {
        alert("try again wrong input!!");
    }
    if (selectedDate === "any number" && year > 0 && month > 0 && month < 13 && day > 0 && day < 32) {
        selectedDate = dayOfTheWeek[daySelected];
        alert("Your travel date is " + dayOfTheWeek[daySelected] + " Thank you for choosing ticket-hub");


function getTotalAmount() {
  prompt("Enter your name");
  prompt("Enter your pay bill")
  prompt("enter your business no");
    prompt("enter your business no");
    prompt("enter your account no.");
    prompt("enter your mpesa pin");
    alert("Thank you for booking with us");
    alert("will send you your ticket number to your email address. ");
    alert("");
  };
   $("form#contactform").submit(function(event){
    event.preventDefault();
    var name = $("#name").val();
    var email = $("#email").val();
    var mess = $("#message").val();
    alert("Hello " + name + " ,Thank You for booking with Us. Have a safe journey");
    });
