import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore/lite";
import { getAuth,GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCdxVs3XMIj_5BBP7eEeOSXV2-tc19VFHo",
  authDomain: "discord-clone-ba4b4.firebaseapp.com",
  projectId: "discord-clone-ba4b4",
  storageBucket: "discord-clone-ba4b4.appspot.com",
  messagingSenderId: "754183574356",
  appId: "1:754183574356:web:92d104749eaa69aab92ec1",
  measurementId: "G-4EN34FEXGQ"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { db, auth, provider };