import { useEffect, useState } from "react";
import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup } from 'firebase/auth'
import createFirebaseApp from "../utils/firebaseClient";

export default function Todo() {
    const [isLoggedIn, setLoggedIn] = useState<boolean>(false);

    useEffect(() => {
        const auth = getAuth(createFirebaseApp());
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setLoggedIn(true);
            } else {
                setLoggedIn(false);
            }
        })
    }, []);

    function doRedirectLogin() {
        const auth = getAuth(createFirebaseApp());
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider).catch((err) => {
            console.error(err);
        })
    }

    return (
        <div className="w-full h-64 bg-zinc-900 rounded-xl flex items-center justify-center gap-2">
            {isLoggedIn ? <p className="bg-white p-2 text-black rounded-xl">You are logged in!</p> : <button className="bg-white p-2 text-black rounded-xl" onClick={doRedirectLogin}>Sign in with google!</button>}
        </div>
    )
}