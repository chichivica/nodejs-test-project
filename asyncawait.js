let fs = require('fs');


function readDir(path) {
    return new Promise((resolve, reject) => {
        fs.readdir(path, (err, files) => {
            if (err) {
                return reject(err);
            }
            resolve(files)
        })
    })
}


function wait(timeout) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve()
        }, timeout)
    })
}

async function requestWithRetry() {
    const MAX_RETRIES = 10;
    for (let i = 0; i < MAX_RETRIES; i++) {
        try {
            let result = await readDir('./files');
            console.log(result);
            return result;

        }
        catch (err) {
            console.log(err)
        }
    }
}

function asyncThing(value) {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(value * 2), 100)
    })
}

async function main() {
    var original = [1, 2, 3, 4, 5];
    var mapped = [];

    for (let i = 0; (i < original.length); i++) {
        mapped[i] = await asyncThing(original[i]);
    }

    return mapped;
}

main()
    .then(v => console.log(v))
    .catch(err => console.error(err))




