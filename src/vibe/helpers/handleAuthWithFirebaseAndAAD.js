import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBZwJgwmY0D8kKYOFoqACdfuRmdgtRUBkM",
    authDomain: "test-ca6fd.firebaseapp.com",
    projectId: "test-ca6fd",
    storageBucket: "test-ca6fd.appspot.com",
    databaseURL: "https://test-ca6fd-default-rtdb.europe-west1.firebasedatabase.app",
    messagingSenderId: "544384862365",
    appId: "1:544384862365:web:a2e76406cf7b6b61d1ec74"
};

export const provider = new firebase.auth.OAuthProvider('microsoft.com');
provider.setCustomParameters({
    tenant: 'Vivacom.onmicrosoft.com',
});

export const database = firebase.database
firebase.initializeApp(firebaseConfig);

export default firebase;
