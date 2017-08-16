let camelCase = /[a-z]+|[A-Z][a-z]+/g;

let array = ["userAuthTokens",
    "bids",
    "ambitaOrderProcess"];

for (let name of array) {
    let dashSeparated = name
        .match(camelCase)
        .map(str => str.toLowerCase())
        .join("-");

    console.log(dashSeparated);
}

