import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBZwJgwmY0D8kKYOFoqACdfuRmdgtRUBkM",
    authDomain: "test-ca6fd.firebaseapp.com",
    projectId: "test-ca6fd",
    storageBucket: "test-ca6fd.appspot.com",
    messagingSenderId: "544384862365",
    appId: "1:544384862365:web:a2e76406cf7b6b61d1ec74"
};

export const provider = new firebase.auth.OAuthProvider('microsoft.com');
provider.setCustomParameters({
    tenant: 'Vivacom.onmicrosoft.com',
});

firebase.initializeApp(firebaseConfig);

export default firebase;
