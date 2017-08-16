async function *asyncgenerator() {
    let fruits = ['apple', 'banana', 'raspberry', 'ananas'];
    for (let i = 0; i < fruits.length; i++) {

        yield await new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(fruits[i])
            }, 500)
        });
    }
}

async function callme() {
    for (let fruit of asyncgenerator()) {
        console.log(await fruit);
    }
}

callme()
// .then(result => {
//     console.log("done!")
// });
