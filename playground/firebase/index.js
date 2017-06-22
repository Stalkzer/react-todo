import firebase from 'firebase';
var config = {
    apiKey: "AIzaSyDRmVUrUmGvgDVaVgyRTQmCgFjKCX0TvMI",
    authDomain: "zerk-todo-app.firebaseapp.com",
    databaseURL: "https://zerk-todo-app.firebaseio.com",
    projectId: "zerk-todo-app",
    storageBucket: "zerk-todo-app.appspot.com",
    messagingSenderId: "496345262828"
};
firebase.initializeApp(config);
var firebaseRef = firebase.database().ref();

firebaseRef.set({
    app: {
        name: "Todo App",
        version: "1.0.0"
    },
    isRunning: true,
    user: {
        name: "Mohamed",
        age: 23
    }
});


var todosRef = firebaseRef.child("todos");

todosRef.on("child_added", (snapshot) => {
    console.log("New todo added", snapshot.key, snapshot.val());
});

todosRef.push({text: "Walk the dog ?"});

todosRef.push({text: "Go to the gym"});