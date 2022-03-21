
function sendEmail() {
  Email.send({
    Host: "smtp.gmail.com",
    Username: "stebinsteel@gmail.com",
    Password: "stebinmathew",
    To: 'stebinsteel@gmail.com',
    /*Cc: 'albintharayil123@gmail.com',*/
    From : document.getElementById("email").value,
    Subject: "New Enquiry on Contact Form",
    Body : "Name: " + document.getElementById("name").value
          + "<br> Email: " + document.getElementById("email").value
          + "<br> Message: " + document.getElementById("message").value
  }).then(
    message => {
      if(message=='OK'){
      alert('Your mail has been sent successfully. Thank You for Contacting Us. We will get back to you soon.');
    }
    else{
      console.error (message);
      alert('There is an error at sending message.Try checking your internet connectivity')
    }
    }
  );
}  