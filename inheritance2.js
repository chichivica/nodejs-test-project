/**
 * Created by Ivan Talalaev on 2/14/2017.
 */
class A {
  constructor(_a, _b) {
    this.a = _a * 2;
    this.b = _b * 2;
  }
}
class B extends A {

}


let a = new A(3, 5);
let b = new B(4, 5);

console.log(b.a);
console.log(b.b);
debugger;

