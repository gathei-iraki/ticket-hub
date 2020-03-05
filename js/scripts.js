$("form#contactform").submit(function(event){
    event.preventDefault();
    var name = $("#name").val();
    var email = $("#email").val();
    var mess = $("#message").val();
    alert("Hello " + name + " ,Thank You for booking with Us. Have a safe journey");
    });