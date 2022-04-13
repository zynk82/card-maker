import {initializeApp} from "firebase/app";
import {getAuth} from "firebase/auth";
import {FirebaseApp} from "@firebase/app";
import {Auth} from "@firebase/auth";

export class Firebase {
    private static instance: Firebase | null = null;

    private static app: FirebaseApp;
    private static auth: Auth;

    getAuth() {
        return Firebase.auth;
    }

    static getInstance = (): Firebase => {
        if (Firebase.instance === null) {
            const firebaseConfig = {
                apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
                authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
                projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
                storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
                messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
                appId: process.env.REACT_APP_FIREBASE_APP_ID,
                measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
            };

            Firebase.app = initializeApp(firebaseConfig);
            Firebase.auth = getAuth(this.app);

            Firebase.instance = new Firebase();
        }

        return Firebase.instance;
    }

    private constructor() {
    }
}
