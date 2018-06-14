const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({
            name: 'Yudha',
            age: 26
        });
    }, 5000);
});

console.log('before');

promise.then((data) => {
    console.log('1', data);
});

console.log('after');