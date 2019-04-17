# <u>**Site Rebuild: Part II - Return of the Pun**</u>
##### An attempt to recreate a pre-existing website, Created 4/5/2019

#### By Micaela Jawor

## Description
A site that is a rebuilt version of Pinterest. Part I will be planning the application and separating the application into different components.

## Specifications
<details>
<table>
  <tr>
    <caption>User stories and specifications</caption>
    <th style="width: 5%"></th>
    <th style="width: 23.75%"> Scenario I </th>
    <th style="width: 23.75%"> Scenario II </th>
    <th style="width: 23.75%"> Scenario III </th>
    <th style="width: 23.75%"> Scenario IV </th>
  </tr>
  <tr>
    <td style="width:5%">Behavior</td>
    <td>Open the webpage and see the main page</td>
    <td>You are able to click on the logo and the page should reload</td>
    <td>You are able to click on the "Home" button and the page should reload</td>
    <td>When you click on a pin you are brought to a page with more details about the pin</td>
  </tr>
  <tr>
    <td>Input</td>
    <td>Open Page</td>
    <td>Click logo</td>
    <td>Click "Home" button</td>
    <td>Click Pin</td>
  </tr>
  <tr>
    <td>Output</td>
    <td>See "Main Page"</td>
    <td>See "Main Page"</td>
    <td>See "Main" page</td>
    <td>See "Details" page</td>
  </tr>
  <tr>
    <td>Notes</td>
    <td>Not all functionality will be working at this time, it is just to check If you are able to open anything</td>
    <td>The only functionality of the logo is to refresh the main page</td>
    <td>The only functionality of the "Home" button is to refresh the main page</td>
    <td>This should show you a pop-up, or bring you to a different page</td>
  </tr>
</table>
</details>

## Setup/Installation Requirements
* Create api-keys.ts file in src/app directory
* Place Firebase credentials in the window
* export const masterFirebaseConfig = {
*   apiKey: "xxxx",
*   authDomain: "xxxx.firebaseapp.com",
*   databaseURL: "https://xxxx.firebaseio.com",
*   storageBucket: "xxxx.appspot.com",
*   messagingSenderId: "xxxx"
* };

## Known Bugs
* No known Bugs

## Support and Contact Details
_If you run into any issues or have questions, ideas or concerns. Please email me at micaelajawor@yahoo.com_

## Technologies Used
* Atom
* Javascript
* Angular
* Typescript

## Liscense
_MIT_
Copyright(c) 2019 **_Micaela Jawor_**

# AngularPunterestSiteRebuild.Solution

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.6.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
