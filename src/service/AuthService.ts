import {createUserWithEmailAndPassword} from "firebase/auth";
import {
    GoogleAuthProvider,
    OAuthCredential,
    signInWithEmailAndPassword,
    signInWithPopup,
    UserCredential
} from "@firebase/auth";
import {User} from "@firebase/auth/dist/node-esm/src/model/public_types";
import {Firebase} from "./firebase";

export type ProviderName = 'Google' | 'Github';

export class AuthService {
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

            }).catch((error) => {
                const code = error.code;
                const message = error.message;

                console.log(`code : ${code}, message : ${message}`);

            });
    };

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

            }).catch((error) => {
                const code = error.code;
                const message = error.message;

                console.log(`code : ${code}, message : ${message}`);

            });
    }
}