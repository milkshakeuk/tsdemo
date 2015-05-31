# tsdemo - TypsScript Demo [![Build Status][travis-image]][travis-url]
TypeScript demo using requirejs and external modules.

## Get set up
To get started simply checkout the code and install the developer dependancies:
```
$ npm install
```

Next we want to install the client side dependancies:
```
$ bower install
```

Finally the typescript declaration files which will provide the IDE with loveley information around the shape of external libs (helps with auto completion and intelisense.
```
$ tsd reinstall --overwrite
```

## Build the Application
The included gulpfile has some usefull tasks for building and the application and running karma tests

```
$ gulp
```

will run the defaul task - this task will:

1. Cleans out any built js files
2. Copys our client side dependancies from the `bower_componants/` directory to `httpdocs/js/libs/`
3. Build all the typescript files and place them in the `httpdocs/js/` directory
4. Serves up the website using node


```
$ gulp test
```

this task will:

1. Cleans out any built js files
2. Copys our client side dependancies from the `bower_componants/` directory to `httpdocs/js/libs/`
3. Build all the typescript files and place the outputted js files along side the ts source files
4. Build the typescript jasmine specs files
5. Run the tests in the karma test suite
6. Cleans out the built js files which were required for running the test suite


```
$ gulp test:auto
```

this task will:

1. Run through all the tasks outline above for `$ gulp test`
2. Start to monitor all the test typescript files for changes - if any changes are made it will do task 1 again



## To Do
Add a generic middle man service to handle ajax calls, model binding/creation and handling response errors and display that to the user dialog/model?

[travis-url]: https://travis-ci.org/milkshakeuk/tsdemo
[travis-image]: https://travis-ci.org/milkshakeuk/tsdemo.svg?branch=master