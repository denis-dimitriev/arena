import {
  getAuth,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  signInWithRedirect, onAuthStateChanged } from "firebase/auth";
import { firebaseApp } from "./firebase.config";

export const auth = getAuth(firebaseApp)

const provider = new GoogleAuthProvider()

provider.setCustomParameters({
  prompt: "select_account"
})

export const signInWithGoogleRedirect = () => signInWithRedirect(auth, provider)

export const logInWithEmailAndPassword = async (email: string, password: string) => {

  return await signInWithEmailAndPassword(auth, email, password)
}

 export const signUpWithEmailAndPassword = async (email: string, password: string) => {
   if (!email || !password) {
     return
   }

   return await createUserWithEmailAndPassword(auth, email, password)
 }

 export const signOutUser = async () => await signOut(auth)

export const onAuthStateChangeListener = (callback: any) => onAuthStateChanged(auth, callback)