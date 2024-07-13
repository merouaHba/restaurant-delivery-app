import { app, firestore, storage } from "../firebase.config";
import { collection, deleteDoc, doc, getDocs, orderBy, query, setDoc } from "firebase/firestore";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import {
    deleteObject,
    getDownloadURL,
    ref,
    uploadBytesResumable,
} from "firebase/storage";
// // // Authenticate user using PROVIDER
export const AUTHPROVIDER = async (provider) => {
    const firebaseAuth = getAuth(app);
    const {
        user: { refreshToken, providerData },
    } = await signInWithPopup(firebaseAuth, provider);
    // add provider data to user
    await firebaseAddUser(providerData[0]);
    let userData = await firebaseGetUser(providerData[0].uid);
    return { refreshToken, userData };
 
};
// ADMIN USER MANAGEMENT

// firestore add to users collection
export const firebaseAddUser = async (data) => {
    // check if user already exists
    const user = await firebaseGetUser(data.uid);
    if (user.length === 0) {
        await setDoc(doc(firestore, "Users", `${data.uid}`), data, {
            merge: true,
        });
    }
}

// get user
export const firebaseGetUser = async (uid) => {
    const user = await getDocs(
        query(collection(firestore, "Users"))
    );
    let users = user.docs.map((doc) => doc.data());
    return users.filter((user) => user.uid === uid)
}

