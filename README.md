# Detection Confirmation UI

Allow users to quickly confirm GumGum Image Science detections from an intuitive UI.

Keyboard Shortcut | Action
--- | ---
`LeftArrow` | Load previous image
`RightArrow` | Load next image
`y` | Confirm the presence of the detected object
`n` | Deny the presence of the detected object
`c` | Can't tell if the object is there or not

## Requirements

* [Node.js](https://nodejs.org/en/) _(>6.10.3)_
* [Yarn](https://yarnpkg.com/en/) _(>0.17.8)_

## Installation

```
yarn
```

## Development

```
yarn start
```

Runs the app in the development mode. Open [localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits. You will also see any lint errors in the console.

## Testing

```
yarn test
```

Launches the test runner in the interactive watch mode.

```
CI=true yarn test
```

Runs the tests once, without interactive mode.

## Build for production

```
yarn build
```

Builds the app for production to the `build` folder. It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.

Note, if the `build` folder does not exist already, create it before running this command.

## Clean install

```
yarn run clean
```

Deletes the `node_modules` directory, cleans the Yarn cache, and reinstalls the dependencies.
