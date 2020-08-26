$(document).ready(function(){
    $('.sidenav').sidenav();
    $('.parallax').parallax();
    $('.carousel.carousel-slider').carousel({
        indicators: true
      });
    $('.slider').slider({
      indicators:false,
      height:600,

    });
  });


  (function() {

    'use strict';

   // Feature Test
   if ( 'querySelector' in document && 'addEventListener' in window && Array.prototype.forEach ) {

       // Function to animate the scroll
       var smoothScroll = function (anchor, duration) {

           // Calculate how far and how fast to scroll
           var startLocation = window.pageYOffset;
           var endLocation = anchor.offsetTop;
           var distance = endLocation - startLocation;
           var increments = distance/(duration/16);
           var stopAnimation;

           // Scroll the page by an increment, and check if it's time to stop
           var animateScroll = function () {
               window.scrollBy(0, increments);
               stopAnimation();
           };

           // If scrolling down
           if ( increments >= 0 ) {
               // Stop animation when you reach the anchor OR the bottom of the page
               stopAnimation = function () {
                   var travelled = window.pageYOffset;
                   if ( (travelled >= (endLocation - increments)) || ((window.innerHeight + travelled) >= document.body.offsetHeight) ) {
                       clearInterval(runAnimation);
                   }
               };
           }
           // If scrolling up
           else {
               // Stop animation when you reach the anchor OR the top of the page
               stopAnimation = function () {
                   var travelled = window.pageYOffset;
                   if ( travelled <= (endLocation || 0) ) {
                       clearInterval(runAnimation);
                   }
               };
           }

           // Loop the animation function
           var runAnimation = setInterval(animateScroll, 16);
      
       };

       // Define smooth scroll links
       var scrollToggle = document.querySelectorAll('.point');

       // For each smooth scroll link
       [].forEach.call(scrollToggle, function (toggle) {

           // When the smooth scroll link is clicked
           toggle.addEventListener('click', function(e) {

               // Prevent the default link behavior
               e.preventDefault();

               // Get anchor link and calculate distance from the top
               var dataID = toggle.getAttribute('href');
               var dataTarget = document.querySelector(dataID);
               var dataSpeed = toggle.getAttribute('data-speed');

               // If the anchor exists
               if (dataTarget) {
                   // Scroll to the anchor
                   smoothScroll(dataTarget, dataSpeed || 500);
               }

           }, false);

       });

   }

})();

/*$("#enviar").click(function (event){
    event.preventDefault();
    const nombre = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
    const data = document.getElementById("data").value;
    alert("" + data + phone + nombre);
    Email.send({
        To : 'ronnielopez503@gmail.com',
        From : "ronnielopez503@gmail.com",
        Subject : "Hola esto es una prueba",
        Body : "And this is the body"
    }).then(
      message => alert(message)
    );
});*/


var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'ronnielopez503@gmail.com',
    pass: 'nacho1010'
  }
});

var mailOptions = {
  from: 'ronnielopez503@gmail.com',
  to: 'ronnielopez503@gmail.com',
  subject: 'sdkjadasñldksd',
  text: 'That was easy!'
};

$("#enviar").click(function (event){

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});

});