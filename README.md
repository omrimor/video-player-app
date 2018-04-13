# Video Player App
This app was created as an interview assignment.

This project was bootsrapped with [TypeScript React Starter](https://github.com/Microsoft/TypeScript-React-Starter).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!


## File structure
Since this is a small project, I chose to group items by
their form, e.g, all reducres are under a 'reducer' folder.

```
src
├── actions
│   └── ui
│   └── videos
├── components
│   └── addVideo
│   └── App
│   └── common
│   └── videoItem
│   └── videoList
│   └── videoPlayer
├── consts
│   └── actionTypes.tsx
│   └── types.tsx
├── middleware
│   └── logMiddleware
│   └── multiMiddleware
│   └── youTubeSearchMiddleware
├── reducers
│   └── networkReducer
│   └── rootReducer
│   └── videoReducer
├── index.tsx
├── index.css
├── store.tsx
```