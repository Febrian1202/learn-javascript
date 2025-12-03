// // global scope
// let i = 20;

// for ( let i = 0; i < 10 ; i++) {
//     // local scope
//     console.log(`Local : ${i}`);
// }

// console.log(`Global : ${i}`);

// global scope (var tidak memiliki scope)
var i = 20;

for ( var i = 0; i < 10 ; i++) {
    // local scope
    console.log(`Local : ${i}`);
}

console.log(`Global : ${i}`);