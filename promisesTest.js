/**
 * Created by pc on 11/29/2016.
 */
'use strict';


let q = 100;
let p = Promise.resolve({})
p.then(() => q = 2)
  .then(result => {
    console.log(result)
    console.log(q)
  });

p.then(() => [2].concat(4))
  .then(result => {
    console.log(result)

  });


function someSyncFunction(a, b) {
  return a + b
}

let p1 = Promise.resolve({});
p1.then(() => someSyncFunction(2, 3) && {id: 1, name: "123"})
  .then(console.log)
  .then(() => {
    process.exit(0)
  })

