/**
 * Created by Ivan Talalaev on 1/25/2017.
 */

let uniqueInteger = (function () {
  let counter = 0;
  return function () {
    return counter++;
  }
}());

console.log(uniqueInteger());
console.log(uniqueInteger());
console.log(uniqueInteger());
console.log(uniqueInteger());


function counter() {
  let n = 0;
  return {
    count: function () {
      return n++;
    },
    reset: function () {
      n = 0;
    }
  };
};

let c = counter(), d = counter();

console.log("----------------");
console.log(c.count());
console.log(c.count());
console.log(d.count());
console.log(d.count());
console.log(c.count());
console.log(d.count());
console.log(c.reset());
console.log(d.count());
console.log(c.count());
console.log(d.count());


let scope1 = function () {
  let counter = 1;
  return function () {
    return counter++
  };
};
console.log("-----------------");
console.log(scope1()());
console.log(scope1()());
console.log(scope1()());


function scope2(start) {
  return {
    get count() {
      return start++;
    },
    set count(m) {
      start = m;
    }
  }
};

console.log("-----------------");

let scope2inst = scope2(1000);

console.log(scope2inst.count)
console.log(scope2inst.count)
console.log(scope2inst.count)
console.log(scope2inst.count)
scope2inst.count = 2000;
console.log(scope2inst.count)
console.log(scope2inst.count)
console.log(scope2inst.count)

console.log("***********")

// This function adds property accessor methods for a property with
// the specified name to the object o. The methods are named get<name>
// and set<name>. If a predicate function is supplied, the setter
// method uses it to test its argument for validity before storing it.
// If the predicate returns false, the setter method throws an exception.
//
// The unusual thing about this function is that the property value
// that is manipulated by the getter and setter methods is not stored in
// the object o. Instead, the value is stored only in a local variable
// in this function. The getter and setter methods are also defined
// locally to this function and therefore have access to this local variable.
// This means that the value is private to the two accessor methods, and it
// cannot be set or modified except through the setter method.
function addPrivateProperty(o, name, predicate) {
  var value; // This is the property value
// The getter method simply returns the value.
  o["get" + name] = function() { return value; };
// The setter method stores the value or throws an exception if
// the predicate rejects the value.
  o["set" + name] = function(v) {
    if (predicate && !predicate(v))
      console.log("set" + name + ": invalid value " + v);
    else
      value = v;
  };
}
// The following code demonstrates the addPrivateProperty() method.
var o = {}; // Here is an empty object
// Add property accessor methods getName and setName()
// Ensure that only string values are allowed
addPrivateProperty(o, "Name", function(x) { return typeof x == "string"; });
o.setName("Frank"); // Set the property value
console.log(o.getName()); // Get the property value
o.setName(0); // Try to set a value of the wrong type


console.log("**************************");
// Return an array of functions that return the values 0-9
function constfuncs() {
  var funcs = [];
  for(var i = 0; i < 10; i++)
    funcs[i] = function() { return i; };
  return funcs;
}
var funcs = constfuncs();
for (var i = 0; i < 10; i++) {
  console.log(funcs[5]()); // What does this return?
}


process.exit(0);
