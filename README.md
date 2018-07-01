This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

## Live Demo

Please visit my deployed bundle in below location.
Do accept the prompt to allow access your location as this is required for the API to work

```

https://itsvish.com/demos/weatherwidget/


```

## Dependencies

```
    node v7.10.0
    npm 4.2.0
    yarn v0.23.4
    
```
## Installation
clone the repository and install npm modules by below command in the terminal
```
    npm install
    HTTPS=true npm start
    
```
## Folder Structure

```
weather-widget/
  README.md
  package.json
  public/
    index.html
    manifest.json
  src/
    components/
        UI/
            RadioGroup/
                index.js
            InputText/
                index.js
            WeatherPanel/
                images/
                index.css
                index.js
    utils/
            constants.js
            helpers.js
    sass/
        vendors/
            foundation.6.4.scss
    WeatherWidget.js
    WeatherWidget.css
    WeatherWidget.test.js
    index.js
    index.css
```

## Available Scripts

In the project directory, you can run:

HTTPS=true is required to start the https server for the geo location based open weather api
### `HTTPS=true npm start` or `HTTPS=true yarn start`

Runs the app in the development mode.<br>
Open [https://localhost:3000](https://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test` or `yarn test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](#running-tests) for more information.

### `npm run build` or `yarn build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!
