// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { getDatabase, ref, get } from "firebase/database";
// import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DB_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getDatabase(app);
// const storage = getStorage(app);

// Google login
export async function googleLogin() {
  const provider = new GoogleAuthProvider(); // Google Login Setting

  // 자동 로그인 방지
  provider.setCustomParameters({
    propmt: "select_account",
  });

  await signInWithPopup(auth, provider)
    .then((data) => {
      return data.user;
    })
    .catch((error) => {
      console.log(error);
    });
}

// Google logout, logout
export async function logout() {
  await signOut(auth)
    .then(() => {})
    .catch((error) => console.log(error));
}

// Check user state
export function onUserState(callback) {
  onAuthStateChanged(auth, async (user) => {
    if (user) {
      await adminUser(user)
        .then((updateUser) => {
          callback(updateUser);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  });
}

// Check admin user
async function adminUser(user) {
  try {
    const snapshot = await get(ref(database, "admin"));
    if (snapshot.exists()) {
      const admins = snapshot.val();
      const isAdmin = admins.includes(user.email);
      return { ...user, isAdmin };
    }
    return user;
  } catch (error) {
    console.error(error);
  }
}

// Signup
export async function joinEmail(email, password) {
  const auth = getAuth(); //저장할 사용자 인증폼을 불러옴
  console.log(auth);
  try {
    const userCredit = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredit.user;
    return user;
  } catch (error) {
    console.error(error);
  }
}

export async function loginEmail(email, password) {
  try {
    const userCredit = await signInWithEmailAndPassword(auth, email, password);
    return userCredit.user;
  } catch (error) {
    console.error(error);
  }
}
