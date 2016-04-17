tsdemo - TypsScript Demo
======================

[![Build Status][travis-image]][travis-url] [![Dependancy Status][dependancy-image]][dependancy-url] [![Dev Dependancy Status][devdependancy-image]][dependancy-url]

TypeScript demo using systemjs and external modules.

## the following libs/tools were used:

* [jQuery](https://github.com/jquery/jquery)
* [jspm (installs modules + configures SystemJS)](https://jspm.io)
* [SystemJS (universal module loader)](https://github.com/systemjs/systemjs)
* [Gulp (helpful task runner)](http://gulpjs.com/)
* [Handlebars (template system)](https://github.com/wycats/handlebars.js/)
* [TypeScript](https://www.typescriptlang.org)

## Get set up
To get started simply checkout the code and install the developer dependancies:
```
$ npm install
```

Next we want to install a couple of node cli-tools:
```
$ npm install -g typescript gulp karma-cli typings jspm
```

Finally the typescript declaration files which will provide the IDE with loveley information around the shape of external libs (helps with auto completion and intelisense.
```
$ typings install
```

## Build the Application
The included gulpfile has some usefull tasks for building and the application and running karma tests

```
$ gulp serve
```
this task will:

1. Cleans out the httpdocs directory ready to build the project
2. Precompiles the `handlebars` templates converts them into modules and copies them to `httpdocs/app/templates`
3. Build all the typescript source files and place them in the `httpdocs/` directory
4. Copys our client side dependancies from `jspm_packages/` directory to `httpdocs/jspm_packages`
4. Serves up the website using [gulp-webserver](https://github.com/schickling/gulp-webserver) to [http://localhost:8080](http://localhost:8080)


```
$ gulp test
```
this task will:

1. Run the tests in the karma test suite once and exit

```
$ gulp tdd
```
this task will:

1. Run the tests in the karma test suite, watch for any file changes apon which it will re-run the tests


```
$ gulp watch
```
this task will:

1. Start to monitor all the typescript files for changes - if any changes are made it will run the `gulp build` command



## To Do
Add a generic middle man service to handle ajax calls, model binding/creation and handling response errors and display that to the user dialog/model?

[travis-url]: https://travis-ci.org/milkshakeuk/tsdemo
[travis-image]: https://travis-ci.org/milkshakeuk/tsdemo.svg?branch=master
[dependancy-url]: https://david-dm.org/milkshakeuk/tsdemo
[dependancy-image]: https://david-dm.org/milkshakeuk/tsdemo.svg
[devdependancy-image]: https://david-dm.org/milkshakeuk/tsdemo/dev-status.svg