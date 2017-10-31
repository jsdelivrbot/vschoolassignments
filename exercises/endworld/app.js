






// var countDownDate = new Date("Jan 5, 2018 15:37:25").getTime();

// Update the count down every 1 second

//for (var i= 0; i < 11; i++){
//    var alertMe = setInterval(function() {
//    console.log(i);
//  }, 1000);
//}

var count = 20;

function countDown() {
    count--;
//    console.log(count);
    document.getElementById("demo").innerHTML = count;
    document.getElementById("also-this").innerHTML = "Now I'm inside this p tag"
    if (count === 0){
        document.getElementById("demo").innerHTML = "The end of the world is upon us!"
        clearInterval(alertMe);
    }
}

var alertMe = setInterval(countDown, 1000)

//clearInterval(alertMe);


    // Get todays date and time
    // var now = new Date().getTime();

    // Find the distance between now an the count down date
    // var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    // var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    // var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    // var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));


    // var seconds = Math.floor((distance % (1000 * 60)) / 1000);




//     // Output the result in an element with id="demo"
//     document.getElementById("demo").innerHTML = days + "d " + hours + "h "
//     + minutes + "m " + seconds + "s ";
//
//     // If the count down is over, write some text
//     if (distance < 0) {
//         clearInterval(x);
//         document.getElementById("demo").innerHTML = "EXPIRED";
//     }
// }, 1000);
