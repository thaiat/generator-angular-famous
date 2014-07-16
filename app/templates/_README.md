# <%=appname%> [![Build Status](https://secure.travis-ci.org/thaiat/generator-angular-famous.png?branch=master)](https://travis-ci.org/thaiat/generator-angular-famous)

> The project was generated using <%=pkg.name%>


## Getting Started

### How to  run the project?

Use the following command:
```bash
$ npm install
```

### Gulp tasks
The project use `gulp` and exposes the following tasks:
The constants are configurable in 'gulp/common/constants.js'

#### serve
To serve a live reload page of the project use the following command:
```bash
gulp serve
```
This will open a web browser of the main client page. 
Any change in the html, javascript or css shall be immediately reflected in the open window

> This task has a dependency on `watchify`

### browsersync
As an alternative to `gulp serve` you can use `browsersync` to open a syncronized version of the application on multiple devices.
Run the following command : 
```bash
gulp browsersync
```
> This task has a dependency on `watchify`


### browserify and watchify
When working with `browserify` we need to produce a bundle script of all the javascript.
To do so we can use one of the following command :
```bash
gulp browserify # runs once
gulp watchify # runs continiously
```

> The gulp task `watchify` is automatically launched when executing `gulp serve` or `gulp browsersync`

### lint
To lint the code execute the following command :
```bash
gulp lint
```
This task will execute in parallel `gulp jshint` and `gulp jscs`.

## License

MIT
