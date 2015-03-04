# tsdemo - TypsScript Demo
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
$ tsd install
```

## Build the Application
The included GruntFile has some usefull tasks for building and the application and running karma tests

```
$ grunt
```

will run the defaul task - this task will:

1. Build all the typescript files and place them in the httpdocs directory
2. Start to monitor all src typescript files for changes - if any changes are detected it will do task 1 again
3. Run any tests in karma test suite
4. Cleans out the build js files

```
$ grunt autoTest
```

this task will:

1. Build the typescript src files
2. Start to monitor all the test typescript files for changes - if any changes are made it will do task 1 again
3. Run any tests in the karma test suite
4. Cleans out the built js files

```
$ grunt manualTest
```

this task will:

1. Build the typescript src files
2. Run any tests in the karma test suite
3. Cleans out the built js files


## To Do
Add a generic middle man service to handle ajax calls, model binding/creation and handling response errors and display that to the user dialog/model?
