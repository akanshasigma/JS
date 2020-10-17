/*** Created by root on 16/10/20. */

document.getElementById("img1").addEventListener("mouseover", function() {
    document.getElementById("image").style.backgroundImage = "url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/389177/bacon.jpg)";
    document.getElementById('image').innerHTML = "Styling with a Bandana";
}, false);
document.getElementById("img1").addEventListener("mouseout", function() {
    document.getElementById("image").style.backgroundImage = "";
    document.getElementById('image').innerHTML = "Hover over an image below to display here.";
}, false);



document.getElementById("img2").addEventListener("mouseover", function() {
    document.getElementById("image").style.backgroundImage = "url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/389177/bacon2.JPG)";
    document.getElementById('image').innerHTML = "With My Boy";
}, false);
document.getElementById("img2").addEventListener("mouseout", function() {
    document.getElementById("image").style.backgroundImage = "";
    document.getElementById('image').innerHTML = "Hover over an image below to display here.";
}, false);



document.getElementById("img3").addEventListener("mouseover", function() {
    document.getElementById("image").style.backgroundImage = "url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/389177/bacon3.jpg)";
    document.getElementById('image').innerHTML = "Young Puppy";
}, false);
document.getElementById("img3").addEventListener("mouseout", function() {
    document.getElementById("image").style.backgroundImage = "";
    document.getElementById('image').innerHTML = "Hover over an image below to display here.";
}, false);