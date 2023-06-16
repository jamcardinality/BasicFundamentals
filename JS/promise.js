//Promise = object that encapsulates the result of an asynchronous operation let asynchrounous methods return values like synchronous methods "I promise tp return something in the future"

// the STATE is 'pending' then: 'fulfilled' or 'rejected'
// the RESULT is what can be returned 
// 2 parts producing & consuming

/*
const promise = new Promise((resolve, reject) => {

    let fileLoaded = false;

    if(fileLoaded){
        resolve("File Loaded");
    }
    else {
        reject("File NOT loaded");
    }

});

promise.then(value => console.log(value))
        .catch(error => console.log(error)) ;

*/

const wait = time => new Promise(resolve => {
    setTimeout(resolve, 5000);
});

wait(3000).then(() => console.log("Thanks for waiting!"));


