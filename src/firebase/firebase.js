import * as firebase from 'firebase';

var config = {
    apiKey: "AIzaSyCXCLf1dcIOcbRVSddMQ_Yfx1Q2dd6CbY8",
    authDomain: "expensify-96c94.firebaseapp.com",
    databaseURL: "https://expensify-96c94.firebaseio.com",
    projectId: "expensify-96c94",
    storageBucket: "expensify-96c94.appspot.com",
    messagingSenderId: "65890594248"
};

firebase.initializeApp(config);

// test our connection
firebase.database().ref().set({
    name: 'Yudha Yuki'
});