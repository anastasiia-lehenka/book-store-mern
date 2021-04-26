## **Book store**

This is an application for online book store. It allows to do the following:
- Log in with username
- Browse books catalog
- Search book by title
- Filter book by price
- Browse specific book details
- Add a specific book to cart
- Browse Cart with added books
- Make a purchase of added books

### **How to run the app**

1. Clone this repository on your computer.
2. Run **npm install** in your terminal.
3. Run **npm run start** or **npm start** in your terminal and the starting page of the project will be available at: http://localhost:3000/book-store

#### Other scripts

```sh
$ npm run build            build the app
$ npm run deploy           deploy the app to GitHub Pages
$ npm run test             run unit tests
$ npm run lint             check the app for Eslint problems and show them
$ npm run lint:fix         fix all problems found by Eslint in the app
$ npm run stylelint        check the app for Stylelint problems and show them
$ npm run stylelint:fix    fix all problems found by Stylelint in the app
```
#### Tech stack

- React, React Router, React Hooks;
- Redux, Redux-Saga;
- Bootstrap, React-Bootstrap;
- SCSS;
- ESLint

Node.js v12.16.1

###### Note

The app might not work correctly on GitHub Pages, as it is using React BrowserRouter, which is not fully supported by Github Pages. So, in order to test full app functionality, it is recommended to download the app and run it on your computer.
