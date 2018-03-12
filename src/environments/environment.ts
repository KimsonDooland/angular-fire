// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase:{
    apiKey: "AIzaSyAzVZ09ARlFzhBD8EgtGXPI6dBL2g-FXZw",
    authDomain: "elevationstest.firebaseapp.com",
    databaseURL: "https://elevationstest.firebaseio.com",
    projectId: "elevationstest",
    storageBucket: "",
    messagingSenderId: "1089267136894",
  }
};
