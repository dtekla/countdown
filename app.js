

// Set the date we're counting down to
var countDownDate = new Date("Jul 14, 2021 19:43:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Output the result in an element with id="demo"
    document.getElementById("counter").innerHTML = days + "d " + hours + "h "
        + minutes + "m " + seconds + "s ";

    // If the count down is over, write some text
    if(distance > 0) {
        document.getElementById("counting").style.display="block";
    } else if (distance < 0) {
        clearInterval(x);
        document.getElementById("counting").style.display="none";
        document.getElementById("done").style.display="block";
        requestAnimationFrame(frame);

    }
}, 1000);



