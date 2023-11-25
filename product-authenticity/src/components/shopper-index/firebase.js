import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD2HNGhYs9DeziPRuCrqKtlW4pSPTsOJxk",
  authDomain: "ample-energy-46572.firebaseapp.com",
  projectId: "ample-energy-46572",
  storageBucket: "ample-energy-46572.appspot.com",
  messagingSenderId: "6234681489",
  appId: "1:6234681489:web:86c7253dac1a58200f8f30"
};
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
export default firebase
