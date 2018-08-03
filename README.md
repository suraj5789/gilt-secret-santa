# GiltSecretSanta

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.1.1.

## Tech Stack
Angular
Bootstrap4
HTML5

## Project Description
This application is a Single Page Application built in Angular. Its mainly going to use for playing Secret Santa Game.

Application is having 3 Main Views
1. Home Page 
This page will load bydefault. User can navigate to 'Admin' and 'User' pages from here.
Page URL - http://localhost:4200/

2. Admin Page
This page is mainly for Admin user who can reset the recipient list for all Santas.
Page URL - http://localhost:4200/santa-admin

3. User Page
This page is mainly for all Santas who can view their respective recipient by just entering their email address.
Page URL - http://localhost:4200/santa-user

## Data Source
hardcoded JSON data from assets/users.json.

## MVP
1. To have an admin page to manage recipient list.
2. To have an user page to see the recipient name.
3. To have basic UI validation and styling.

## Out Of Scope
1. End To End Test Case Coverage

## Development Env. Setup
1. Clone/Download the repo from https://github.com/suraj5789/gilt-secret-santa
2. Go to project folder
3. Run  `npm i or npm install`
4. Run  `npm start`


Run `npm start` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
