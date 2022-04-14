import {createUserWithEmailAndPassword} from "firebase/auth";
import {
    GoogleAuthProvider,
    OAuthCredential,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
    UserCredential,
} from "@firebase/auth";
import {User} from "@firebase/auth/dist/node-esm/src/model/public_types";
import {Firebase} from "./firebase";

export type ProviderName = 'Google' | 'Github';

export class AuthService {
    private static instance: AuthService | undefined;

    static getInstance() {
        if (!this.instance) {
            this.instance = new AuthService();
        }

        return this.instance;
    }

    private constructor() {
    }

    private firebase: Firebase = Firebase.getInstance();

    async signUp(email: string, password: string) {
        return await createUserWithEmailAndPassword(this.firebase.getAuth(), email, password)
            .then((userCredential: UserCredential) => {
                const user: User = userCredential.user;

                console.log(`sign up succeed. email : ${email}`);
                console.dir(user);

            }).catch((error) => {
                const code = error.code;
                const message = error.message;

                console.log(`code : ${code}, message : ${message}`);

            });
    };

    async signIn(email: string, password: string) {
        return await signInWithEmailAndPassword(this.firebase.getAuth(), email, password)
            .then((userCredential: UserCredential) => {
                const user: User = userCredential.user;

                console.log(`sign in succeed. email : ${email}`);
                console.dir(user);

                return Promise.resolve(user);

            }).catch((error) => {
                console.log(`code : ${error.code}, message : ${error.message}`);

            });
    };

    async signOut() {
        return await signOut(this.firebase.getAuth())
            .then(() => {
                console.log(`sign out succeed.`);

                return Promise.resolve();

            }).catch((error) => {
                console.log(`code : ${error.code}, message : ${error.message}`);

            });
    }

    onAuthChanged(callback: (user: User | null) => void) {
        onAuthStateChanged(this.firebase.getAuth(), (user: User | null) => {
            console.log(`auth changed. ${user}`);

            callback(user);
        });
    }

    async google() {
        const provider = new GoogleAuthProvider();
        return await signInWithPopup(this.firebase.getAuth(), provider)
            .then((userCredential: UserCredential) => {
                console.log(`sign in result.`);

                const oAuthCredential: OAuthCredential | null = GoogleAuthProvider.credentialFromResult(userCredential);

                let accessToken: string | undefined = oAuthCredential?.accessToken;

                console.dir(`accessToken : ${accessToken}`);

                const user: User = userCredential.user;

                console.dir(user);

                return Promise.resolve(user);

            }).catch((error) => {
                console.log(`code : ${error.code}, message : ${error.message}`);

            });
    }
}