/* ================================== typing animation ================================== */
var typed = new Typed(".typing", {
    strings: ["front-end developer", "Image processor"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true // Use lowercase 'loop' here
  });
  // sending email to me
  (function(){
    emailjs.init("sNRltFqZqtEWrc4yR");
})();

document.getElementById('sendMessageBtn').addEventListener('click', function() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var shortMessage = document.getElementById('shortMessage').value;
    var message = document.getElementById('message').value;

    var templateParams = {
        from_name: name,
        to_name: 'Your Name',
        message: message,
        email: email,
        short_message: shortMessage
    };

    emailjs.send('service_5s8hf1h', 'template_oapk8fr', templateParams)
        .then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
            alert('Your message has been sent successfully!');
        }, function(error) {
            console.log('FAILED...', error);
            alert('There was an error sending your message. Please try again later.');
        });
});

  