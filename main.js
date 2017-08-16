/**
 * Created by Chichivica on 11/25/2016.
 */

class MyError extends Error{
  constructor(msg){
    super(msg);
  }
}

function what(str) {
  debugger
}

let path = "asdfasdf";
what(`./${path}`);


console.log((a && a.b) || (228));
process.exit(0);