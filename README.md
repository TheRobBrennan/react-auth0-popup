# Welcome
This project is based off the tutorial [React Tutorial with Popup Authentication: Build a React application using popup authentication and React Hooks](https://auth0.com/blog/build-react-apps-using-react-hooks-and-auth0-auth-popup/).

Thanks to a [pull request](https://github.com/TheRobBrennan/react-with-hooks-and-auth0/pull/1) by [@brunokrebs](https://github.com/brunokrebs), this example code has been updated to use some nice in-line authentication with [Auth0](https://auth0.com).

# TL:DR
Looking for an abbreviated version of the tutorial? Here is where you can find my crib notes - very much a work-in-progress as I follow along with the tutorial.

## Initial setup
**IMPORTANT! This project is now using Docker to spin up both the front-end web application and the back-end API. Please be sure to review `DOCKER.md` for details.**

### Our web application
This tutorial requires the latest version of React, which is `React v16.8.0-alpha.0`. This needs to be installed after [create-react-app](https://github.com/facebook/create-react-app) has been installed.
```
$ npx create-react-app react-with-hooks-and-auth0
$ cd react-with-hooks-and-auth0
$ npm run start

Verify that create-react-app has successfully installed by visiting [http://localhost:3000](http://localhost:3000) in your web browser.

$ npm install -S react@16.8.0-alpha.0 react-dom@16.8.0-alpha.0
```

### Auth0

#### Initial setup
To get started with [Auth0](https://auth0.com), please create a free account or sign in with your existing account.

Ready? Let's go:
+ Click on the big button in the upper right-hand corner that says `+ New Application`
  - Give the application a name (such as `react-with-hooks-and-auth0`)
  - Click on `Single Page Web App`
  - Click on `Create`
+ Select `React` as the technology we are using for the web app

#### Create an API
Time to set up an API for our project:
+ Visit the [Auth0 API Dashboard](https://manage.auth0.com/#/apis)
+ Click on the big button in the upper right-hand corner that says `+ Create API`
  - Give an example name such as `tvshows-movie-api`
  - Give an example identifier such as `https://tvmoviesapi`
+ Click on the `Settings` tab and verify that our `name` and `identifier` are what we expect

## API
### Data
```
$ mkdir -p api/data
$ touch api/data/tvShows.json
  // Create some sample data
$ touch api/data/movies.json
  // Create some sample data

// Create a config file for our API
$ touch api/config.js
  // IMPORTANT: Be sure to add `api/config.js` to `.gitignore` so you do not commit your credentials!!
```
### Routes
```
$ touch api/routes.js
$ npm install --save express express-jwt jwks-rsa

// Update api/routes.js
```

## Our single-page-application
### Server
```
$ mkdir server
$ touch server/server.js
$ npm install --save body-parser cors

// Update server/server.js

// Start the server
$ node server/server.js

// If you see "Listening on port 3005" your server is online and ready to go
```

### Client
```
$ mkdir -p src/auth
$ touch src/auth/config.js
  // IMPORTANT: Be sure to add `src/auth/config.js` to `.gitignore` so you do not commit your credentials!!
```
#### Auth0 revisited
We need to update Auth0 with proper settings:
+ `Allowed Callbacks URL` -> `http://localhost:3000`
+ `Allowed Web Origins` -> `http://localhost:3000`
+ `Allowed Logout URL` -> `http://localhost:3000`
+ Click on `Save Changes`

#### Create an Auth0 service file
This is where the magic will happen for authentication in our app.
```
$ npm install --save auth0-js
$ touch src/auth/service.js

// Create the src/auth/service.js
"Notice in the `responseType` we have `id_token` `token`. We are going to be using both the id token and the access token for this project. And in the `scope`, we will have the `openid`, `profile` and `email` coming through.

We are going to be using different variables throughout our functions within our service.js file. Let’s get those set and declared. By setting things like our idToken or idTokenPayload to null, we are going to allow ourselves to give those values when necessary.

At Auth0, we do not recommend saving user information to localStorage but we will save the authFlag to localStorage."
```

#### Front-end components
We are going to be using three components for our application. One parent and two children components:
+ `App.js`
+ `TvShows.js`
+ `Movies.js`

```
// Modify `src/App.js` as guided

$ mkdir -p src/components
$ touch src/components/TvShows.js
$ touch src/components/Movies.js
$ touch src/components/styles.css

// Modify `src/components/TvShows.js`
  // NOTE: We are allowing this information without any authentication

// Modify `src/components/Movies.js`
  // Key differences will include storing an accessToken and importing the auth/service file

// Modify `src/components/styles.css`
```

## Running the app on your local computer
If you have followed this guide (and/or the original tutorial) - and you have created the appropriate `docker-compose.dev.secrets.yml` file as guided by `DOCKER.md` - you should be able to run your application:

```
$ npm start
```

The web application will be available at [http://localhost:3000](http://localhost:3000).
The back-end API server will be available at [http://localhost:3005/api](http://localhost:3005/api).