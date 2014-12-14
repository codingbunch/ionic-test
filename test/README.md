# What is Appium?

Appium is used to automate tests on devices with the main objective of allowing users to write tests once, and run them on different platforms and devices with no further effort.
The main idea behind Appium can be easily grasped by looking at the following figure.

<p align="center">
  <img width="341" height="308" src="http://blogs.technet.com/cfs-file.ashx/__key/communityserver-blogs-components-weblogfiles/00-00-01-03-22/appiumovw.png"/>
</p>

[Appium concept and design](http://appium.io/introduction.html?lang=es)

## Installation

```bash
$ sudo npm install -g appium
```

Check dependencies
```bash
$ appium-doctor
```

## Running appium server
```bash
$ appium
```
## Run the tests

```bash
$ protractor test/appiumConfig.js
```

# Protractor

[Protractor](http://angular.github.io/protracto) is an E2E test framework for angular apps.

## Installation

```bash
$ sudo npm install -g protractor
```

```bash
$ webdriver-manager update
```

## Running webdriver server

```bash
$ webdriver-manager start
```

## Running ionic app in local browser

```bash
$ionic serve
```

## Run the tests

```bash
$ protractor test/chromeConfig.js
```

### Useful info


[Fast Android emulator](http://www.genymotion.com/)

[Set up protractor with appium](https://github.com/angular/protractor/blob/master/docs/browser-setup.md)

[WebDriverJs](https://code.google.com/p/selenium/wiki/WebDriverJs)

[Appim js client](https://github.com/admc/wd)
