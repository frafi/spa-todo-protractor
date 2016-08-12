todo-protractor
=====================

This repo has tests written for a single page Todo application which are written in protractor.  
The test examples in this repo are based on [https://github.com/sri85/React-Todo-protractor](https://github.com/sri85/React-Todo-protractor).


## Technologies

* Protractor
* Jasmine
* React
* Node.js
* SimpleHTTPServer
* Python


## Setup

1. Please make sure that Python (version 2.7 or later) is installed and be found in the path.

2. Install Node.js (version 5.5 or later) on the system.  
   _Windows_: Download Node.js from [https://nodejs.org/en/download/](https://nodejs.org/en/download/)  
   _Linux/MacOS_: Install [Node Version Manager (NVM)](https://github.com/creationix/nvm) and then install Node.js using ```nvm install node```

3. Install SimpleHTTPServer using ```npm install simplehttpserver -g```

4. Please make sure that bower is installed in the system , this can be installed by ```npm install -g bower```

5. Install protractor using ```npm install -g protractor```

6. Install the webdriver manager using ```webdriver-manager update --standalone```

## Running the tests

1. Download the repository on repo

2. Start the http server using ```python -m SimpleHTTPServer``` (Or any other HTTP server like apache would do)

3. Once the server is started, navigate to the web folder pertaining to the technology of your choice (see list below) using a web browser.  
   _Angular 1.x (with JavaScript)_: http://localhost:8000/examples/angularjs  
   _Angular 2.0 (with TypeScript)_: http://localhost:8000/examples/angular  
   _Backbone_: http://localhost:8000/examples/backbone  
   _Polymer_: http://localhost:8000/examples/polymer  
   _React_: http://localhost:8000/examples/react  

4. Start the selenium server using ```webdriver-manager start``` 

5.  Open spec.js and update the ```browser.driver.get('Please update the URL from where the app is accessible');``` with the URL (_e.g. http://localhost:8000/react_) where the app is accessible.

6.  Open a command line interface and run the tests using ```protractor conf.js```
