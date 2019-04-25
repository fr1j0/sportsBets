#moPlay Challenge
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

##Tech decissions
I've used __Redux__ to centralize the state and logic of the application and __redux-promise-middleware__ to handle async action creators. __Logger__ middleware helps tracking dispatched actions.

For the UI I've used __Atomic Design__ for the sake of scalability.

Rest of the components are grouped by functionality.

Just added a few unit tests, don't want to delay this delivery for longer so I couldn't add any integration nor e2e tests.

Routing is centralized in App file.


## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!
