import { initializeApp,getApp,getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyAbzMAi6ns-lLP6YOn1sh6JIuecCkCyOtw",
    authDomain: "disney-clone-7a765.firebaseapp.com",
    projectId: "disney-clone-7a765",
    storageBucket: "disney-clone-7a765.appspot.com",
    messagingSenderId: "526177408899",
    appId: "1:526177408899:web:42d13710a1ec3f8a3a48b6"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth,db }