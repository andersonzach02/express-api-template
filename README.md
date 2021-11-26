# express-api-template 🗺️

## TODO

- [x] Install Necessary Dependencies

  - [x] Express for creating the API 🪧
  - [x] Morgan for logging http requests 🪵
  - [x] winston for logging within the application itself
  - [x] Supertest for testing routes 🧪
  - [x] nodemon for running the server during dev 🏃‍♂️
  - [x] ESLint for ES6 JS linting 🧹
  - [x] Dotenv for storing environment variables
  - [x] Helmet for CORS headers
  - [x] CORS for cross origin resource sharing
  - [x] Jest for the testing framework
  - [x] More? Do some research, make sure you aren't missing anything 🔬

- [x] Setup necessary configuration for modules (like ESLint specifically)
- [x] Set up basic routes
  - [x] Create an express application object through express module 🚅
  - [x] Require in necessary middlewares
  - [x] Create basic error/not found middlewares 🛑
  - [x] Create GET on home route 🏡
- [x] Create tests for those basic routes
- [x] Add description for this project and repository 📜

## Project Overview

This is a repository that contains a basic template for an express app in the way that I would typically set up an express app, including modules for linting, logging, testing, setting and retrieving environment variables, etc. The dependencies used in the project are as follows:

- express - For creating the server and endpoints that the application uses.

- morgan - Logging HTTP requests that the server receives.

- winston - Used for logging any information that might be necessary for debugging or production outside of HTTP requests. In the application, I actually have it set up that morgan uses winston logging transports so that even HTTP requests use winston logging mechanisms and everything is logged via the same technology.

- supertest - A module that I can use to make requests to the api endpoints and make assertions as to what I expect the response to be for testing.

- jest - The testing framework that can be used for unit testing, as well as running the tests created with supertest.

- dotenv - A module that allows you to store environment variables for your project to use in a .env file

- nodemon - A module that you can use to run node scripts so that they restart every time a change is made and saved to the file that is running.

- eslint - A linting module for Javascript that catches syntax errors and enforces code styles.

- cors - A module that sets headers so that cross origin resource sharing is available for the application.

- helmet - A module that sets some safety headers for the application.

## Usage

### Running the application 🏃🏿‍♀️

To run the application without nodemon, you can simply run `npm run start` in the terminal while in the projects directory, which will run the node script in the `src/index.js` directory.

### Running the application during development 💻

To run the application using nodemon, which will restart the application upon saving to incorporate any changes made to files, run `npm run dev` in the terminal, which behind the scenes will run the node script in the `src/index.js` directory using nodemon.

### Testing the application ⚗️

The test files for the application can be found in the test directory of the application's folder structures and are named according to the file that they contain tests for. For instance, the tests written for the API routes in the src/app.js file are located in the app.test.js file in the test directory. To run the tests for the application, run the `npm run test` command in the terminal, which in the background runs jest. There's no need to modify the script in the `package.json` every time a new test file is written, because jest will look for the `test` directory and run all of the test files found in that directory.

### Linting the application 🧹

To run the ESLint linter on the files in the application, run the `npm run lint` command in the terminal. This will look through all of the files in the `src`, `test`, and `utils` directory and all sub-directories, find problems that violate the configuration found in the `.eslintrc.js` file and fix them according to that configuration. If you create new directories that contain files that you would like to be linted, or create other specific files that you want to be linted, you must add the new directory or file name to the end of the `"lint"` script found in the `package.json` file.
