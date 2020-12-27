import firebaseClient from "firebase/app";
import "firebase/auth";

/*

Copy/paste your *client-side* Firebase credentials below. 

To get these, go to the Firebase Console > open your project > Gear Icon >
Project Settings > General > Your apps. If you haven't created a web app
already, click the "</>" icon, name your app, and copy/paste the snippet.
Otherwise, go to Firebase SDK Snippet > click the "Config" radio button >
copy/paste.

*/
const CLIENT_CONFIG = {
  apiKey: "AIzaSyDNMrQ4JlSvmyU5zmVWWyA2KA5FmbgBaL8",
  authDomain: "nuxt-auth-e7e0f.firebaseapp.com",
  projectId: "nuxt-auth-e7e0f",
  storageBucket: "nuxt-auth-e7e0f.appspot.com",
  messagingSenderId: "215859126215",
  appId: "1:215859126215:web:a2fd6c24c84faa38b5c3e2",
};

if (typeof window !== "undefined" && !firebaseClient.apps.length) {
  firebaseClient.initializeApp(CLIENT_CONFIG);
  firebaseClient
    .auth()
    .setPersistence(firebaseClient.auth.Auth.Persistence.SESSION);
  (window as any).firebase = firebaseClient;
}

export { firebaseClient };
