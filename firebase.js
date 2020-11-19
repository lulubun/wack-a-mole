const firebase = require("firebase");
console.log("CL Log: firebase", firebase)
// import "firebase/auth";
// import "firebase/firestore";
const { API_KEY, DBURL, PROID, BUCKET, MESSID, APPID, AUTH_DOM } = require("./config");


const firebaseConfig = {
  apiKey: API_KEY,
  authDomain: AUTH_DOM,
  databaseURL: DBURL,
  projectId: PROID,
  storageBucket: BUCKET,
  messagingSenderId: MESSID,
  appId: APPID,
};

firebase.initializeApp(firebaseConfig);
const provider = new firebase.auth.GoogleAuthProvider();
const signInWithGoogle = () => {
  auth.signInWithPopup(provider);
};

const generateUserDocument = async (user, additionalData) => {
  if (!user) return;
  const userRef = firebase.firestore.doc(`users/${user.uid}`);
  const snapshot = await userRef.get();
  if (!snapshot.exists) {
    const { email, name, score } = user;
    try {
      await userRef.set({
        name,
        email,
        score,
      });
    } catch (error) {
      console.error("Error creating user document", error);
    }
  }
  return getUserDocument(user.uid);
};
const getUserDocument = async uid => {
  if (!uid) return null;
  try {
    const userDocument = await firebase.firestore.doc(`users/${uid}`).get();
    return {
      uid,
      ...userDocument.data()
    };
  } catch (error) {
    console.error("Error fetching user", error);
  }
};


const auth = firebase.auth();
const firestore = firebase.firestore();

module.exports = { auth, firestore, generateUserDocument, signInWithGoogle }