// synchronous code = In an ordered sequence. 
//                      step-by-step linear instruction
//                      (start now, finish now)

// asychronous code = Out of sequence.  
//                     Ex. Access of database 
//                      Fetch a file
//                      Tasks that take time 
//                      (start now, finish sometime later)

console.log("START");
setTimeout(() => console.log("This is asynchoronous"), 5000);
console.log("END");