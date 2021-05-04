import firebase from "firebase/app";
import "firebase/auth";
import { firebaseConfig } from "./FirebaseConfig";

export const initializeLoginFramework = () => {
    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }
}

export const handleGoogleIn = () => {
    const googleProvider = new firebase.auth.GoogleAuthProvider();
    return firebase.auth()
        .signInWithPopup(googleProvider)
        .then(res => {
            const { displayName, photoURL, email } = res.user;
            const signedIn = {
                isSignedIn: true,
                name: displayName,
                email: email,
                photo: photoURL,
                success: true
            }
            setUserToken();
            return signedIn;

        })
        .catch(err => {
            console.log(err);
            console.log(err.massage);
        })
}

const setUserToken = () => {
    firebase.auth().currentUser.getIdToken(/* forceRefresh */ true).then(function (idToken) {
        sessionStorage.setItem('token', idToken);
    }).catch(function (error) {
        // Handle error
        console.log(error)
    });
}
