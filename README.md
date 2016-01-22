# ES6 Test Runner

##### What is this?

This is a simple watch configuration for Karma. This transcript from ES6/ES7 to ES5 in order to run jasmine tests when any line in `src` or `tests` files is changed
karma start my.conf.js

---

##### Prerequisites

* Download this code in the folder of your project with `git clone https://github.com/pfeldman/ES6TestRunner.git .`
* NodeJS (`npm` to install packages)
* Once you have both, navigate to the folder you have download the code and run `npm install` in order to download all packages

---

##### How to configure this?

By default, this package is configured to transcript from ES6 and ES7. If you need from some other language please [check all available by `babel`](https://babeljs.io/docs/plugins/) install them by `npm install babel-preset-<preset-name>`. Update `.babelrc` file to set the new preset.

* __Test and Source folder:__ Edit `karma.conf.js` file and set the path of your files you want to process inside `preprocessors` and `files`.
* __Browser:__ By default this uses PhantomJS Browser for tests, if you want to use Google Chrome, please update `browsers` in `karma.conf.js`

---

##### How to run this?

Once `karma.conf.js` is configured just run `karma run karma.con.js` it runs on PhantomJS Browser by default and log the result of all tests. Each time a file inside the folders defined inside `karma.conf.js` changes, it will run all tests again
