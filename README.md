# SpotifyStats

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.8.

# Spotify Dashboard/Configuring your node server

Need to log into or sign up for a Spotify Developer account [here](https://developer.spotify.com/dashboard/) to get started.
Once you have account setup and logged in, create a new app in the Spotify Dashboard.
From there, you will have the client id and client secret that you will need to add to your `server.env.js` in order to run the node server.
Your `server.env.js` should like something like the following:

```javascript
module.exports = {
  CLIENT_ID: 'your_client_id',
  CLIENT_SECRET: 'your_client_secret',
  REDIRECT_URI: 'http://localhost:8888/callback',
};
```

## Development server

Run `node server.js` to start backend server. It will be on `http://localhost:8888`.

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

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
