// you can make ajax request without a promise and u can make promise without ajax request. 

promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject();
    }, 3000);

});

promise
    .then(() => console.log('finally done!'))
    .then(() => console.log('im done as well'))
    .catch(() => console.log('reject promise'))