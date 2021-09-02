import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDB3dwO2iuIiboCD_gcAECctaPmNLL75k8",
    authDomain: "cookbook-248b9.firebaseapp.com",
    databaseURL: "https://cookbook-248b9.firebaseio.com",
    projectId: "cookbook-248b9",
    storageBucket: "cookbook-248b9.appspot.com",
    messagingSenderId: "351867999892",
    appId: "1:351867999892:web:55d06f16665198e6aac681",
    measurementId: "G-FTH6SEQE7Q"
};


firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
// db.enablePersistence();
// db.disableNetwork();
export { db };
