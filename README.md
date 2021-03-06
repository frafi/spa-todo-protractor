todo-protractor
=====================

This repo has tests written for a single page Todo application implemented in various front-end web frameworks such as Angular, Backbone, React and Polymer.  
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

2. Install Java Runtime (8.0+) and add it to the path using the installer from [http://www.java.com/en/download/](http://www.java.com/en/download/).

3. Install Node.js (version 5.5 or later) on the system.  
   _Windows_: Download Node.js from [https://nodejs.org/en/download/](https://nodejs.org/en/download/)  
   _Linux/MacOS_: Install [Node Version Manager (NVM)](https://github.com/creationix/nvm) and then install Node.js using ```nvm install node```

4. Install SimpleHTTPServer using ```npm install simplehttpserver -g```

5. Please make sure that bower is installed in the system , this can be installed by ```npm install -g bower```

6. Install protractor using ```npm install -g protractor```

7. Install the webdriver manager using ```webdriver-manager update --standalone```

## Running the tests

1. Download the repository on repo

2. Install Python using installer from [https://www.python.org/downloads/](https://www.python.org/downloads/)

3. Start the http server using ```python -m SimpleHTTPServer``` (Or any other HTTP server like apache would do)  
  _Windows_: Run the following command instead ```python -m http.server```

4. Once the server is started, navigate to the web folder pertaining to the technology of your choice (see list below) using a web browser.  

	<table>
		<tr><th>Framework</th><th>URL</th></tr>
		<tr><td>Angular 1.x (with JavaScript)</td><td>http://localhost:8000/examples/angularjs</td></tr>
	   	<tr><td>Angular 2.0 (with TypeScript)</td><td>http://localhost:8000/examples/angular2</td></tr>
	  	<tr><td>Backbone</td><td>http://localhost:8000/examples/backbone</td></tr>  
	  	<tr><td>Polymer</td><td>http://localhost:8000/examples/polymer</td></tr> 
	  	<tr><td>React</td><td>http://localhost:8000/examples/react</td></tr>
	</table>

5. Start the selenium server using ```webdriver-manager start``` 

6.  Open spec.js and update the ```browser.driver.get('Please update the URL from where the app is accessible');``` with the URL (_e.g. http://localhost:8000/react_) where the app is accessible.

7.  Open a command line interface and run the tests using ```protractor conf.js```
