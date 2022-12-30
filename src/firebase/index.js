import { initializeApp } from "firebase/app";
import { getStorage, ref, getDownloadURL } from "firebase/storage";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
    apiKey: "AIzaSyCUmrI_wN2HwJJPRhzcuDeEFFFmGMILXK8",
    authDomain: "techbeats-702da.firebaseapp.com",
    projectId: "techbeats-702da",
    storageBucket: "techbeats-702da.appspot.com",
    messagingSenderId: "761062833749",
    appId: "1:761062833749:web:c3d64d59e29e62081a5edc",
    measurementId: "G-SPXG864Q2R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Storage and get a reference to the service
const storage = getStorage(app);

export const getUrl = async(fileName)=>{
        try{
            const url = await getDownloadURL(ref(storage, `ambient/${fileName}.mp3`))
            return url;
        }
        catch(err){
            console.log(err);
        }
}

