import firebase from "firebase/app";

import "firebase/firestore";
import "firebase/auth";

const config = {
	apiKey: "AIzaSyAOO1oe0MB9pJoKanuFt7McK6l_Y05bdNA",
	authDomain: "crwn-db-76d01.firebaseapp.com",
	databaseURL: "https://crwn-db-76d01.firebaseio.com",
	projectId: "crwn-db-76d01",
	storageBucket: "crwn-db-76d01.appspot.com",
	messagingSenderId: "349087370000",
	appId: "1:349087370000:web:927ad9ffc3dea099477395",
	measurementId: "G-K1Z6PSGW1X"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;
