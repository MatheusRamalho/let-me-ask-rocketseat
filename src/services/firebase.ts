import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_DATABASE_URL,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDR_ID,
    appId: process.env.REACT_APP_APP_ID
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const database = firebase.database();

export { firebase, auth, database }


// {
//     "rules": {
//       "rooms": {
//         ".read": false,
//         ".write": "auth != null",
//         "$roomId": {
//           ".read": true,
//           ".write": "auth != null && (!data.exists() || data.child('authorId').val() == auth.id)",
//           "questions": {
//             ".read": true,
//             ".write": "auth != null && (!data.exists() || data.parent().child('authorId').val() == auth.id)",
//             "likes": {
//               ".read": true,
//               ".write": "auth != null && (!data.exists() || data.child('authorId').val() == auth.id)",  
//             }
//           }
//         }
//       }
//     }
//   }