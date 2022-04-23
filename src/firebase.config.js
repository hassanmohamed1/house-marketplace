import { initializeApp } from "firebase/app";
import { getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCbSL7UDZvlLwjfdFFyFSuLHGpRAlXJkKI",
  authDomain: "house-market-app-c69c3.firebaseapp.com",
  projectId: "house-market-app-c69c3",
  storageBucket: "house-market-app-c69c3.appspot.com",
  messagingSenderId: "533067174799",
  appId: "1:533067174799:web:eb298ac2d9b52efdd631fa"
};


initializeApp(firebaseConfig);
export const db = getFirestore()