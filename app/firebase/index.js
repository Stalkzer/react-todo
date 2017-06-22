import firebase from 'firebase';

try {
    var config = {
    apiKey: "AIzaSyDRmVUrUmGvgDVaVgyRTQmCgFjKCX0TvMI",
    authDomain: "zerk-todo-app.firebaseapp.com",
    databaseURL: "https://zerk-todo-app.firebaseio.com",
    projectId: "zerk-todo-app",
    storageBucket: "zerk-todo-app.appspot.com",
    messagingSenderId: "496345262828"
    };
    firebase.initializeApp(config);
} catch (e) {

}

export var firebaseRef = firebase.database().ref();
export default firebase;