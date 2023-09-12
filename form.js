var windowHeight = window.innerHeight;
window.addEventListener('scroll', function() {
  var scrollY = window.scrollY;
  var parallaxImage = document.querySelector('.parallax');
  parallaxImage.style.top = -scrollY / 2;
});


document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.getElementById("contactForm");
    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const name=document.getElementById("name").value;
        const email=document.getElementById("email").value;
        const message=document.getElementById("message").value;

        const alertMessage = `Name: ${name}\nEmail: ${email}\nMessage: ${message}`;
        alert(alertMessage);
    });
});



