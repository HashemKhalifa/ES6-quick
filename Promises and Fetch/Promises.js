// you can make ajax request without a promise and u can make promise without ajax request. 

promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject(); // reject or resolve 
    }, 3000); // async code with promises.

});

promise
    .then(() => console.log('finally done!'))
    .then(() => console.log('im done as well'))
    .catch(() => console.log('reject promise'))