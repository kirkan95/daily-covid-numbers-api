# daily-covid-numbers-api
A tool for tracking the daily number of COVID-19 cases and deaths in the U.S. 

This project was an exercise in pulling data from an API in order to update a simple dataset. In this case, the data I wanted to pull was from an API called about-corona.net. 
https://about-corona.net/documentation

This website pulls data from the WHO, Johns Hopkins and other government sites and updates several times a day. 

A previous project that I completed, which was based off of a tutorial (https://www.youtube.com/watch?v=nZaZ2dB6pow&t=1s&ab_channel=TheCodingTrain), consisted of pulling information from 
an API for the location information of the International Space Station, with said location superimposed on a map of the world. I used this project as a jumping off point, but I quickly realized a few key differences.

1. The data that the ISS pulled from was very simple, with no nested elements within the JSON. There were plenty of nested elements in the about-covid API, meaning that I needed to learn how to select particular data (for example: [country: data: today: confirmed cases] in order to locate confirmed cases). 
2. I switched from working with location-based data to simple numbers of confirmed cases/deaths. Visually, it may be more difficult to make it interesting. In the ISS project, I learned how to use Leaflet to map out the ISS location, which was visually interesting. 
3. The ISS API updated every second, but the about-covid API updates at an irregular time, often with hours between each update. In the ISS API project, I simply created a setInterval function to refresh the location every second. Because the intervals are so irregular for the covid one, I chose to let the user select whent to update from the API, with a button. 

Notes/for future consideration: 

* I couldn't get the update button to run the function getData(), so I set it to refresh the entire page. As-is, this essentially does the same thing as running the getData() function, because getData() is called on page initialization, but this makes the scale/usage of this tool limited. If I wanted to add this tool to a story, then it would be inconvenient and bad design to reload the entire page just to update that one tool.
* I need to make the tool look more interesting. I could see this a small object in a larger news page about COVID case rates/death rates, but it needs to be able to integrate with other page elements. 
* I chose to use Bootstrap for its fluidity and container divs. This will make it easier to integrate with other page elements, should I choose to expound on the project. 
