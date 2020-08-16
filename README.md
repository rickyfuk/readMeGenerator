# Project Name

Homework 9 - ReadMe Generator

# Table of contents

- [Project Name](#project-name)
- [Table of contents](#table-of-contents)
- [General info](#general-info)
- [Video Demo](#video-demo)
- [Features](#features)
- [Installation](#installation)
- [Technology](#technology)
- [Local File Description](#local-file-description)
- [Code Example](#code-example)
- [Status](#status)
- [Create By](#create-by)

# General info

This project is to bulid a generator from NodeJS in order to put the response from the user to the aaplication.

For the feature of the site, please visit the [Features](#features) section for more details.

# Video Demo

![readme generator demo](./readmeGenerator.gif)

You might also visit the following youtube link for the demo:
[readme generator demo](https://youtu.be/bonuF5v3H-M)

# Features

In this project, the following features have apply to the site:

1. The user can get a README.md file based on their answer from the application
2. The user have to response to the following 9 questions before the README file can be generate:
   1. The Title of the project
   2. The Description of the project
   3. The Installation of the project
   4. The Usage of the project
   5. The Contribution of the project
   6. The Test Instruction of the project
   7. The License of the project (Check the box with the apporiate options // can select mulitple options)
   8. The GitHub ID for the user (The ID will place on the Question part for the reader to contact the user)
   9. The Email for the user (The ID will place on the Question part for the reader to contact the user)

# Installation

The user must install the npm package before they run the apps:

```sh
npm install
```

# Technology

The following technology have been used for this project:

1. [JavaScript](https://www.javascript.com/)
2. [NodeJS](https://nodejs.org/en/)
3. [NPM](https://www.npmjs.com/)
   The following application from NPM have been used:
   1. Inquirer

# Local File Description

Below are the description for all local files:

1. JavaScript
   1. index.js - the main javascript for application
2. JSON
   1. package.json - the main file for the description of the application and the dependencies

# Code Example

Below is/are examples for the code has/have been used:

1. To validate the input for the email format

   ```Javascript
     // reset the search city as normal when the mouse exit the city span
   validate: function (value) {
    var pass = value.match(
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/i
    );
    if (pass) {
        return true;
    }

    return 'Please enter a valid email';
   },
   ```

# Status

Project status: finished

# Create By

Created by Chung Hei Fuk
