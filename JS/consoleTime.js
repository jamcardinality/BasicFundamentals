// console.time() = Starts a timer you can use to track how long an operation takes. Give each timer a unique name.

//start
console.time("Response time");

//alert("Click the Ok Button");
setTimeout(() => console.log("HELLO"), 3000);

//end
console.timeEnd("Response time");