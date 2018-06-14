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

database.ref().on('value', (snapshot) => {
    console.log(snapshot.val());
});

setTimeout(() => {
    database.ref('age').set(29);
}, 3500);

setTimeout(() => {
    database.ref().off();
}, 7000);

setTimeout(() => {
    database.ref('age').set(30);
}, 10500);

// database.ref('location/city')
//     .once('value')
//     .then((snapshot) => {
//         const val = snapshot.val();
//         console.log(val);
//     })
//     .catch((e) => {
//         console.log('Error fetching data', e);
//     });

// test our connection
// database.ref().set({
//     name: 'Yudha Yuki',
//     age: 27,
//     stressLevel: 6,
//     job: {
//         title: 'Software developer',
//         company: 'Google'
//     },
//     location: {
//         city: 'Leiden',
//         country: 'The Netherlands'
//     }
// }).then(() => {
//     console.log('Data is saved!');
// }).catch((e) => {
//     console.log('This failed.', e);
// });

// database.ref('isSingle').set(null);

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


// database.ref().update({
//     name: 'Yuki',
//     age: 27,
//     job: 'Web developer',
//     isSingle: null
// });


// database.ref().update({
//     job: 'Manager',
//     'location/city': 'Boston'
// });


// database.ref().update({
//     stressLevel: 9,
//     'job/company': 'Amazon',
//     'location/city': 'Seattle'
// });
