This is front end build
#Goto src and do npm install 
Then gulp start - this will build less files into .css and start your server. typically that would be  http://localhost:8000

To build and live reload - checkout purpleLane> open cmd > cd src > gulp watch
    this will build the application and open the application in default browser in watch mode.
    After this, browser will reload automatically for every change in the files (.less, .js, .html)
    
    
To go to direct page - check config.js. You can find url for every state and use to navigate to the page manually
    Example - http://localhost:3000/#!/home - will load home page
              http://localhost:3000/#!/mentorList -  Load mentor list