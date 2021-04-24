// Listen for a submit 
document.querySelector(".contact-form").addEventListener("submit",submitForm);

function submitForm(e) {
    e.preventDefault();

    // get input value 
    let name = document.querySelector("#name").value;
    let email = document.querySelector("#email").value;
    let subject = document.querySelector("#subject").value;
    let message = document.querySelector("#message").value;
    console.log(name);

   

    document.querySelector(".contact-form").reset();

    sendEmail(name, email, subject, message);
}


// send email info 

function sendEmail(name, email, subject, message){
    Email.send({
        Host: "smtp.gmail.com",
        Username: "nikhilworks1998@gmail.com",
        Password: "zrafikhmpaytffts",
        To: "nikhilworks1998@gmail.com",
        From: 'nikhilworks1998@gmail.com',
        Subject: subject,
        Body: 'Name: '+ name +'<br/> Email: '+ email +' <br/> Message: '+ message,
    }).then((message) => alert("mail sent successfully"))
}


// function myFunction() {
//     /* Get the text field */
//     var copyText = document.getElementById("myInput");
  
//     /* Select the text field */
//     copyText.select();
//     copyText.setSelectionRange(0, 99999); /* For mobile devices */
  
//     /* Copy the text inside the text field */
//     document.execCommand("copy");
  
//     /* Alert the copied text */
//     alert("Copied the text: " + copyText.value);
//   }