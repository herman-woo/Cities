//Creating functionality for the top button, found code from w3schools//


//function that is called from button in html
function scrollUp() {
    document.documentElement.scrollTop = 0;
}


//Functionality to show button after the page is scrolled past the home
//find the button, decalre global variable//
topButton = document.getElementById("topButton");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100){
        topButton.style.display = "block";
    }
    else{
        topButton.style.display = "none";
    }
}

