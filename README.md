ionic-test
==========

##Requirements

* [Android SDK](http://cordova.apache.org/docs/en/3.3.0/guide_platforms_android_index.md.html#Android%20Platform%20Guide)
* [iOS SDK](http://cordova.apache.org/docs/en/3.4.0/guide_platforms_ios_index.md.html#iOS%20Platform%20Guide)
* [Nodejs](http://nodejs.org/)

##Installing ionic

Fetch the code

```bash
$ git clone https://github.com/codingbunch/ionic-test.git
$ cd ionic-test
$ npm install
```
Install ionic cli
```bash
$ npm install -g ionic cordova
```
Add specific platforms
```bash
$ ionic platform ios
$ ionic platform android
```

Run it on an emulator or real device
```bash
$ ionic build ios
$ ionic emulate ios
```

Run it on the browser
```bash
$ ionic serve
```

## Project Structure

Overview

    ├── Gruntfile.js            - Configuration of all Grunt tasks
    ├── package.json            - Dev dependencies and required Cordova plugins
    ├── bower.json              - Lists front-end dependencies
    ├── config.xml              - Global Cordova configuration
    ├── .gitignore              - Best practices for checking in Cordova apps
    ├── resources/              - Scaffolded placeholder Icons and Splashscreens
    │   ├── ios/
    │   ├── android/
    ├── app/
    │   ├── index.html          - Main Ionic app entry point
    │   ├── lib/                - Libraries managed by Bower
    │   ├── scripts/            - Custom AngularJS Scripts
    │   ├── styles/             - Stylesheets
    │   ├── templates/          - HTML views
    ├── platforms/              - Targeted operating systems
    ├── plugins/                - Native plugins
    ├── hooks/                  - Cordova lifecycle hooks
    ├── merges/                 - Platform specific overrides
    ├── coverage/               - Istanbul reports
    ├── test/                   - Unit tests
    │   ├── spec/
    ├── www/                    - Copied from app/ to be used by Cordova 
    

Project scaffolding was built with [ionic generator](https://github.com/diegonetto/generator-ionic).
