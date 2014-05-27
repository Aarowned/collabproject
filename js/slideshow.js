var slideFrequency = 10000; // time between slides in milliseconds

var slider = document.getElementById('panes'); // slider class
var numberOfSlides = parseInt(slider.style.width.charAt(0));
var topRightValue = (((numberOfSlides - 1)*100)).toString() + "%"; 
var newValue = "empty"

function slide() {
    if (slider.style.right == topRightValue || slider.style.right == "1%") {
        slider.style.right = "0%";
    } else {
        newValue = ((parseInt(slider.style.right.charAt(0)) + 1) * 100).toString() + "%";
        slider.style.right = newValue;
    }
}

function loop() {
    slide();
    setTimeout(loop, slideFrequency);    
}
loop();
