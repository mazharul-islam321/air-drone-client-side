import React from "react";
import initializeAuthentication from "../pages/Login/Firebase/firebase.init";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

initializeAuthentication();
const useFirebase = () => {
    const auth = getAuth();
    return (
        <div>
            <h2>this is usefirebase page</h2>
        </div>
    );
};

export default useFirebase;
