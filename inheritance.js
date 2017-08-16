/**
 * Created by Ivan Talalaev on 2/14/2017.
 */
function inherit(p) {
  if (p == null) throw TypeError(); // p must be a non-null object
  if (Object.create) // If Object.create() is defined...
    return Object.create(p); // then just use it.
  var t = typeof p; // Otherwise do some more type checking
  if (t !== "object" && t !== "function") throw TypeError();

  function f() { }; // Define a dummy constructor function.
  f.prototype = p; // Set its prototype property to p.
  return new f(); // Use f() to create an "heir" of p.
}

function A() {
  this.pe = 2;
  this.he = 3;
}
A.prototype.go = function () {
  return "asdfsdf";
};


function B() {
}

B.prototype = inherit(A.prototype);
// B.prototype = new A();
B.prototype.constructor = B;
B.prototype.what = 13;

a = new A();
b = new B();

A.prototype.su = "sudo reboot";

b1 = new B();
console.log(b1.su);
console.log(b1.pe);

debugger;
