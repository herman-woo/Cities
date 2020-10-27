//1. 
    //Creating functionality for the top button, found code from w3schools//
    //function that is called from button in html
    function scrollUp() {
        document.documentElement.scrollTop = 0;
    }
    //Functionality to show button after the page is scrolled past the home
    //find the button, decalre global variable//
topButton = document.getElementById("topButton");
    //activate the scrolling function
    window.onscroll = function() {scrollFunction()};
    function scrollFunction() {
        if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100){
            topButton.style.display = "block";
        }
        else{
            topButton.style.display = "none";
        }
    }

//2. Generate the header items dynamically based on sections under class name of "city section"
//declare global variables
    //get the section container
const cityContainer = document.getElementById("sections");
    //get all city sections inside the seciton container
const cities = cityContainer.getElementsByClassName("city section");
const header = document.querySelector("ul");
    for (const city of cities){
        const cityTag = city.id; //get the id of the city section
        const cityName = city.getElementsByClassName("city name")[0].innerText; //get the inner text of the city section
        const cityItem = document.createElement('li'); 
        cityItem.textContent = cityName;
        cityItem.classList.add("link");
        cityItem.setAttribute('id',cityTag);
        cityItem.addEventListener('click',linkFunction);
        header.appendChild(cityItem);
    }

//3. Add functionality to allow page to scroll where it needs to go
    //function once link is clicked
    function linkFunction(){
        for (const city of cities){
            if (this.id === city.id){
                city.scrollIntoView();
            }
        }
    }

//4. Swtich links to active state depending on where the user has scrolled to on the page

const links = header.getElementsByClassName("link");//get the HTMLcollection of links    
//triggers anytime user scrolls    
    window.addEventListener('scroll',function(){
        //parameters to know where the user is in the broser
        let height = window.scrollY;
        let lowerLimit = 0;
        let upperLimit = 1000; //this is the height of the first header div, in future code should also be found through the property of the first div
        //For loop that iterates through cities, but chose not to use for Of this time to get an interator to locate the link
        for (let i = 0; i<cities.length;i++){
            let length = cities[i].offsetHeight;
            lowerLimit = upperLimit; //the lower limit will always become what the upperlimt was
            upperLimit = upperLimit + length; //the upper limit will be dynamically increased based on the heigh of each section
            const link = links[i]; // grab the link and determine if any action is required to be taken on it
            if (height >= lowerLimit && height < upperLimit){
                link.classList.add("active");//if the current height at the top of the page falls inbetween the current limits, set the link to active.
            }
            else{
                link.classList.remove("active");
            }
        }
    });