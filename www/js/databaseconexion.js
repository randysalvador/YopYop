var conexion1=  firebase.initializeApp({
    apiKey: "AIzaSyAoaKeKtwTKZj0Eempe1mDqls0nIWZg9zQ",
    authDomain: "northongotten.firebaseapp.com",
    databaseURL: "https://northongotten.firebaseio.com",
    projectId: "northongotten",
    storageBucket: "northongotten.appspot.com",
    measurementId: "G-NBZVG5TQJY"
},'database1');


var db1=firebase.firestore(conexion1);
var provider = new firebase.auth.GoogleAuthProvider();
