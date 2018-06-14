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

const database = firebase.database();

// test our connection
database.ref().set({
    name: 'Yudha Yuki',
    age: 27,
    isSingle: true,
    location: {
        city: 'Leiden',
        country: 'The Netherlands'
    }
}).then(() => {
    console.log('Data is saved!');
}).catch((e) => {
    console.log('This failed.', e);
});

database.ref('isSingle').set(null);

// Delete an attribute
// database.ref('isSingle')
//     .remove()
//     .then(() => {
//         console.log('Data was removed');
//     }).catch((e) => {
//         console.log('did not remove data', e);
//     });


// Delete whole data
// database.ref()
//     .remove()
//     .then(() => {
//         console.log('Data was removed');
//     }).catch((e) => {
//         console.log('did not remove data', e);
//     });