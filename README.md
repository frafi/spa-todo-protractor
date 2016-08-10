todo-protractor
=====================

This repo has tests written for a single page Todo application which are written in protractor


## Technologies

* Protractor
* Jasmine
* React
* Node.js

## Setup

1. Please make sure that Python (version 2.7 or later) is installed and be found in the path.

2. Install Node.js (version 5.5 or later) on the system.  
   _Windows_: Download Node.js from [https://nodejs.org/en/download/](https://nodejs.org/en/download/)  
   _Linux/MacOS_: Install [Node Version Manager (NVM)](https://github.com/creationix/nvm) and then install Node.js using ```nvm install node```.

3. Please make sure that bower is installed in the system , this can be installed by ```npm install -g bower```

4. Install protractor using ```npm install -g protractor```

5. Install the webdriver manager using ```webdriver-manager update --standalone```

## Running the tests

1. Download the repository on repo

### Run the single page application

2. Change directory to the ```react``` subfolder and start the http server using ```python -m SimpleHTTPServer``` (Or any other HTTP server like apache would do)

3. Once the server is started navigate to the react folder (_e.g. http://localhost:8000/react_) using a web browser.  

4. Start the selenium server using ```webdriver-manager start``` 

5.  Open spec.js and update the ```browser.driver.get('Please update the URL from where the app is accessible');``` with the URL (_e.g. http://localhost:8000/react_) where the app is accessible.

6.  Open a command line interface and run the tests using ```protractor conf.js```
