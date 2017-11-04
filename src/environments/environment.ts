// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyAffX4maeByto8Ye6bASi71DMQGjfkxwlE",
    authDomain: "gift-the-code.firebaseapp.com",
    databaseURL: "https://gift-the-code.firebaseio.com",
    projectId: "gift-the-code",
    storageBucket: "gift-the-code.appspot.com",
    messagingSenderId: "991359982076"
  }
};
