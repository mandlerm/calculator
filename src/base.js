import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCb0sRBnt6snMwBn3bQCZC-eMDWraDkEAA",
    authDomain: "calculator-6e6bf.firebaseapp.com",
    databaseURL: "https://calculator-6e6bf.firebaseio.com"
    // projectId: "calculator-6e6bf",
    // storageBucket: "calculator-6e6bf.appspot.com",
    // messagingSenzderId: "939623297277",
    // appId: "1:939623297277:web:120f85b80cadbdf5"
});

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };

export default base;
