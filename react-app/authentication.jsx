import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth'

const auth = getAuth();
export const user = auth.currentUser;

console.log(user);

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
            console.log(e);
        })
}

export function signIn(email, password) {
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
        }).catch((e) => {
            console.log(e);
        })
}

export function signOut() {
    signOut(auth)
        .then(() => {
            console.log('SIGNED OUT');
        }).catch((e) => {
            console.log("sign out ERROR");
        })
}