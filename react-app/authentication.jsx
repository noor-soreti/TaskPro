import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth'

const auth = getAuth();
export const user = auth.currentUser;

onAuthStateChanged(auth, (user) => {
    if (user !== null) {
        console.log(user);
    } else {
        console.log("NULL");
    }
})

export function createUser(email, password) {
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user
        }).catch((e) => {
            console.log("Register user ERROR: ", e);
        })
}

export function signIn(email, password) {
    return signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
        }).catch((e) => {
            console.log("Sign in ERROR: ", e);
        })
}

export function signOut() {
    signOut(auth)
        .then(() => {
            console.log('SIGNED OUT');
        }).catch((e) => {
            console.log("sign out ERROR: ", e);
        })
}