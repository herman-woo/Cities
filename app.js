//1. Creating functionality for the top button, found code from w3schools//
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
    const header = document.querySelector("nav");
    let maxHeight = 0
    for (const city of cities){
        const height = city.offsetHeight;
        //get the id of the city section
        const cityTag = city.id;
        //get the inner text of the city section
        const cityName = city.getElementsByClassName("city name")[0].innerText;
        //create a link element and give it the inner text, class and href from city section
        const cityLink = document.createElement('a')
        cityLink.textContent = cityName;
        cityLink.classList.add("link");
        cityLink.href="#"+cityTag;
        header.appendChild(cityLink);
        maxHeight += city.offsetHeight;
    }


    
    window.addEventListener('scroll',function(){
        const links = header.getElementsByClassName("link");
        let height = window.scrollY;
        let lowerLimit = 0;
        let upperLimit = 1000;


        for (let i = 0; i<cities.length;i++){
            let length = cities[i].offsetHeight;
            lowerLimit = upperLimit;
            upperLimit = upperLimit + length;
            const link = links[i];
            if (height >= lowerLimit && height < upperLimit){
                link.classList.add("active");

            }
            else{
                link.classList.remove("active");
            }

        }




       
        
    });