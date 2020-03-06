function getTotalAmount() {
  prompt("Enter your name");
  prompt("Enter your paybill no");
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
