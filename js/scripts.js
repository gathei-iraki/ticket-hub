function response() {
    var myName = $("input#name").val();
    var myEmail = $("input#email").val();
    var comment = $("input#message").val();
    alert(myName + ",we have received your message.Thank you for reaching out to us.");
    event.preventDefault();
    $('#name').val('');
    $('#email').val('');
    $('#textarea').val('');
  }
