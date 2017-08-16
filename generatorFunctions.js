/**
 * Created by Ivan Talalaev on 2/13/2017.
 */

function* anotherSimpleGenerator(q) {
    yield q * 2;
    yield q * 2;
    yield q * 2;
}

function* simpleGenerator(i) {
    yield i++;
    yield i++;
    yield* anotherSimpleGenerator(i);
    yield i++;
    yield i++;
}

function* fibonacci() {
    let [prev, curr] = [0, 1];
    for (; ;) {
        yield curr;
        [prev, curr] = [curr, prev + curr];
    }
}

a = 100;
b = 10;
a = [b, b = a][0];
console.log(a, b);

let iterator = simpleGenerator(10);

// for (value of iterator) {
//   console.log(value);
// }
let count = 0;
for (fibbo of fibonacci()) {
    if (count > 10) break;
    console.log(`${fibbo}`);
    count++;
}


// console.log(iterator.next().value);
// console.log(iterator.next().value);
// console.log(iterator.next().value);
// console.log(iterator.next().value);
// console.log(iterator.next().value);
// console.log(iterator.next().value);
// console.log(iterator.next().value);
// console.log(iterator.next().value);
