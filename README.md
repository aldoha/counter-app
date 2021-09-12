# A simple counter-App using [React.js](https://reactjs.org)

> **This tiny application is like adding,removing,deleting, resetting products which reflects in the total number of products into our shopping cart.**

**This is a very basic app but useful to understand the React Components, states, Data Flow, parent to child etc. .**

## Live URL :-

> [Counter App](https://obscure-waters-60500.herokuapp.com)

**OR your can do the following to run in your local machine**

## Scripts

Install node modules

#### `npm install`

In the project directory, you can run:

#### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.<br>

## Tests

[Tests](cypress/integration/counter-app.js) use Cypress<br>
[Documentation for Cypress](https://docs.cypress.io/)

Tested features:
- addition and deletion from one category
- addition and deletion from few categories
- deletion of added items with refresh button
- deletion of categories with remove button
- recover to initial state with recycle button

Commands:
- start tests on the running app<br>
`npm run cypress:run` 

- open fancy Cypress Test Runner (and start tests from there manually)<br>
`npm run cypress:open`

- start the app in the development mode and runs Cypress tests<br>
`npm run cypress-test`

App url for tests set in [baseUrl](cypress.json)
